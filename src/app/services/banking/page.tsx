import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Assuming Heroicons are available

export const metadata: Metadata = {
  title: 'Banking Services | Samsur Properties',
  description: 'Home loans and property financing services',
};

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function BankingServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 mt-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Banking Services</h1>
          <p className="text-xl text-gray-600">Your trusted partner for seamless property financing.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Banking Partners Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Our Banking Partners</h2>
            <div className="grid gap-6">
              {/* Add your banking partners here */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">State Bank of India</h3>
                <p className="text-gray-600">Home loans starting at <span className="font-bold">6.7% p.a.</span></p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-red-700 mb-2">HDFC Bank</h3>
                <p className="text-gray-600">Special rates for premium customers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-green-700 mb-2">ICICI Bank</h3> {/* Added another example */}
                <p className="text-gray-600">Tailored financing solutions</p>
              </div>
              {/* Add more banks as needed */}
            </div>
          </div>

          {/* Loan Services Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Loan Services</h2>
            <div className="space-y-8">
              {/* Home Loans Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Home Loans</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Competitive interest rates</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Flexible repayment options</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Quick approval process</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Minimal documentation</span></li>
                </ul>
              </div>

              {/* Property Financing Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Financing</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Construction financing</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Land purchase loans</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Property renovation loans</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Balance transfer facility</span></li>
                </ul>
              </div>
            </div>

            {/* Contact Call to Action */}
            <div className="mt-10 text-center lg:text-left">
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact for Assistance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 