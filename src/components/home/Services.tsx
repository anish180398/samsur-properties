'use client'
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      href: "/services/solar-installation",
      title: "Solar Panel Installation",
      description: "Go green with our professional solar panel installation services",
      icon: "☀️",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    },
    {
      href: "/services/banking",
      title: "Banking Services", 
      description: "Get assistance with home loans and property financing",
      icon: "🏦",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-yellow-500/5 rounded-full blur-3xl" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-32 left-1/4 w-6 h-6 border border-blue-400/20 rounded-lg rotate-45 animate-pulse" />
      <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute top-48 right-1/4 w-5 h-5 border border-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">COMPREHENSIVE SOLUTIONS</span>
          </div>
          
          <div className="relative mb-6">
            <h2 className="absolute text-4xl md:text-6xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
              Our Services
            </h2>
            <h2 className="relative text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Beyond real estate, we offer comprehensive services to make your property journey seamless and sustainable
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={service.href}
              href={service.href}
              className="relative group transform-gpu hover:scale-105 transition-all duration-500"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Floating background glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient.replace('to-', 'to-').replace('from-', 'from-')} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500`} />
              
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
              
              {/* Main service card */}
              <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-md rounded-3xl shadow-2xl border ${service.borderColor} p-8 group-hover:shadow-3xl transition-all duration-500 h-full flex flex-col`}>
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-3xl`} />
                
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                
                {/* Icon container with 3D effect */}
                <div className="relative mb-6">
                  <div className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} opacity-20 rounded-2xl blur-lg group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-500 w-fit">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                    <span className="relative z-10 text-4xl block transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-700 leading-relaxed mb-6 flex-1 group-hover:text-slate-800 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Call to action */}
                  <div className="relative group/cta">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} opacity-20 rounded-xl blur-lg group-hover/cta:opacity-40 transition-all duration-300`} />
                    <div className="relative flex items-center gap-2 text-slate-700 font-semibold group-hover:text-slate-800 transition-colors duration-300">
                      <span>Learn More</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-2 group-hover/cta:scale-110 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Bottom reflection */}
                <div className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-b from-white/20 to-transparent rounded-b-3xl blur-sm opacity-60" />
              </div>
            </Link>
          ))}
        </div>
        
      
      
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
