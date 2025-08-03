'use client'
import { Property } from '@/types/contentful';
import PropertyCard, { PropertyCardSkeleton } from '@/components/PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="relative py-24 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
    <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
    
    {/* Floating geometric shapes */}
    <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse" />
    <div className="absolute top-48 right-1/3 w-6 h-6 border border-purple-400/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
    <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    
    <div className="relative container mx-auto px-6">
      {/* Enhanced Header Section */}
      <div className="text-center mb-16">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
          <span className="text-sm font-medium text-blue-700">PREMIUM SELECTION</span>
        </div>
        
        {/* Main Title with 3D effect */}
        <div className="relative mb-6">
          {/* Shadow text */}
          <h2 className="absolute text-4xl md:text-6xl font-black text-slate-200/40 transform translate-x-1 translate-y-1 blur-sm">
            Featured Properties
          </h2>
          {/* Main text */}
          <h2 className="relative text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Properties
          </h2>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Discover our handpicked selection of premium properties, carefully curated to match 
          your lifestyle and investment goals.
        </p>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center mt-8 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="mx-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
      </div>
  
      {/* Enhanced Grid Container */}
      <div className="relative">
        {/* Background grid pattern */}
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
            properties.map((property, index) => (
              <div
                key={property.id}
                className="group transform-gpu hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Card with 3D depth */}
                <div className="relative">
                  {/* Floating background glow */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 rounded-2xl transform translate-y-2 translate-x-2 opacity-30 group-hover:translate-y-3 group-hover:translate-x-3 transition-all duration-500" />
                  
                  {/* Main card container */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                    {/* Inner glow border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                    
                    <PropertyCard property={property} />
                    
                    {/* Bottom reflection */}
                    <div className="absolute -bottom-2 left-2 right-2 h-2 bg-gradient-to-b from-white/20 to-transparent rounded-b-2xl blur-sm" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Enhanced Skeleton Cards
            <>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="group transform-gpu"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative">
                    {/* Skeleton glow effect */}
                    <div className="absolute -inset-3 bg-gradient-to-br from-slate-200/20 via-slate-100/10 to-slate-200/20 rounded-3xl animate-pulse blur-xl" />
                    
                    {/* Shadow layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-slate-300/30 rounded-2xl transform translate-y-2 translate-x-2 opacity-20" />
                    
                    {/* Main skeleton container */}
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl" />
                      <PropertyCardSkeleton />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
  
     
    </div>
  
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `}</style>
  </section>
  
  );
} 