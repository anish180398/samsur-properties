import type { Document } from '@contentful/rich-text-types';

export interface Property {
  id: string;
  title: string;
  slug: string;
  propertyType: 'Flat' | 'Plot' | 'Villa' | 'Commercial';
  purpose: 'Sale' | 'Resale' | 'Rental';
  description: Document| any;
  price: number;
  beds: number;
  baths: number;
  location: string;
  locationCoOrdinates: string;
  size: number;
  images: string[];
  videoLink?: string;
  features: string[];
  contactInfo: {
    name: string | null;
    phone: string | null;
    email: string | null;
  };
  isFeatured: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  features?: string[];
  content: Document; // Using proper rich text type
} 