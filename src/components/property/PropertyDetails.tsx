import { Property } from '@/types/contentful';
import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const showBedsAndBaths = property.propertyType === 'Flat';
  
  // Safely convert Rich Text (or string) to HTML
  const getDescriptionHtml = () => {
    const description = property.description as unknown;

    if (!description) return 'No description available';
    
    try {
      // Check if it's a Rich Text document
      if (typeof description === 'object' && description !== null && 'nodeType' in description && description.nodeType === 'document') {
        return documentToHtmlString(description as any);
      }
      
      // If it's a string, apply basic formatting
      if (typeof description === 'string') {
        let html = description;
        // Replace __text__ with <strong>text</strong>
        html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
        // Replace • with list item, and handle newlines
        html = html.split('\n').map(line => {
          if (line.trim().startsWith('•')) {
            return `<li>${line.trim().substring(1).trim()}</li>`;
          } else {
            return `<p>${line}</p>`;
          }
        }).join('');
        
        // Wrap list items in ul if they exist
        if (html.includes('<li>')) {
           html = `<ul>${html}</ul>`;
        }

        return html;
      }
      
      return 'Invalid description format';
    } catch (error) {
      console.error('Error rendering description:', error);
      return 'Error rendering description';
    }
  };

  const descriptionHtml = getDescriptionHtml();

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
        <div 
          className="text-gray-600 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: descriptionHtml
          }}
        />
      </div>
    </div>
  );
} 