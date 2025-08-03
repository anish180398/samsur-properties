import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Samsur Properties',
  description: 'Get in touch with Samsur Properties for all your real estate needs. Call +91 90420 00172 / +91 9087886786 or email us at info@samsurproperties.com',
  keywords: ['contact samsur properties', 'real estate contact', 'property enquiry', 'Chennai real estate contact', 'property consultation'],
  openGraph: {
    title: 'Contact Samsur Properties',
    description: 'Get in touch with Samsur Properties for all your real estate needs. Professional property consultation and services.',
    url: 'https://www.samsurproperties.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak with our experts',
      info: '+91 90420 00172 / +91 9087886786',
      href: 'tel:+919042000172',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us your queries',
      info: 'samsurproperties@gmail.com',
      href: 'mailto:samsurproperties@gmail.com',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come to our office',
      info: 'West Tambaram, Chennai',
      href: '#location',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
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
          
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">Get In Touch</span>
            </div>
            
            {/* Main Title with 3D effect */}
            <div className="relative mb-8">
              <h1 className="absolute text-4xl md:text-7xl font-black text-slate-200/30 transform translate-x-2 translate-y-2 blur-sm">
                Contact Us
              </h1>
              <h1 className="relative text-4xl md:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Contact Us
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl" />
                <p className="relative text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                  Ready to find your dream property? Our team of experts is here to help you every step of the way. 
                  <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> Let's connect today!</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="relative group transform-gpu hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${method.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                
                <div className={`relative bg-gradient-to-br ${method.bgGradient} backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8 group-hover:shadow-3xl transition-all duration-500 text-center`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl text-white text-3xl transform group-hover:scale-110 transition-transform duration-500`}>
                      {method.icon}
                    </div>
                    
                    <h3 className={`text-xl font-black bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent mb-2`}>
                      {method.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 font-medium">{method.description}</p>
                    <p className="text-slate-800 font-bold text-sm leading-tight">{method.info}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* Contact Form Section */}
            <div className="relative">
              {/* Section Header */}
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full border border-emerald-200/50 mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-700">SEND US A MESSAGE</span>
                </div>
                
                <div className="relative mb-6">
                  <h2 className="absolute text-2xl md:text-4xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                    Get in Touch
                  </h2>
                  <h2 className="relative text-2xl md:text-4xl font-black bg-gradient-to-r from-slate-800 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with personalized assistance for your property needs.
                </p>
              </div>

              {/* Enhanced Form Container */}
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-blue-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-4 translate-x-4 opacity-50" />
                
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-3xl border border-white/60 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative">
                    <ContactForm className="space-y-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info & Hours Section */}
            <div className="space-y-8">
              
              {/* Office Location */}
              <div className="relative group">
                {/* Section Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
                    <span className="text-sm font-medium text-blue-700">OUR LOCATION</span>
                  </div>
                  
                  <div className="relative mb-4">
                    <h2 className="absolute text-2xl md:text-4xl font-black text-slate-200/30 transform translate-x-1 translate-y-1 blur-sm">
                      Our Office
                    </h2>
                    <h2 className="relative text-2xl md:text-4xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Our Office
                    </h2>
                  </div>
                </div>

                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8 group-hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative">
                    {/* Office Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl text-white text-2xl">
                        🏢
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-800">Samsur Properties</h3>
                        <p className="text-slate-600 font-medium">Your Trusted Real Estate Partner</p>
                      </div>
                    </div>

                    <address className="not-italic space-y-6">
                      {/* Address */}
                      <div className="flex items-start gap-4 group/item">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-lg shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                          📍
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 mb-2">Address</h4>
                          <p className="text-slate-600 leading-relaxed">
                            4/15, G.S.T. Road, near Siva Sakthi Kalyana Mandapam,<br />
                            West Tambaram, Irumbuliyur, Chennai, Tamil Nadu 600045
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 group/item">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                          📞
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 mb-2">Phone</h4>
                          <a 
                            href="tel:+919042000172" 
                            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hover:underline"
                          >
                            +91 90420 00172 / +91 9087886786
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4 group/item">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                          📧
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 mb-2">Email</h4>
                          <a 
                            href="mailto:samsurproperties@gmail.com" 
                            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hover:underline"
                          >
                            samsurproperties@gmail.com
                          </a>
                        </div>
                      </div>
                    </address>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-amber-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8 group-hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative">
                    {/* Hours Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl text-white text-2xl transform group-hover:scale-110 transition-transform duration-500">
                        🕒
                      </div>
                      <div>
                        <h3 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                          Business Hours
                        </h3>
                        <p className="text-slate-600 font-medium">We're here when you need us</p>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          <span className="font-bold text-slate-800">Monday - Sunday</span>
                        </div>
                        <span className="text-slate-600 font-semibold">9:00 AM - 10:00 PM</span>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-emerald-600">⚡</span>
                        <span className="text-slate-600 font-medium">Quick Response: We typically respond within 2 hours during business hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-rose-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-red-50 to-pink-50 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-8 group-hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl" />
                  
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl text-white text-2xl transform group-hover:scale-110 transition-transform duration-500">
                      🚨
                    </div>
                    
                    <h3 className="text-xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-3">
                      Emergency Contact
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      For urgent property matters or emergencies outside business hours
                    </p>
                    
                    <a 
                      href="tel:+919042000172" 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-2xl transform-gpu hover:scale-105 hover:translate-y-[-2px] transition-all duration-300 border border-white/20 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                      <span className="relative z-10">📞 Call Emergency Line</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div className="mt-24 text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-emerald-600/30 rounded-3xl opacity-60 group-hover:opacity-100 blur-2xl transition-all duration-500 animate-pulse" />
              
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white px-12 py-8 rounded-3xl shadow-3xl transform-gpu group-hover:scale-105 group-hover:translate-y-[-4px] transition-all duration-300 border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                
                <div className="relative flex flex-col items-center gap-4">
                  <div className="text-4xl mb-2">🏠</div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black mb-2">Ready to Find Your Dream Property?</div>
                    <div className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                      Our expert team is standing by to help you navigate the real estate market and find the perfect property that matches your needs and budget.
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <span className="text-sm text-white/80">✓ Free Consultation</span>
                    <span className="text-sm text-white/80">✓ Expert Guidance</span>
                    <span className="text-sm text-white/80">✓ Personalized Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
