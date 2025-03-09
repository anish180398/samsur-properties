/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface Property {
  id: string;
  title: string;
  slug: string;
  propertyType: 'Flat' | 'Plot' | 'Villa' | 'Commercial';
  purpose: 'Sale' | 'Resale' | 'Rental';
  description: string;
  price: number;
  location: string;
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

export async function getFeaturedProperties(): Promise<Property[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'property',
    'fields.featured': true,
  });

  return response.items.map((item: any) => ({
    id: item.sys.id,
    ...item.fields,
  }));
}

export async function getAllProperties(filters?: any): Promise<Property[]> {
  const query: any = {
    content_type: 'property',
  };

  if (filters) {
    // Add filter conditions based on the search parameters
  }

  const response = await contentfulClient.getEntries(query);

  return response.items.map((item: any) => ({
    id: item.sys.id,
    ...item.fields,
  }));
}

export async function getPropertyById(id: string): Promise<Property | null> {
  try {
    const response = await contentfulClient.getEntry(id);
    return {
      id: response.sys.id,
      ...response.fields as any,
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
} 