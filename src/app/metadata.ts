import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Samsur Properties - Your trusted partner in real estate',
    template: '%s | Samsur Properties'
  },
  description: 'Find your perfect property with Samsur Properties. Browse through our wide range of flats, plots, villas, and commercial spaces.',
  keywords: ['real estate', 'property', 'flats', 'plots', 'villas', 'commercial spaces', 'solar installation', 'banking services', 'Bangalore'],
  authors: [{ name: 'Samsur Properties' }],
  creator: 'Samsur Properties',
  publisher: 'Samsur Properties',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.samsurproperties.com',
    siteName: 'Samsur Properties',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Samsur Properties'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@samsurproperties',
    creator: '@samsurproperties'
  }
}; 