import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyBySlug, getProperties } from '@/lib/contentful';
import { Property } from '@/types/contentful';
import PropertyImages from '@/components/property/PropertyImages';
import PropertyDetails from '@/components/property/PropertyDetails';
import PropertyContact from '@/components/property/PropertyContact';
import PropertyMap from '@/components/PropertyMap';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

// Disable static generation for this route
export const dynamic = 'force-dynamic';

type PageProps = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

// Generate metadata for SEO
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  try {
    const property = await getPropertyBySlug(props.params.slug);
    
    if (!property) {
      return { 
        title: 'Property Not Found | Samsur Properties',
        description: 'The requested property could not be found.'
      };
    }

    const plainTextDescription = property.description 
      ? typeof property.description === 'string' 
        ? property.description 
        : documentToPlainTextString(property.description) 
      : `View details about ${property.title} at Samsur Properties.`;

    return {
      title: `${property.title} | Samsur Properties`,
      description: plainTextDescription,
      openGraph: {
        title: property.title,
        description: plainTextDescription,
        images: property.images[0] ? [property.images[0]] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error | Samsur Properties',
      description: 'An error occurred while loading the property details.'
    };
  }
}

// Generate static paths for all properties
export async function generateStaticParams() {
  try {
    const properties = await getProperties({
      content_type: 'property-2',
      limit: 100 // Adjust this number based on your needs
    });

    return properties.map((property) => ({
      slug: property.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main page component
export default async function PropertyPage(props: PageProps) {
  try {
    const property = await getPropertyBySlug(props.params.slug);

    if (!property) {
      console.log(`Property not found for slug: ${props.params.slug}`);
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-16 mt-12">
        <h1 className="text-3xl font-bold mb-6">{property.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PropertyImages images={property.images} title={property.title} />
          <PropertyDetails property={property} />
        </div>

        {property.locationCoOrdinates && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <PropertyMap 
              address={property.location} 
              coordinates={property.locationCoOrdinates}
              className="h-[400px] rounded-lg" 
            />
          </div>
        )}

        <PropertyContact contactInfo={property.contactInfo} />
      </div>
    );
  } catch (error) {
    console.error('Error rendering property page:', error);
    throw new Error('Failed to load property details');
  }
}