import { Metadata } from 'next';
import { getProperties, CONTENT_TYPES, ContentfulQuery } from '@/lib/contentful';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { PropertyCardSkeleton } from '@/components/PropertyCard';

interface Props {
  searchParams: ReadonlyURLSearchParams | {
    query?: string;
    type?: string;
    purpose?: string;
    location?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  };
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

export default async function PropertiesPage({ searchParams }: Props) {
  // Build the query object
  const query: QueryParams = {
    content_type: CONTENT_TYPES.PROPERTY,
  };

  // Safely get search params
  const searchQuery = searchParams instanceof URLSearchParams 
    ? searchParams.get('query')
    : searchParams.query;

  const type = searchParams instanceof URLSearchParams 
    ? searchParams.get('type')
    : searchParams.type;

  const purpose = searchParams instanceof URLSearchParams 
    ? searchParams.get('purpose')
    : searchParams.purpose;

  const location = searchParams instanceof URLSearchParams 
    ? searchParams.get('location')
    : searchParams.location;

  const minPrice = searchParams instanceof URLSearchParams 
    ? searchParams.get('minPrice')
    : searchParams.minPrice;

  const maxPrice = searchParams instanceof URLSearchParams 
    ? searchParams.get('maxPrice')
    : searchParams.maxPrice;

  const sort = searchParams instanceof URLSearchParams 
    ? searchParams.get('sort')
    : searchParams.sort;

  if (searchQuery) {
    query['fields.title[match]'] = searchQuery;
  }

  if (type) {
    query['fields.propertyType'] = type;
  }

  if (purpose) {
    query['fields.purpose'] = purpose;
  }

  if (location) {
    query['fields.location[match]'] = location;
  }

  if (minPrice) {
    query['fields.price[gte]'] = parseInt(minPrice);
  }

  if (maxPrice) {
    query['fields.price[lte]'] = parseInt(maxPrice);
  }

  const sortOrder = getSortOrder(sort);
  if (sortOrder) {
    query.order = sortOrder;
  }

  const properties = await getProperties(query);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Properties</h1>
      
      <div className="mb-8">
        <PropertyFilters />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
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