
import { Metadata } from 'next';
import { getProperties, CONTENT_TYPES } from '@/lib/contentful';
import { Property } from '@/types/contentful';
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
    <div className="relative min-h-screen overflow-hidden">
  {/* Enhanced Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
  <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
  <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
  
  {/* Floating geometric elements */}
  <div className="absolute top-48 left-1/4 w-6 h-6 border border-blue-400/20 rounded-lg rotate-45 animate-pulse" />
  <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce [animation-duration:4s]" />
  <div className="absolute top-80 right-1/4 w-5 h-5 border border-emerald-400/20 rounded-full animate-pulse [animation-delay:2s]" />

  <div className="relative container mx-auto px-6 py-24 mt-12">
    {/* Enhanced Header Section */}
    <div className="mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
        <span className="text-sm font-medium text-blue-700">BROWSE ALL LISTINGS</span>
      </div>
      
      <div className="relative mb-8">
        {/* Shadow text for depth */}
        <h1 className="absolute text-4xl md:text-6xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
          Properties
        </h1>
        {/* Main text */}
        <h1 className="relative text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Properties
        </h1>
      </div>
      
      <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
        Explore our comprehensive collection of premium properties across Chennai. Find your perfect home or investment opportunity.
      </p>
    </div>

    {/* Enhanced Filters Section */}
    <div className="mb-12 relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-xl opacity-50" />
      <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
        <div className="relative">
          <PropertyFilters />
        </div>
      </div>
    </div>

    {/* Enhanced Properties Grid */}
    <div className="relative">
      {/* Background grid pattern using inline styles instead of styled-jsx */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
        {properties.length > 0 ? (
          properties.map((property: Property, index: number) => (
            <div
              key={property.id}
              className="transform-gpu animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <PropertyCard 
                property={{
                  ...property,
                  beds: property.beds || 0,
                  baths: property.baths || 0,
                  locationCoOrdinates: property.locationCoOrdinates || ''
                }} 
              />
            </div>
          ))
        ) : (
          // Enhanced No Properties State
          <div className="col-span-full">
            <div className="relative group">
              {/* Floating background glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-slate-200/20 via-slate-100/10 to-slate-200/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-30" />
              
              {/* Main container */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-16 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Animated icon */}
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="absolute -inset-4 bg-gradient-to-r from-slate-300/30 to-slate-400/30 rounded-full blur-xl animate-pulse" />
                      <div className="relative w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto flex items-center justify-center shadow-2xl border border-white/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                        <svg className="relative w-12 h-12 text-slate-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced text content */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent">
                      No Properties Found
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-md mx-auto">
                      Try adjusting your filters or check back later for new listings that match your criteria
                    </p>
                  </div>
                  
                  {/* Action suggestions */}
                  <div className="mt-12 space-y-4">
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wide mb-6">
                      Suggestions
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { icon: '🔍', text: 'Clear all filters' },
                        { icon: '📍', text: 'Try different location' },
                        { icon: '💰', text: 'Adjust price range' }
                      ].map((suggestion, index) => (
                        <div 
                          key={index}
                          className="group cursor-pointer transform-gpu hover:scale-105 transition-all duration-300"
                        >
                          <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                            <div className="relative bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-lg group-hover:shadow-xl group-hover:bg-white/80 transition-all duration-300">
                              <div className="text-2xl mb-2">{suggestion.icon}</div>
                              <div className="text-sm font-medium text-slate-600 group-hover:text-slate-700">
                                {suggestion.text}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact CTA */}
                  <div className="mt-12">
                    <div className="relative group/cta inline-block">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-emerald-600/30 rounded-2xl opacity-50 group-hover/cta:opacity-100 blur-xl transition-all duration-500" />
                      <button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl transform-gpu group-hover/cta:scale-105 group-hover/cta:translate-y-[-2px] transition-all duration-300 border border-white/20 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                        <span className="relative z-10 flex items-center gap-2">
                          Contact Our Experts
                          <svg className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Load More Section (if needed) */}
    {properties.length > 0 && (
      <div className="text-center mt-16">
        <div className="relative inline-block group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-2xl opacity-50 group-hover:opacity-100 blur-xl transition-all duration-500" />
          <button className="relative bg-white/80 backdrop-blur-md text-slate-700 px-12 py-4 rounded-xl font-bold text-lg shadow-2xl border border-white/50 transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] group-hover:bg-white/90 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
            <span className="relative z-10 flex items-center gap-3">
              Load More Properties
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    )}
  </div>
</div>


  );
} 