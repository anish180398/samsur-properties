import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Banking Services | Home Loans & Property Financing | Samsur Properties',
  description: 'Get the best home loans and property financing services through Samsur Properties. Partner banks include SBI, HDFC, ICICI, and more with competitive interest rates starting from 6.7% p.a.',
  keywords: ['home loans', 'property financing', 'mortgage loans', 'banking services', 'Chennai home loans', 'property loans', 'SBI home loans', 'HDFC loans'],
  openGraph: {
    title: 'Banking Services - Home Loans & Property Financing',
    description: 'Get the best home loans and property financing services through Samsur Properties with competitive interest rates.',
    url: 'https://www.samsurproperties.com/services/banking',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';

export default function BankingServicesPage() {
  const bankingPartners = [
    {
      name: 'State Bank of India',
      rate: '6.7% p.a.',
      description: 'Home loans starting at',
      color: 'from-blue-600 to-blue-800',
      logo: '🏦'
    },
    {
      name: 'HDFC Bank',
      rate: '6.9% p.a.',
      description: 'Special rates for premium customers',
      color: 'from-red-600 to-red-800',
      logo: '🏛️'
    },
    {
      name: 'ICICI Bank',
      rate: '7.1% p.a.',
      description: 'Tailored financing solutions',
      color: 'from-green-600 to-green-800',
      logo: '🏪'
    },
    {
      name: 'Axis Bank',
      rate: '7.0% p.a.',
      description: 'Digital lending solutions',
      color: 'from-purple-600 to-purple-800',
      logo: '🏢'
    }
  ];

  const loanServices = [
    {
      title: 'Home Loans',
      icon: '🏠',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      features: [
        'Competitive interest rates starting from 6.7%',
        'Flexible repayment tenure up to 30 years',
        'Quick approval process within 7 days',
        'Minimal documentation required',
        'Pre-approved loans available',
        'Zero processing fee on select schemes'
      ]
    },
    {
      title: 'Property Financing',
      icon: '🏗️',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50',
      features: [
        'Construction financing up to 80% of project cost',
        'Land purchase loans with attractive rates',
        'Property renovation loans for upgrades',
        'Balance transfer facility with better rates',
        'Top-up loans for additional funding',
        'Commercial property financing available'
      ]
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-32 left-1/4 w-6 h-6 border border-blue-400/20 rounded-lg rotate-45 animate-pulse" />
      <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce [animation-duration:4s]" />
      <div className="absolute top-80 right-1/4 w-5 h-5 border border-emerald-400/20 rounded-full animate-pulse [animation-delay:2s]" />

      <div className="relative py-24 mt-12">
        <div className="container mx-auto px-6">
          
          {/* Enhanced Hero Section */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">Financial Solutions</span>
            </div>
            
            {/* Main Title with 3D effect */}
            <div className="relative mb-8">
              <h1 className="absolute text-4xl md:text-7xl font-black text-slate-200/30 transform translate-x-2 translate-y-2 blur-sm">
                Banking Services
              </h1>
              <h1 className="relative text-4xl md:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Banking Services
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl" />
                <p className="relative text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                  Your trusted partner for <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">seamless property financing</span> and comprehensive banking solutions
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { number: '25+', label: 'Banking Partners' },
                { number: '₹500Cr+', label: 'Loans Facilitated' },
                { number: '5000+', label: 'Happy Customers' },
                { number: '98%', label: 'Approval Rate' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                  <div className="relative bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/40 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            
            {/* Banking Partners Section - Enhanced */}
            <div className="xl:col-span-1 space-y-8">
              {/* Section Header */}
              <div className="text-center xl:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-200/50 mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-orange-700">TRUSTED PARTNERS</span>
                </div>
                
                <div className="relative mb-6">
                  <h2 className="absolute text-2xl md:text-3xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                    Banking Partners
                  </h2>
                  <h2 className="relative text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-800 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    Banking Partners
                  </h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  We've partnered with India's leading banks to offer you the best financing options
                </p>
              </div>

              {/* Partners Grid */}
              <div className="grid gap-6">
                {bankingPartners.map((partner, index) => (
                  <div 
                    key={partner.name}
                    className="relative group transform-gpu hover:scale-105 transition-all duration-500"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* Floating glow */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${partner.color} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500`} />
                    
                    {/* Shadow layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-2 translate-x-2 opacity-40 group-hover:translate-y-3 group-hover:translate-x-3 transition-all duration-500" />
                    
                    {/* Main card */}
                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-6 group-hover:shadow-3xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                      
                      <div className="relative flex items-center gap-4">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center shadow-lg text-white text-2xl`}>
                          {partner.logo}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold bg-gradient-to-r ${partner.color} bg-clip-text text-transparent mb-1`}>
                            {partner.name}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">{partner.description}</p>
                          <div className="text-xl font-black text-emerald-600">{partner.rate}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Services Section - Enhanced */}
            <div className="xl:col-span-2 space-y-8">
              {/* Section Header */}
              <div className="text-center xl:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-200/50 mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-700">COMPREHENSIVE SERVICES</span>
                </div>
                
                <div className="relative mb-6">
                  <h2 className="absolute text-2xl md:text-3xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                    Loan Services
                  </h2>
                  <h2 className="relative text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-800 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Loan Services
                  </h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  Tailored financial solutions to make your property dreams a reality
                </p>
              </div>

              {/* Services Grid */}
              <div className="space-y-8">
                {loanServices.map((service, index) => (
                  <div 
                    key={service.title}
                    className="relative group transform-gpu hover:scale-[1.02] transition-all duration-500"
                    style={{
                      animationDelay: `${(index + 4) * 150}ms`,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                  >
                    {/* Floating glow */}
                    <div className={`absolute -inset-6 bg-gradient-to-r ${service.gradient} opacity-5 rounded-3xl blur-2xl group-hover:opacity-10 transition-all duration-500`} />
                    
                    {/* Shadow layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-50 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                    
                    {/* Main card */}
                    <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-md rounded-3xl shadow-3xl border border-white/60 p-8 group-hover:shadow-4xl transition-all duration-500`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl" />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl text-white text-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                              {service.title}
                            </h3>
                            <p className="text-slate-600 font-medium">Comprehensive financing solutions</p>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-start gap-3 group/feature"
                              style={{
                                animationDelay: `${featureIndex * 100}ms`,
                                animation: 'slideInLeft 0.6s ease-out forwards'
                              }}
                            >
                              <div className="relative mt-1">
                                <div className="absolute -inset-1 bg-green-500/20 rounded-full opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 blur-sm" />
                                <CheckCircleIcon className="relative h-6 w-6 text-green-600 flex-shrink-0 transform group-hover/feature:scale-110 transition-transform duration-300" />
                              </div>
                              <span className="text-slate-700 font-medium leading-relaxed group-hover/feature:text-slate-800 transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Contact CTA */}
              <div className="text-center xl:text-left mt-16">
                <div className="relative inline-block group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-emerald-600/30 rounded-3xl opacity-60 group-hover:opacity-100 blur-2xl transition-all duration-500 animate-pulse" />
                  
                  <Link 
                    href="/contact"
                    className="relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl transform translate-y-2 translate-x-2 opacity-30" />
                    
                    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white px-12 py-6 rounded-2xl shadow-3xl transform-gpu group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-300 border border-white/20 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                      
                      <div className="relative flex items-center justify-center gap-4">
                        <div className="text-2xl">🤝</div>
                        <div>
                          <div className="text-xl md:text-2xl font-black mb-1">Contact for Assistance</div>
                          <div className="text-sm text-white/80">Get personalized financial solutions today</div>
                        </div>
                        <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse" />
                <span className="text-sm font-medium text-purple-700">WHY CHOOSE US</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Unmatched Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '⚡', title: 'Instant Processing', desc: 'Get loan approvals within 24 hours' },
                { icon: '🎯', title: 'Best Rates', desc: 'Competitive interest rates in the market' },
                { icon: '🔒', title: 'Secure Process', desc: 'End-to-end secure loan processing' },
                { icon: '📱', title: 'Digital First', desc: 'Apply and track loans digitally' },
                { icon: '💼', title: 'Expert Guidance', desc: 'Dedicated relationship managers' },
                { icon: '🏆', title: 'Award Winning', desc: 'Recognized for excellence in service' }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="relative group text-center transform-gpu hover:scale-105 transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 group-hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                    
                    <div className="relative">
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
