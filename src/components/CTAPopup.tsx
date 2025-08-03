'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CTAPopupProps {
  delay?: number; // Delay in seconds before showing popup
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

export default function CTAPopup({ delay = 10 }: CTAPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: 'Property Purchase',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('samsur_cta_popup_shown');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('samsur_cta_popup_shown', 'true');
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/cta-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      setStatus('success');
      
      // Close popup after 2 seconds on success
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      {/* Enhanced Backdrop with blur */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" aria-hidden="true" />
      
      {/* Floating geometric elements in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-blue-400/20 rotate-12 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-20 h-20 border border-purple-400/15 -rotate-12 animate-bounce" style={{ animationDuration: '6s' }} />
      </div>
      
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative transform-gpu animate-modalSlide">
          {/* Floating background glow */}
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse" />
          
          {/* Shadow layer for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-300/30 to-slate-400/30 rounded-3xl transform translate-y-4 translate-x-4 opacity-50" />
          
          {/* Main modal container */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-3xl max-w-md w-full max-h-[90vh] overflow-hidden border border-white/50">
            {/* Inner glow border */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl pointer-events-none" />
            
            {/* Enhanced Close button with 3D effect */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-20 group transform-gpu hover:scale-110 transition-all duration-300"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/50 group-hover:bg-white/90 group-hover:shadow-xl transition-all duration-300">
                <XMarkIcon className="h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
              </div>
            </button>

            {/* Enhanced Header with 3D gradient background */}
            <div className="relative overflow-hidden rounded-t-3xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 animate-gradient" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
              
              <div className="relative text-white p-8">
                <div className="text-center">
                  {/* Floating emoji with animation */}
                  <div className="mb-4">
                    <span className="text-5xl inline-block animate-float">🏡</span>
                  </div>
                  
                  <div className="relative mb-4">
                    {/* Text shadow for depth */}
                    <h2 className="absolute text-3xl font-black text-black/20 transform translate-x-1 translate-y-1 blur-sm">
                      Find Your Dream Property!
                    </h2>
                    <h2 className="relative text-3xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                      Find Your Dream Property!
                    </h2>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed backdrop-blur-sm bg-white/10 rounded-xl p-3 border border-white/20">
                    Get exclusive access to premium properties in Chennai
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border border-white/30 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center">
                {/* Success animation container */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-2xl border border-green-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                      <svg className="relative w-10 h-10 text-green-600 animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black bg-gradient-to-r from-slate-800 to-green-600 bg-clip-text text-transparent mb-3">
                  Thank You!
                </h3>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 mb-6">
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Our property expert will contact you within <strong className="text-green-600">1 hour</strong> with personalized recommendations.
                  </p>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
                    <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                      <span className="text-xl">📞</span>
                      Call us now: <strong className="text-blue-600">+91 90420 00172 / +91 9087886786</strong>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative overflow-y-auto max-h-[60vh]">
                {/* Content */}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
                      <span className="text-sm font-bold text-blue-700">LIMITED TIME OFFER</span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      Get a <strong className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">FREE property consultation</strong> and access to off-market deals
                    </p>
                  </div>

                  {/* Enhanced Benefits with 3D cards */}
                  <div className="mb-8 space-y-3">
                    {[
                      { icon: '🎯', text: 'Exclusive pre-launch projects' },
                      { icon: '⚡', text: '24/7 property support' },
                      { icon: '💎', text: 'Premium location insights' }
                    ].map((benefit, index) => (
                      <div 
                        key={index}
                        className="relative group"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: 'slideInLeft 0.6s ease-out forwards'
                        }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        <div className="relative flex items-center bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/40 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                          <span className="text-xl mr-3">{benefit.icon}</span>
                          <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Form with 3D inputs */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { type: 'text', placeholder: 'Your Name', value: formData.name, key: 'name' },
                      { type: 'email', placeholder: 'Email Address', value: formData.email, key: 'email' },
                      { type: 'tel', placeholder: 'Phone Number', value: formData.phone, key: 'phone' }
                    ].map((field, index) => (
                      <div key={field.key} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 blur-sm transition-all duration-300" />
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          className="relative w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent shadow-lg focus:shadow-xl transition-all duration-300 placeholder-slate-400"
                          value={field.value}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        />
                      </div>
                    ))}

                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 blur-sm transition-all duration-300" />
                      <select
                        className="relative w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent shadow-lg focus:shadow-xl transition-all duration-300"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      >
                        <option value="Property Purchase">Property Purchase</option>
                        <option value="Resale Properties">Resale Properties</option>
                        <option value="Flats Sale">Flats Sale</option>
                        <option value="Property Rental">Property Rental</option>
                        <option value="Investment Consultation">Investment Consultation</option>
                        <option value="Commercial Property">Commercial Properties</option>
                        <option value="Plot/Land">Plot/Land</option>
                        <option value="Villa/Independent House">Villa/Independent House</option>
                      </select>
                    </div>

                    {/* Enhanced Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="relative w-full group transform-gpu hover:scale-105 transition-all duration-300 disabled:hover:scale-100"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-emerald-600/50 rounded-2xl opacity-70 group-hover:opacity-100 blur-xl transition-all duration-300" />
                      
                      <div className="relative">
                        {/* Shadow layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl transform translate-y-1 translate-x-1 opacity-30" />
                        
                        {/* Main button */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-2xl transform-gpu group-hover:translate-y-[-1px] transition-all duration-300 border border-white/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                          
                          <span className="relative z-10 flex items-center justify-center">
                            {status === 'submitting' ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </>
                            ) : (
                              <>
                                Get FREE Consultation
                                <span className="ml-2 text-xl group-hover:animate-bounce">🚀</span>
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                    </button>

                    {status === 'error' && (
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4">
                        <p className="text-red-600 text-sm text-center font-medium">
                          Failed to submit. Please try again or call us directly.
                        </p>
                      </div>
                    )}
                  </form>

                  {/* Enhanced Trust indicators */}
                  <div className="mt-8 text-center">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200/50">
                      <div className="flex items-center justify-center space-x-6 text-sm">
                        {[
                          { icon: '⭐', text: '4.9/5 Rating', color: 'text-yellow-600' },
                          { icon: '✓', text: '1000+ Happy Clients', color: 'text-green-600' },
                          { icon: '🏆', text: 'Certified Agent', color: 'text-blue-600' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center group hover:scale-110 transition-transform duration-300">
                            <span className="text-lg mr-2">{item.icon}</span>
                            <span className={`font-semibold ${item.color}`}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Footer */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 rounded-b-3xl border-t border-slate-200/50">
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By submitting, you agree to receive calls/messages from Samsur Properties. 
                    <br />We respect your privacy and never share your information.
                  </p>
                </div>
              </div>
            )}
            
            {/* Bottom reflection */}
            <div className="absolute -bottom-6 left-6 right-6 h-6 bg-gradient-to-b from-white/20 to-transparent rounded-b-3xl blur-sm opacity-60" />
          </div>
        </Dialog.Panel>
      </div>

      <style jsx>{`
        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes checkmark {
          0% {
            stroke-dasharray: 0 50;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 50 50;
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-modalSlide {
          animation: modalSlide 0.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-checkmark {
          animation: checkmark 0.6s ease-in-out forwards;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </Dialog>
  );
}
