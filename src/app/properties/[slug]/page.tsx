import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyBySlug } from '@/lib/contentful';
import { Property } from '@/types/contentful';
import PropertyImages from '@/components/property/PropertyImages';
import PropertyDetails from '@/components/property/PropertyDetails';
import PropertyContact from '@/components/property/PropertyContact';
import PropertyMap from '@/components/PropertyMap';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);
  
  if (!property) {
    return {
      title: 'Property Not Found | Samsur Properties',
    };
  }

  return {
    title: `${property.title} | Samsur Properties`,
    description: property.description || '',
  };
}

export default async function PropertyPage({ params }: Props) {
  const property = await getPropertyBySlug(params.slug) as Property;

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{property.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <PropertyImages images={property.images} title={property.title} />
        <PropertyDetails property={property} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <PropertyMap 
          address={property.location} 
          coordinates={property.locationCoOrdinates}
          className="h-[400px] rounded-lg" 
        />
      </div>

      <PropertyContact contactInfo={property.contactInfo} />
    </div>
  );
} 