import { Property } from '@/types/contentful';
import PropertyCard, { PropertyCardSkeleton } from '@/components/PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          // Show 3 skeleton cards when loading/no data
          <>
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </>
        )}
      </div>
    </section>
  );
} 