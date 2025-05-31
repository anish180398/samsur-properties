import { getProperties, getServices, CONTENT_TYPES } from '@/lib/contentful';
import { defaultMetadata } from './metadata';
import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import Services from '@/components/home/Services';
import PropertyCategories from '@/components/PropertyCategories';
import Newsletter from '@/components/Newsletter';
import { Suspense } from 'react';

export const metadata = defaultMetadata;

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function Home() {
  const [featuredProperties] = await Promise.all([
    getProperties({ 
      content_type: CONTENT_TYPES.PROPERTY,
      'fields.isFeatured': true, 
      limit: 6 
    }).catch(() => []),
    getServices().catch(() => []),
  ]);

  const properties = await getProperties({ content_type: CONTENT_TYPES.PROPERTY });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen">
        <Hero />
        <FeaturedProperties properties={featuredProperties} />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <PropertyCategories properties={properties} />
          </div>
        </section>
        <Services />
        {/* <Newsletter /> */}
      </main>
    </Suspense>
  );
} 