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
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">🏡 Find Your Dream Property!</h2>
              <p className="text-blue-100">
                Get exclusive access to premium properties in Chennai
              </p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="p-8 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                Our property expert will contact you within 1 hour with personalized recommendations.
              </p>
              <div className="text-sm text-gray-500">
                <p>📞 Call us now: <strong>+91 90420 00172 / +91 9087886786</strong></p>
              </div>
            </div>
          ) : (
            <>
              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  
                  <p className="text-gray-600 text-sm">
                    Get a <strong>FREE property consultation</strong> and access to off-market deals
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-6 space-y-2">
                  
                 
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    Exclusive pre-launch projects
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    24/7 property support
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="Property Purchase">Property Purchase</option>
                      <option value="Property Purchase">Resale Properties</option>
                      <option value="Property Sale">Flats Sale</option>
                      <option value="Property Rental">Property Rental</option>
                      <option value="Investment Consultation">Investment Consultation</option>
                      <option value="Commercial Property">Commercial Properties</option>
                      <option value="Plot/Land">Plot/Land</option>
                      <option value="Villa/Independent House">Villa/Independent House</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Get FREE Consultation 🚀'
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      Failed to submit. Please try again or call us directly.
                    </p>
                  )}
                </form>

                {/* Trust indicators */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      4.9/5 Rating
                    </span>
                    <span className="flex items-center">
                      <span className="text-green-400 mr-1">✓</span>
                      1000+ Happy Clients
                    </span>
                    <span className="flex items-center">
                      <span className="text-blue-400 mr-1">🏆</span>
                      Certified Agent
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 rounded-b-xl">
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive calls/messages from Samsur Properties. 
                  <br />We respect your privacy and never share your information.
                </p>
              </div>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 