'use client';

import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Property } from '@/types/contentful';
import PropertyCard from './PropertyCard';

interface PropertyCategoriesProps {
  properties: Property[];
}

const PROPERTY_CATEGORIES = [
  { type: 'Flat', title: 'Residential Flats', icon: '🏢' },
  { type: 'Plot', title: 'Land Plots', icon: '📍' },
  { type: 'Villa', title: 'Independent Villas', icon: '🏘️' },
  { type: 'Commercial', title: 'Commercial Spaces', icon: '🏬' },
] as const;

const PURPOSES = [
  { id: 'Sale', label: 'Sale', icon: '💰' },
  { id: 'Resale', label: 'Resale', icon: '🔄' },
  { id: 'Rental', label: 'Rental', icon: '🏠' },
] as const;

const INITIAL_DISPLAY_COUNT = 3;
const LOAD_MORE_COUNT = 3;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PropertyCategories({ properties = [] }: PropertyCategoriesProps) {
  // State to track how many properties to show for each category
  const [displayCounts, setDisplayCounts] = useState<Record<string, number>>({});

  // Monitor state changes for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('PropertyCategories: displayCounts state changed:', displayCounts);
    }
  }, [displayCounts]);

  const getPropertiesByTypeAndPurpose = (type: Property['propertyType'], purpose: Property['purpose']) => {
    const filtered = (properties || [])
      .filter(property => property.propertyType === type && property.purpose === purpose);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`PropertyCategories: ${type} - ${purpose}:`, filtered.length, 'total properties');
    }
    return filtered;
  };

  const getDisplayCount = (categoryKey: string) => {
    return displayCounts[categoryKey] || INITIAL_DISPLAY_COUNT;
  };

  const loadMore = (categoryKey: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Loading more for category: ${categoryKey}`);
      console.log('Current display counts:', displayCounts);
    }
    
    setDisplayCounts(prev => {
      const currentCount = prev[categoryKey] || INITIAL_DISPLAY_COUNT;
      const newCount = currentCount + LOAD_MORE_COUNT;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Updating ${categoryKey} from ${currentCount} to ${newCount}`);
      }
      
      return {
        ...prev,
        [categoryKey]: newCount
      };
    });
  };

  // Filter purposes that have at least one property
  const availablePurposes = PURPOSES.filter(purpose => {
    const hasProperties = PROPERTY_CATEGORIES.some(category => {
      const categoryProperties = getPropertiesByTypeAndPurpose(category.type, purpose.id);
      return categoryProperties.length > 0;
    });
    if (process.env.NODE_ENV === 'development') {
      console.log(`PropertyCategories: Purpose ${purpose.id} has properties:`, hasProperties);
    }
    return hasProperties;
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('PropertyCategories: Available purposes:', availablePurposes.length);
  }

  // If no purposes have properties, don't render anything
  if (availablePurposes.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.log('PropertyCategories: No purposes have properties, returning null');
    }
    return null;
  }

  // If no properties at all, don't render anything
  if (!properties || properties.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.log('PropertyCategories: No properties provided, returning null');
    }
    return null;
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-32 right-1/4 w-6 h-6 border border-blue-400/20 rounded-lg rotate-45 animate-pulse" />
      <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce [animation-duration:4s]" />
      <div className="absolute top-48 left-1/4 w-5 h-5 border border-emerald-400/20 rounded-full animate-pulse [animation-delay:2s]" />

      <div className="relative container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">EXPLORE BY CATEGORY</span>
          </div>
          
          <div className="relative mb-6">
            <h2 className="absolute text-4xl md:text-6xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
              Browse Properties
            </h2>
            <h2 className="relative text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Browse Properties
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover properties tailored to your needs across different categories and purposes
          </p>
        </div>

        <div className="space-y-12">
          <Tab.Group defaultIndex={0}>
            {/* Enhanced Tab List */}
            <div className="flex justify-center mb-16">
              <Tab.List className="relative flex space-x-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/50 max-w-md">
                {/* Background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50" />
                
                {availablePurposes.map(({ id, label, icon }, index) => (
                  <Tab
                    key={id}
                    className={({ selected }) =>
                      classNames(
                        'relative flex-1 rounded-xl py-3 px-4 text-sm font-bold leading-5 transition-all duration-500 transform-gpu',
                        'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2 group',
                        selected
                          ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white shadow-xl scale-105'
                          : 'text-slate-600 hover:bg-white/60 hover:text-slate-800 hover:scale-105'
                      )
                    }
                  >
                    {({ selected }) => (
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        {selected && (
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                        )}
                        <span className="text-lg">{icon}</span>
                        <span className="relative z-10">{label}</span>
                      </div>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels>
              {availablePurposes.map(({ id: purpose }, purposeIndex) => {
                // Filter categories that have properties for this purpose
                const availableCategories = PROPERTY_CATEGORIES.filter(category => {
                  const categoryProperties = getPropertiesByTypeAndPurpose(category.type, purpose);
                  return categoryProperties.length > 0;
                });

                if (process.env.NODE_ENV === 'development') {
                  console.log(`PropertyCategories: Tab ${purpose} has ${availableCategories.length} available categories`);
                }

                return (
                  <Tab.Panel 
                    key={purpose} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 gap-8">
                      {availableCategories.map(({ type, title, icon }, categoryIndex) => {
                        const categoryKey = `${purpose}-${type}`;
                        const allCategoryProperties = getPropertiesByTypeAndPurpose(type, purpose);
                        const currentDisplayCount = getDisplayCount(categoryKey);
                        const displayedProperties = allCategoryProperties.slice(0, currentDisplayCount);
                        const hasMoreProperties = allCategoryProperties.length > currentDisplayCount;

                        if (process.env.NODE_ENV === 'development') {
                          console.log(`Category ${categoryKey}:`, {
                            total: allCategoryProperties.length,
                            displaying: currentDisplayCount,
                            actuallyShowing: displayedProperties.length,
                            hasMore: hasMoreProperties,
                            remaining: Math.max(0, allCategoryProperties.length - currentDisplayCount)
                          });
                        }

                        return (
                          <div 
                            key={type} 
                            className="relative group transform-gpu hover:scale-[1.02] transition-all duration-500"
                          >
                            {/* Category Card Background with 3D effects */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                            
                            {/* Shadow layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-3xl transform translate-y-2 translate-x-2 opacity-30 group-hover:translate-y-3 group-hover:translate-x-3 transition-all duration-500" />
                            
                            {/* Main category container */}
                            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8 group-hover:shadow-3xl transition-all duration-500">
                              {/* Inner glow */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                              
                              {/* Category Header */}
                              <div className="relative flex justify-between items-center mb-8">
                                <div className="flex items-center gap-4">
                                  <div className="relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl shadow-lg border border-white/40">
                                      <span className="text-3xl">{icon}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                                      {title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-1">
                                      {allCategoryProperties.length} properties available
                                      {currentDisplayCount < allCategoryProperties.length && 
                                        ` • Showing ${currentDisplayCount}`
                                      }
                                    </p>
                                  </div>
                                </div>

                                {allCategoryProperties.length > 0 && (
                                  <a 
                                    href={`/properties?type=${type}&purpose=${purpose}`}
                                    className="relative group/link transform-gpu hover:scale-105 transition-all duration-300"
                                  >
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover/link:opacity-100 blur-lg transition-all duration-300" />
                                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transform-gpu group-hover/link:translate-y-[-1px] transition-all duration-300 border border-white/20">
                                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                                      <span className="relative z-10 flex items-center gap-2">
                                        View All
                                        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                      </span>
                                    </div>
                                  </a>
                                )}
                              </div>

                              {/* Properties Grid */}
                              <div className="relative">
                                {displayedProperties.length > 0 ? (
                                  <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                      {displayedProperties.map((property, index) => (
                                        <div
                                          key={property.id}
                                          className="animate-[fadeInScale_0.6s_ease-out_forwards]"
                                          style={{
                                            animationDelay: `${index * 100}ms`
                                          }}
                                        >
                                          <PropertyCard property={property} />
                                        </div>
                                      ))}
                                    </div>

                                    {/* Load More Button - Only show if there are more properties */}
                                    {hasMoreProperties && allCategoryProperties.length > currentDisplayCount && (
                                      <div className="text-center">
                                        <button
                                          onClick={(e) => {
                                            e.preventDefault();
                                            if (process.env.NODE_ENV === 'development') {
                                              console.log(`Load more clicked for: ${categoryKey}`);
                                            }
                                            loadMore(categoryKey);
                                          }}
                                          className="relative group/loadmore transform-gpu hover:scale-105 transition-all duration-300"
                                        >
                                          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl opacity-50 group-hover/loadmore:opacity-100 blur-xl transition-all duration-500" />
                                          <div className="relative bg-white/80 backdrop-blur-md text-slate-700 px-8 py-3 rounded-xl font-bold shadow-2xl border border-white/50 transform-gpu group-hover/loadmore:translate-y-[-2px] group-hover/loadmore:bg-white/90 transition-all duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                                            <span className="relative z-10 flex items-center gap-3">
                                              Load More {title} ({Math.max(0, allCategoryProperties.length - currentDisplayCount)} more)
                                              <svg className="w-5 h-5 transform group-hover/loadmore:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                              </svg>
                                            </span>
                                          </div>
                                        </button>
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  // Enhanced No Properties State
                                  <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-slate-100/50 to-slate-200/50 rounded-3xl blur-xl opacity-50" />
                                    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-12 text-center border border-slate-200/50 backdrop-blur-sm">
                                      <div className="mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto flex items-center justify-center shadow-lg">
                                          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                          </svg>
                                        </div>
                                      </div>
                                      <h4 className="text-lg font-semibold text-slate-600 mb-2">
                                        No {title.toLowerCase()} found for {purpose.toLowerCase()}
                                      </h4>
                                      <p className="text-slate-500 text-sm">
                                        Check back soon for new listings in this category
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
