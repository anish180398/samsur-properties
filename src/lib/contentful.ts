/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'contentful';
import { cache } from 'react';
import type { EntrySkeletonType, Asset } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not defined');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

export const CONTENT_TYPES = {
  PROPERTY: 'property-2',
  SERVICE: 'service'
} as const;



interface ContentfulProperty extends EntrySkeletonType {
  fields: {
    title: string;
    slug: string;
    description: Document;
    price: number;
    location: string;
    propertyType: 'Flat' | 'Plot' | 'Villa' | 'Commercial';
    purpose: 'Sale' | 'Resale' | 'Rental';
    size: number;
    images: Array<{
      fields: {
        file: {
          url: string;
        };
      };
    }>;
    features: string[];
    contactInfo: {
      name: string | null;
      phone: string | null;
      email: string | null;
    };
    isFeatured: boolean;
    beds: number;
    baths: number;
    locationCoOrdinates: string;
    videoLink?: string;
  };
}

export interface Property {
  beds: number;
  baths: number;
  locationCoOrdinates: string;
  id: string;
  title: string;
  slug: string;
  description: Document;
  price: number;
  location: string;
  propertyType: 'Flat' | 'Plot' | 'Villa' | 'Commercial';
  purpose: 'Sale' | 'Resale' | 'Rental';
  size: number;
  images: string[];
  features: string[];
  contactInfo: {
    name: string | null;
    phone: string | null;
    email: string | null;
  };
  isFeatured: boolean;
  videoLink?: string;
}

interface ContentfulQueryOptions {
  content_type: string;
  'fields.slug'?: string;
  'fields.title[match]'?: string;
  'fields.propertyType'?: string;
  'fields.purpose'?: string;
  'fields.location[match]'?: string;
  'fields.price[gte]'?: number;
  'fields.price[lte]'?: number;
  'fields.isFeatured'?: boolean;
  limit?: number;
  order?: string;
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    console.log('🔍 Fetching property with slug:', slug);
    
    const response = await client.getEntries<ContentfulProperty>({
      content_type: CONTENT_TYPES.PROPERTY,
      'fields.slug': slug,
      limit: 1,
      include: 2,
      select: 'fields.description,fields.title,fields.slug,fields.price,fields.location,fields.propertyType,fields.purpose,fields.size,fields.images,fields.features,fields.contactInfo,fields.isFeatured,fields.beds,fields.baths,fields.locationCoOrdinates,fields.videoLink'
    } as any);

    console.log('📡 Contentful response:', {
      total: response.total,
      items: response.items.length,
      slug
    });

    if (response.items.length > 0) {
      const item = response.items[0];
      
      // Log available fields for debugging
      console.log('📋 Available fields:', Object.keys(item.fields));
      
      // Check for missing required fields
      const requiredFields = ['title', 'slug', 'description', 'price', 'location', 'propertyType', 'purpose', 'size'];
      const missingFields = requiredFields.filter(field => !item.fields[field]);
      
      if (missingFields.length > 0) {
        console.warn('⚠️ Missing required fields:', missingFields);
      }

      // Safely handle images
      const images = Array.isArray(item.fields.images)
        ? (item.fields.images as Array<{ fields: { file: { url: string; }; }; }>)
            .filter(img => img?.fields?.file?.url)
            .map(img => `https:${img.fields.file.url}`)
        : [];

      // Safe property transformation with fallbacks
      const property = {
        id: item.sys.id,
        title: item.fields.title as string,
        slug: item.fields.slug as string,
        description: item.fields.description as Document,
        price: item.fields.price as number,
        location: item.fields.location as string,
        propertyType: item.fields.propertyType as Property['propertyType'],
        purpose: item.fields.purpose as Property['purpose'],
        size: item.fields.size as number,
        images: images,
        features: (item.fields.features || []) as string[],
        contactInfo: item.fields.contactInfo || { name: null, phone: null, email: null },
        isFeatured: !!item.fields.isFeatured,
        beds: item.fields.beds || 0,
        baths: item.fields.baths || 0,
        locationCoOrdinates: item.fields.locationCoOrdinates || '',
        videoLink: item.fields.videoLink || undefined
      };

      console.log('✅ Property transformed successfully:', property.title);
      return property;
    }
    
    console.log('❌ No property found with slug:', slug);
    return null;
  } catch (error) {
    console.error('❌ Error fetching property:', error);
    return null;
  }
}

export const getProperties = cache(async (query: ContentfulQueryOptions) => {
  try {
    console.log('🔍 Fetching properties with query:', query);
    
    const response = await client.getEntries<ContentfulProperty>({
      ...query,
      include: 2
    });

    console.log('📡 Contentful response:', {
      total: response.total,
      items: response.items.length,
      query
    });
   
    const properties = response.items.map((item, index) => {
      try {
        // Log available fields for debugging
        console.log(`📋 Property ${index + 1} fields:`, Object.keys(item.fields));
        
        // Safely handle images
        const images = Array.isArray(item.fields.images)
          ? (item.fields.images as Array<{ fields: { file: { url: string; }; } }>)
              .filter(img => img?.fields?.file?.url)
              .map(img => `https:${img.fields.file.url}`)
          : [];

        return {
          id: item.sys.id,
          title: item.fields.title || 'Untitled Property',
          slug: item.fields.slug || '',
          description: item.fields.description || null,
          price: item.fields.price || 0,
          location: item.fields.location || 'Location not specified',
          propertyType: item.fields.propertyType || 'Flat',
          purpose: item.fields.purpose || 'Sale',
          size: item.fields.size || 0,
          images: images,
          features: item.fields.features || [],
          contactInfo: item.fields.contactInfo || { name: null, phone: null, email: null },
          isFeatured: item.fields.isFeatured || false,
          beds: item.fields.beds || 0,
          baths: item.fields.baths || 0,
          locationCoOrdinates: item.fields.locationCoOrdinates || '',
          videoLink: item.fields.videoLink || undefined
        };
      } catch (error) {
        console.error(`❌ Error processing property ${index + 1}:`, error);
        return null;
      }
    }).filter(Boolean); // Remove null entries

    console.log('✅ Properties processed successfully:', properties.length);
    return properties;
  } catch (error) {
    console.error('❌ Error fetching properties:', error);
    return [];
  }
});

export const getFeaturedProperties = cache(async () => {
  console.log('🔍 Fetching featured properties...');
  return getProperties({ 
    content_type: CONTENT_TYPES.PROPERTY,
    'fields.isFeatured': true, 
    limit: 6 
  });
});

// Revalidate the cache every 60 seconds
export const revalidate = 0;

export interface ContentfulService extends EntrySkeletonType {
  fields: {
    title: string;
    slug: string;
    description: string;
    icon?: Asset;
    features?: string[];
    content: unknown;
  };
}

export const getServices = cache(async () => {
  try {
    console.log('🔍 Fetching services...');
    
    const response = await client.getEntries<ContentfulService>({
      content_type: CONTENT_TYPES.SERVICE,
      include: 2
    });

    console.log('📡 Services response:', {
      total: response.total,
      items: response.items.length
    });

    const services = response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      icon: item.fields.icon as any,
      features: item.fields.features || [],
      content: item.fields.content as Document
    }));

    console.log('✅ Services processed successfully:', services.length);
    return services;
  } catch (error) {
    console.error('❌ Error fetching services:', error);
    return [];
  }
}); 