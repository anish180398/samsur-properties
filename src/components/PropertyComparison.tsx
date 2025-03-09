'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/types/contentful';
import { formatCurrency, formatArea } from '@/utils/format';

interface PropertyComparisonProps {
  properties: Property[];
}

export default function PropertyComparison({ properties }: PropertyComparisonProps) {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);
  const [availableProperties, setAvailableProperties] = useState<Property[]>(properties);

  const addToComparison = (property: Property) => {
    if (selectedProperties.length < 3) {
      setSelectedProperties([...selectedProperties, property]);
      setAvailableProperties(availableProperties.filter(p => p.id !== property.id));
    }
  };

  const removeFromComparison = (property: Property) => {
    setSelectedProperties(selectedProperties.filter(p => p.id !== property.id));
    setAvailableProperties([...availableProperties, property]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {selectedProperties.map(property => (
          <div key={property.id} className="relative bg-white p-4 rounded-lg shadow-md">
            <button
              onClick={() => removeFromComparison(property)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
              ×
            </button>
            <Image
              src={`https:${property.images[0]}`}
              alt={property.title}
              width={200}
              height={150}
              className="rounded"
            />
            <h3 className="mt-2 font-semibold">{property.title}</h3>
          </div>
        ))}
      </div>

      {selectedProperties.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left">Features</th>
                {selectedProperties.map(property => (
                  <th key={property.id} className="p-4 text-left">{property.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-t">Price</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4 border-t">
                    {formatCurrency(property.price)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-t">Size</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4 border-t">
                    {formatArea(property.size)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-t">Location</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4 border-t">{property.location}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-t">Type</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4 border-t">{property.propertyType}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-t">Features</td>
                {selectedProperties.map(property => (
                  <td key={property.id} className="p-4 border-t">
                    <ul className="list-disc list-inside">
                      {property.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">Add Properties to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {availableProperties.map(property => (
            <div
              key={property.id}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md"
              onClick={() => addToComparison(property)}
            >
              <Image
                src={`https:${property.images[0]}`}
                alt={property.title}
                width={200}
                height={150}
                className="rounded"
              />
              <h4 className="mt-2 font-medium">{property.title}</h4>
              <p className="text-gray-600">{formatCurrency(property.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 