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
    console.log('Fetching property with slug:', slug);
    
    const response = await client.getEntries<ContentfulProperty>({
      content_type: CONTENT_TYPES.PROPERTY,
      'fields.slug': slug,
      limit: 1,
      include: 2,
      select: 'fields.description,fields.title,fields.slug,fields.price,fields.location,fields.propertyType,fields.purpose,fields.size,fields.images,fields.features,fields.contactInfo,fields.isFeatured,fields.beds,fields.baths,fields.locationCoOrdinates'
    } as any);

    if (response.items.length > 0) {
      const item = response.items[0];
      console.log('Raw description from Contentful:', JSON.stringify(item.fields.description, null, 2));

      // Ensure images is always an array
      const images = Array.isArray(item.fields.images)
        ? (item.fields.images as Array<{ fields: { file: { url: string; }; }; }>).map(img => `https:${img.fields.file.url}`)
        : [];

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
        contactInfo: item.fields.contactInfo as Property['contactInfo'],
        isFeatured: !!item.fields.isFeatured,
        beds: item.fields.beds || 0,
        baths: item.fields.baths || 0,
        locationCoOrdinates: item.fields.locationCoOrdinates || ''
      };

      return property;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching property:', error);
    return null;
  }
}

export const getProperties = cache(async (query: ContentfulQueryOptions) => {
  try {
    const response = await client.getEntries<ContentfulProperty>({
      ...query,
      include: 2
    });
   
    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      price: item.fields.price,
      location: item.fields.location,
      propertyType: item.fields.propertyType,
      purpose: item.fields.purpose,
      size: item.fields.size,
      images: (item.fields.images as Array<{ fields: { file: { url: string; }; } }> ).map((img: any) => `https:${img.fields.file.url}`),
      features: item.fields.features || [],
      contactInfo: item.fields.contactInfo || { name: null, phone: null, email: null },
      isFeatured: item.fields.isFeatured || false,
      beds: item.fields.beds || 0,
      baths: item.fields.baths || 0,
      locationCoOrdinates: item.fields.locationCoOrdinates || ''
    }));
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
});

export const getFeaturedProperties = cache(async () => {
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
    const response = await client.getEntries<ContentfulService>({
      content_type: CONTENT_TYPES.SERVICE,
    });
    return response.items.map(item => ({
      id: item.sys.id,
      ...item.fields
    }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}); 