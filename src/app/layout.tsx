import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.samsurproperties.com'),
  title: {
    template: '%s | Samsur Properties',
    default: 'Samsur Properties - Your trusted partner in real estate'
  },
  description: 'Find your perfect property with Samsur Properties. Browse through our wide range of flats, plots, villas, and commercial spaces.',
  keywords: ['real estate', 'property', 'flats', 'plots', 'villas', 'commercial spaces', 'solar installation', 'banking services'],
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/favicon.ico?v=2', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico?v=2', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/favicon.ico?v=2',
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico?v=2',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 