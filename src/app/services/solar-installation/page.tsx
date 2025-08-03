import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Solar Installation Services | Samsur Properties',
  description: 'Expert solar panel installation services since 1998. Get sustainable energy solutions with 100% client satisfaction guarantee.',
  keywords: ['solar installation', 'solar panels', 'renewable energy', 'solar power', 'Chennai solar', 'sustainable energy'],
};

export default function SolarInstallationPage() {
  const services = [
    {
      icon: '🔧',
      title: 'Solar Panel Installation',
      description: 'Professional installation with certified technicians ensuring optimal performance and efficiency.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: '⚡',
      title: 'Solar Power System',
      description: 'Complete solar power systems designed for residential and commercial applications.',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50'
    },
    {
      icon: '🏠',
      title: 'Household Solar Panel',
      description: 'Customized household solar solutions to reduce your electricity bills significantly.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      icon: '🧽',
      title: 'Solar Panel Cleaning',
      description: 'Regular maintenance and cleaning services to ensure maximum solar panel efficiency.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const benefits = [
    {
      icon: '🎯',
      title: 'Expert Installation',
      description: '25+ years of experience with certified technicians ensuring quality installation.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment options and government subsidy assistance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🛡️',
      title: '25 Year Warranty',
      description: 'Comprehensive warranty coverage with ongoing maintenance and support services.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency service for your peace of mind.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        
        {/* Floating geometric elements */}
        <div className="absolute top-32 left-1/4 w-6 h-6 border border-yellow-400/30 rounded-lg rotate-45 animate-pulse" />
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-green-400/30 rounded-full animate-bounce [animation-duration:4s]" />
        <div className="absolute top-80 right-1/4 w-5 h-5 border border-cyan-400/30 rounded-full animate-pulse [animation-delay:3s]" />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse" />
                <span className="tracking-wider">🌟 SAMSUR SOLAR ENERGY SERVICES</span>
              </div>
              
              <div className="relative">
                {/* Shadow text for depth */}
                <h1 className="absolute text-5xl lg:text-7xl font-black text-black/20 transform translate-x-2 translate-y-2 blur-sm leading-tight">
                  Expert Solar Service
                </h1>
                {/* Main text */}
                <h1 className="relative text-5xl lg:text-7xl font-black leading-tight">
                  Expert <span className="text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-emerald-400 bg-clip-text animate-gradient">Solar</span><br />
                  Service<br />
                </h1>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl" />
                  <p className="relative text-xl text-blue-100 leading-relaxed">
                    We believe in sustainable energy practices that can 
                    transform modern energy consumption. Let us help you 
                    transition to clean energy with our expert solar panel installation services.
                  </p>
                </div>
              </div>
              
              <div className="relative group inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded-2xl opacity-70 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <a 
                  href="#services" 
                  className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-300 border border-white/20 backdrop-blur-sm inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                  <span className="relative z-10">Discover Solar Solutions</span>
                  <svg className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse" />
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                
                <div className="relative grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: '20+', label: 'Expert Technicians', color: 'from-green-500 to-emerald-500', icon: '👨‍🔧' },
                    { number: '100%', label: 'Client Satisfaction', color: 'from-blue-500 to-cyan-500', icon: '⭐' },
                    { number: '5k+', label: 'Installations', color: 'from-green-500 to-emerald-500', icon: '⚡' },
                    { number: '25+', label: 'Years Experience', color: 'from-yellow-500 to-orange-500', icon: '🏆' }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="relative group transform-gpu hover:scale-110 transition-all duration-500"
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animation: 'fadeInUp 0.8s ease-out forwards'
                      }}
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-all duration-300`} />
                      <div className={`relative bg-gradient-to-br ${stat.color} bg-opacity-20 rounded-2xl p-6 text-center shadow-2xl border border-white/30 group-hover:shadow-3xl transition-all duration-300`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                        <div className="relative">
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                          <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-gradient-to-r from-green-500/90 to-blue-500/90 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                    <div className="relative">
                      <div className="text-3xl mb-3">🏡</div>
                      <div className="text-2xl font-black text-white mb-3">Free Home Assessment</div>
                      <div className="text-blue-100 font-medium">Get your personalized solar solution quote today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/30" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-200/50 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-green-700">PROVEN TRACK RECORD</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-slate-800 via-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '20+',
                subtitle: 'We have 20+ amazing',
                title: 'Expert Solar Technicians',
                detail: 'Trained & Certified',
                color: 'from-green-600 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-50'
              },
              {
                number: '100%',
                subtitle: 'We achieved 100% of',
                title: 'Client Satisfaction',
                detail: 'Through our work',
                color: 'from-blue-600 to-cyan-600',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              {
                number: '5k+',
                subtitle: 'We have completed',
                title: 'Solar Installations',
                detail: 'Panels for our clients',
                color: 'from-green-600 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-50'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group transform-gpu hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${stat.color} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-30 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                
                <div className={`relative bg-gradient-to-br ${stat.bgColor} backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 group-hover:shadow-3xl transition-all duration-500 text-center`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative">
                    <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-600 mb-2 font-medium">{stat.subtitle}</div>
                    <div className="text-xl font-bold text-slate-800 mb-2">{stat.title}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/20 to-blue-50/30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-200/50">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2 animate-pulse" />
                <span className="text-sm font-medium text-green-700">ABOUT COMPANY</span>
              </div>
              
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-6">
                  Samsur Properties believes in 
                  <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text"> sustainable energy</span> practices
                </h2>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                <p className="relative text-slate-700 text-lg leading-relaxed">
                  We're finding ways to bring energy to more people in more ways every 
                  day, so that all of us can be part of the changing energy system. 
                  We are committed to helping people find renewable, sustainable solar solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800">
                  Samsur Solar Energy speciality:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Lower Energy Costs',
                    'Increase Home Value',
                    'Environmental Friendly',
                    'Energy Independence'
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 group"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'slideInLeft 0.6s ease-out forwards'
                      }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative group inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl opacity-50 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <a 
                  href="#contact" 
                  className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-300 border border-white/20 backdrop-blur-sm inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                  <span className="relative z-10">Contact Samsur</span>
                  <svg className="relative w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl opacity-60 animate-pulse" />
                
                <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-96 h-96 mx-auto flex items-center justify-center shadow-3xl border-8 border-white/20 group-hover:scale-105 transition-all duration-500">
                  <div className="text-center text-white relative z-10">
                    <div className="text-7xl mb-6 animate-bounce">☀️</div>
                    <div className="text-3xl font-black mb-3">CERTIFIED</div>
                    <div className="text-xl font-bold">SOLAR ENERGY CONTRACTOR</div>
                  </div>
                  
                  {/* Concentric circles */}
                  <div className="absolute inset-0 border-8 border-white/20 rounded-full animate-spin [animation-duration:20s]" />
                  <div className="absolute inset-6 border-4 border-white/30 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]" />
                  <div className="absolute inset-12 border-2 border-white/40 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-green-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

        <div className="relative container mx-auto px-6 text-white">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-full text-sm font-bold mb-8 shadow-2xl border border-white/20">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse" />
              <span className="tracking-wider">OUR SERVICES</span>
            </div>
            
            <div className="relative mb-8">
              <h2 className="absolute text-3xl md:text-6xl font-black text-black/20 transform translate-x-2 translate-y-2 blur-sm leading-tight">
                Complete Solar Solutions
              </h2>
              <h2 className="relative text-3xl md:text-6xl font-black leading-tight mb-6">
                Complete solar solution with repair services
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl" />
              <p className="relative text-blue-200 text-lg leading-relaxed">
                We're finding ways to bring energy to more people in more ways every day, so that, all of 
                us can be part of the changing energy system. Because Powering Progress.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative group transform-gpu hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/10 to-slate-400/10 rounded-3xl transform translate-y-3 translate-x-3 opacity-30 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                
                <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-md rounded-3xl p-8 shadow-3xl border border-white/60 group-hover:shadow-4xl transition-all duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative text-slate-800">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us & Contact Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-blue-200/50 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">GET IN TOUCH</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Why Choose Samsur Solar?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'slideInLeft 0.8s ease-out forwards'
                  }}
                >
                  <div className={`absolute -inset-3 bg-gradient-to-r ${benefit.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-500`} />
                  
                  <div className="relative flex items-start space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                    
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl transform group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-white text-2xl">{benefit.icon}</span>
                    </div>
                    <div className="relative">
                      <h3 className={`text-xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-3`}>
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 via-green-500/5 to-emerald-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-3xl transform translate-y-4 translate-x-4 opacity-50" />
              
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-3xl border border-white/60 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                
                <div className="relative">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-200/50 mb-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2 animate-pulse" />
                      <span className="text-sm font-medium text-green-700">FREE CONSULTATION</span>
                    </div>
                    
                    <h3 className="text-2xl font-black bg-gradient-to-r from-slate-800 to-green-600 bg-clip-text text-transparent mb-2">
                      Get Your Free Solar Quote
                    </h3>
                    <p className="text-slate-600">Transform your energy consumption today</p>
                  </div>
                  
                  <ContactForm 
                    service="Solar Installation"
                    className="space-y-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

        <div className="relative container mx-auto px-6 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <h2 className="absolute text-3xl md:text-6xl font-black text-black/20 transform translate-x-2 translate-y-2 blur-sm">
                Ready to Go Solar?
              </h2>
              <h2 className="relative text-3xl md:text-6xl font-black mb-6">
                Ready to Go Solar?
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl" />
              <p className="relative text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Join thousands of satisfied customers who have made the switch to clean, renewable energy. 
                Get your free consultation today!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-2 bg-white/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <a 
                  href="tel:+919042000172" 
                  className="relative bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span className="text-2xl">📞</span>
                  <span>Call Now: +91 90420 00172</span>
                </a>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-green-500/50 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <button className="relative bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-300 border border-white/20 backdrop-blur-sm inline-flex items-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                  <span className="relative z-10">Get Free Quote</span>
                  <svg className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl inline-block">
              <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Free Site Survey</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Government Subsidies Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
