import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyBySlug, getProperties } from '@/lib/contentful';
import { Property } from '@/types/contentful';
import PropertyImages from '@/components/property/PropertyImages';
import PropertyDetails from '@/components/property/PropertyDetails';
import PropertyContact from '@/components/property/PropertyContact';
import PropertyMap from '@/components/PropertyMap';
import PropertyVideo from '@/components/property/PropertyVideo';
import ContactForm from '@/components/ContactForm';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

// Disable static generation for this route
export const dynamic = 'force-dynamic';

type PageProps = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

// Generate metadata for SEO
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  try {
    const property = await getPropertyBySlug(props.params.slug);
    
    if (!property) {
      return { 
        title: 'Property Not Found | Samsur Properties',
        description: 'The requested property could not be found.'
      };
    }

    const plainTextDescription = property.description 
      ? typeof property.description === 'string' 
        ? property.description 
        : documentToPlainTextString(property.description) 
      : `View details about ${property.title} at Samsur Properties.`;

    return {
      title: `${property.title} | Samsur Properties`,
      description: plainTextDescription,
      openGraph: {
        title: property.title,
        description: plainTextDescription,
        images: property.images[0] ? [property.images[0]] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error | Samsur Properties',
      description: 'An error occurred while loading the property details.'
    };
  }
}

// Generate static paths for all properties
export async function generateStaticParams() {
  try {
    const properties = await getProperties({
      content_type: 'property-2',
      limit: 100
    });

    return properties.map((property) => ({
      slug: property.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main page component
export default async function PropertyPage(props: PageProps) {
  try {
    const property = await getPropertyBySlug(props.params.slug);

    if (!property) {
      console.log(`Property not found for slug: ${props.params.slug}`);
      notFound();
    }

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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <a href="/" className="text-slate-500 hover:text-blue-600 transition-colors duration-300">Home</a>
              <span className="text-slate-300">/</span>
              <a href="/properties" className="text-slate-500 hover:text-blue-600 transition-colors duration-300">Properties</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-medium">{property.title}</span>
            </div>
            
            {/* Property Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">PREMIUM LISTING</span>
            </div>
            
            {/* Main Title with 3D effect */}
            <div className="relative mb-6">
              <h1 className="absolute text-3xl md:text-5xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                {property.title}
              </h1>
              <h1 className="relative text-3xl md:text-5xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                {property.title}
              </h1>
            </div>
            
            {/* Quick Info Bar */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <span className="text-blue-600">📍</span>
                <span className="text-sm font-medium text-slate-700">{property.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <span className="text-emerald-600">💰</span>
                <span className="text-sm font-medium text-slate-700">{property.purpose}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg">
                <span className="text-purple-600">🏠</span>
                <span className="text-sm font-medium text-slate-700">{property.propertyType}</span>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            
            {/* Left Column - Media */}
            <div className="space-y-8">
              
              {/* Images Container with 3D effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40" />
                
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  <div className="relative">
                    <PropertyImages images={property.images} title={property.title} />
                  </div>
                </div>
              </div>

              {/* Video Container (if exists) */}
              {property.videoLink && (
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40" />
                  
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                    <div className="relative">
                      <PropertyVideo videoLink={property.videoLink} title={property.title} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40" />
              
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                <div className="relative">
                  <PropertyDetails property={property} />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Location Section */}
          {property.locationCoOrdinates && (
            <div className="mb-16">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full border border-red-200/50 mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-red-700">LOCATION & CONNECTIVITY</span>
                </div>
                
                <div className="relative mb-6">
                  <h2 className="absolute text-2xl md:text-4xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                    Location
                  </h2>
                  <h2 className="relative text-2xl md:text-4xl font-black bg-gradient-to-r from-slate-800 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Location
                  </h2>
                </div>
                
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Explore the strategic location and nearby amenities of this premium property
                </p>
              </div>

              {/* Map Container with 3D effect */}
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-purple-500/10 rounded-3xl opacity-60 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-4 translate-x-4 opacity-50" />
                
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-3xl border border-white/60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Map Header */}
                  <div className="relative p-6 bg-gradient-to-r from-red-50 to-pink-50 border-b border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">{property.location}</h3>
                        <p className="text-sm text-slate-600">Interactive Map View</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Content */}
                  <div className="relative p-4">
                    <PropertyMap 
                      address={property.location} 
                      coordinates={property.locationCoOrdinates}
                      className="h-[400px] rounded-2xl shadow-xl border border-white/20" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Contact Section */}
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-200/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2 animate-pulse" />
                <span className="text-sm font-medium text-green-700">GET IN TOUCH</span>
              </div>
              
              <div className="relative mb-6">
                <h2 className="absolute text-2xl md:text-4xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                  Contact Information
                </h2>
                <h2 className="relative text-2xl md:text-4xl font-black bg-gradient-to-r from-slate-800 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Ready to schedule a visit or need more information? Our property experts are here to help
              </p>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-green-600 bg-clip-text text-transparent mb-6">
                        Get in Touch
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Call Us</h4>
                            <p className="text-slate-600">+91 90420 00172</p>
                            <p className="text-slate-600">+91 9087886786</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Email Us</h4>
                            <p className="text-slate-600">info@samsurproperties.com</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Visit Us</h4>
                            <p className="text-slate-600">Chennai, Tamil Nadu, India</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                            <p className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                            <p className="text-slate-600">Sunday: 10:00 AM - 5:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6">
                        Send us a Message
                      </h3>
                      
                      <ContactForm 
                        propertyId={property.id}
                        className="space-y-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Properties Link */}
          <div className="text-center mt-16">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-2xl opacity-50 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <a 
                href="/properties"
                className="relative bg-white/80 backdrop-blur-md text-slate-700 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl border border-white/50 transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] group-hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                <svg className="relative w-5 h-5 transform group-hover:translate-x-[-4px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="relative z-10">Back to All Properties</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering property page:', error);
    throw new Error('Failed to load property details');
  }
}
