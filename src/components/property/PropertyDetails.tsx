import { Property } from '@/types/contentful';
import { formatCurrency } from '@/utils/format';
import Link from 'next/link';

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const showBedsAndBaths = property.propertyType === 'Flat';
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
      </div>

      {/* Key Details */}
      <div className={`grid ${showBedsAndBaths ? 'grid-cols-4' : 'grid-cols-2'} gap-4 py-4 border-y`}>
        {showBedsAndBaths && (
          <>
            <div>
              <p className="text-gray-600 text-sm">Beds</p>
              <p className="font-semibold">{property.beds || 'N/A'}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Baths</p>
              <p className="font-semibold">{property.baths || 'N/A'}</p>
            </div>
          </>
        )}
        <div>
          <p className="text-gray-600 text-sm">Area</p>
          <p className="font-semibold">{property.size} sqft</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Type</p>
          <p className="font-semibold">{property.propertyType}</p>
        </div>
      </div>

      {/* Price and Action */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">Price</p>
          <p className="text-2xl font-bold">{formatCurrency(property.price)}</p>
        </div>
        <Link 
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
        >
          Request a tour
        </Link>
      </div>

      {property.features && property.features.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="grid grid-cols-2 gap-2">
            {property.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Description */}
      <div>
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-gray-600">{property.description}</p>
      </div>

      {/* Features */}
     
    </div>
  );
} 