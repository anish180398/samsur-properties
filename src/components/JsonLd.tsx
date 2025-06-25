/* eslint-disable @typescript-eslint/no-explicit-any */
export function PropertyJsonLd({ property }: { property: any }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    price: property.price,
    priceCurrency: 'INR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressCountry: 'IN'
    },
    image: property.images[0],
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.size,
      unitCode: 'SQF'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Samsur Properties',
    description: 'Your trusted partner in real estate',
    url: 'https://www.samsurproperties.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919876543210',
      contactType: 'sales',
      email: 'samsurproperties@gmail.com'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 