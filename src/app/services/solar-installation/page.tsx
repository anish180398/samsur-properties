import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Solar Installation Services | Samsur Properties',
  description: 'Expert solar panel installation services since 1998. Get sustainable energy solutions with 100% client satisfaction guarantee.',
  keywords: ['solar installation', 'solar panels', 'renewable energy', 'solar power', 'Chennai solar', 'sustainable energy'],
};

export default function SolarInstallationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                🌟 SAMSUR SOLAR ENERGY SERVICES
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert <span className="text-green-400">Solar</span><br />
                service <br />
            
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We believe in sustainable energy practices that can 
                transform modern energy consumption. Let us help you 
                transition to clean energy with our expert solar panel installation services.
              </p>
              
              <a 
                href="#services" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Discover Solar Solutions
              </a>
            </div>

            {/* Hero Image/Visual */} 
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">20+</div>
                    <div className="text-sm text-blue-100">Expert Technicians</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="bg-green-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">5k+</div>
                    <div className="text-sm text-blue-100">Installations</div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">25+</div>
                    <div className="text-sm text-blue-100">Years Experience</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-white mb-2">🏡 Free Home Assessment</div>
                  <div className="text-blue-100">Get your personalized solar solution quote today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600 mb-2">We have 20+ amazing</div>
                <div className="text-xl font-semibold text-gray-800">Expert Solar Technicians</div>
                <div className="text-sm text-gray-500 mt-2">Trained & Certified</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 mb-2">We achieved 100% of</div>
                <div className="text-xl font-semibold text-gray-800">Client Satisfaction</div>
                <div className="text-sm text-gray-500 mt-2">Through our work</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-4xl font-bold text-green-600 mb-2">5k+</div>
                <div className="text-gray-600 mb-2">We have 30 years of</div>
                <div className="text-xl font-semibold text-gray-800">Installations</div>
                <div className="text-sm text-gray-500 mt-2">Panels for our clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                ABOUT COMPANY
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Samsur Properties believes in 
                <span className="text-green-600"> sustainable energy</span> practices
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We're finding ways to bring energy to more people in more ways every 
                day, so that all of us can be part of the changing energy system. 
                We are committed to helping people find renewable, sustainable solar solutions.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Samsur Solar Energy speciality:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Lower Energy Costs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Increase Home Value</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Environmental Friendly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Energy Independence</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Contact Samsur
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-96 h-96 mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">☀️</div>
                  <div className="text-2xl font-bold mb-2">CERTIFIED</div>
                  <div className="text-lg">SOLAR ENERGY CONTRACTOR</div>
                  <div className="absolute inset-0 border-8 border-white/20 rounded-full"></div>
                  <div className="absolute inset-4 border-4 border-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Complete solar solution with repair services
            </h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              We're finding ways to bring energy to more people in more ways every day, so that, all of 
              us can be part of the changing energy system. Because Powering Progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white text-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Solar Panel Installation</h3>
              <p className="text-gray-600 text-sm mb-4">
                By generating your own electricity from solar energy, you can dramatically reduce your monthly utility bills.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white text-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Solar Power System</h3>
              <p className="text-gray-600 text-sm mb-4">
                By generating your own electricity from solar energy, you can dramatically reduce your monthly utility bills.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white text-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Household Solar Panel</h3>
              <p className="text-gray-600 text-sm mb-4">
                By generating your own electricity from solar energy, you can dramatically reduce your monthly utility bills.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white text-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧽</div>
              <h3 className="text-xl font-bold mb-3">Solar Panel Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">
                By generating your own electricity from solar energy, you can dramatically reduce your monthly utility bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Samsur Solar Solutions?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
                    <p className="text-gray-600">25+ years of experience with certified technicians ensuring quality installation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                    <p className="text-gray-600">Competitive pricing with flexible payment options and government subsidy assistance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">25 Year Warranty</h3>
                    <p className="text-gray-600">Comprehensive warranty coverage with ongoing maintenance and support services.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock customer support and emergency service for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Solar Quote</h3>
              <ContactForm 
                service="Solar Installation"
                className="space-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy. 
            Get your free consultation today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919042000172" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call Now: +91 90420 00172
            </a>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote
            </button>
          </div>

          <div className="mt-8 text-blue-100">
            <p className="text-sm">✓ Free Site Survey ✓ No Hidden Costs ✓ Government Subsidies Available</p>
          </div>
        </div>
      </section>
    </main>
  );
} 