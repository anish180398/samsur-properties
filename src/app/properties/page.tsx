import { Metadata } from 'next';
import { getProperties, CONTENT_TYPES, Property } from '@/lib/contentful';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

interface QueryParams {
  content_type: string;
  [key: string]: unknown;
}

function getSortOrder(sort: string | null | undefined): string {
  switch (sort) {
    case 'price-asc':
      return 'fields.price';
    case 'price-desc':
      return '-fields.price';
    default:
      return '';
  }
}

export const metadata: Metadata = {
  title: 'Properties | Samsur Properties',
  description: 'Browse our wide range of properties',
};

export default async function PropertiesPage({ searchParams }: PageProps) {
  // Build the query object
  const query: QueryParams = {
    content_type: CONTENT_TYPES.PROPERTY,
  };

  // Get search params directly
  const {
    query: searchQuery,
    type,
    purpose,
    location,
    minPrice,
    maxPrice,
    sort
  } = searchParams;

  if (searchQuery) {
    query['fields.title[match]'] = searchQuery as string;
  }

  if (type) {
    query['fields.propertyType'] = type as string;
  }

  if (purpose) {
    query['fields.purpose'] = purpose as string;
  }

  if (location) {
    query['fields.location[match]'] = location as string;
  }

  if (minPrice) {
    query['fields.price[gte]'] = parseInt(minPrice as string);
  }

  if (maxPrice) {
    query['fields.price[lte]'] = parseInt(maxPrice as string);
  }

  const sortOrder = getSortOrder(sort as string | undefined);
  if (sortOrder) {
    query.order = sortOrder;
  }

  const properties = await getProperties(query);

  return (
    <div className="container mx-auto px-4 py-20 mt-12">
      <h1 className="text-3xl font-bold mb-8">Properties</h1>
      
      <div className="mb-8">
        <PropertyFilters />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.length > 0 ? (
          properties.map((property: Property) => (
            <PropertyCard 
              key={property.id}
              property={{
                ...property,
                beds: property.beds || 0,
                baths: property.baths || 0,
                locationCoOrdinates: property.locationCoOrdinates || ''
              }} 
            />
          ))
        ) : (
          // Show 6 skeleton cards when loading/no data
          <>
            <div>No properties found</div>
          </>
        )}
      </div>
    </div>
  );
} 