import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Solar Panel Installation | Samsur Properties',
  description: 'Professional solar panel installation services for your property',
};

export default function SolarInstallationPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-12">
      <h1 className="text-4xl font-bold mb-6">Solar Panel Installation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Solar?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduce your electricity bills significantly</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Environment-friendly renewable energy source</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Government incentives and tax benefits</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Increase your property value</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Get a Free Quote</h2>
          <ContactForm 
            service="solar-installation"
            className="bg-white p-6 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
} 