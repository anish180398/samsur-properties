'use client';

import { Tab } from '@headlessui/react';
import { Property } from '@/types/contentful';
import PropertyCard from './PropertyCard';

interface PropertyCategoriesProps {
  properties: Property[];
}

const PROPERTY_CATEGORIES = [
  { type: 'Flat', title: 'Residential Flats' },
  { type: 'Plot', title: 'Land Plots' },
  { type: 'Villa', title: 'Independent Villas' },
  { type: 'Commercial', title: 'Commercial Spaces' },
] as const;

const PURPOSES = [
  { id: 'Sale', label: 'Sale' },
  { id: 'Resale', label: 'Resale' },
  { id: 'Rental', label: 'Rental' },
] as const;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PropertyCategories({ properties = [] }: PropertyCategoriesProps) {
  const getPropertiesByTypeAndPurpose = (type: Property['propertyType'], purpose: Property['purpose']) => {
    return (properties || [])
      .filter(property => property.propertyType === type && property.purpose === purpose)
      .slice(0, 3);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">Browse Properties</h2>
      
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1 max-w-md mx-auto mb-12">
          {PURPOSES.map(({ id, label }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-blue-600 hover:bg-blue-200'
                )
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {PURPOSES.map(({ id: purpose }) => (
            <Tab.Panel key={purpose} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {PROPERTY_CATEGORIES.map(({ type, title }) => {
                  const categoryProperties = getPropertiesByTypeAndPurpose(type, purpose);

                  return (
                    <div key={type} className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        {categoryProperties.length > 0 && (
                          <a 
                            href={`/properties?type=${type}&purpose=${purpose}`}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            View All
                          </a>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {categoryProperties.length > 0 ? (
                          categoryProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                          ))
                        ) : (
                          // Show 3 skeleton cards per category
                          <>
                           <div>No properties found</div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
} 