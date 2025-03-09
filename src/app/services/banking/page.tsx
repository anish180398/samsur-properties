import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking Services | Samsur Properties',
  description: 'Home loans and property financing services',
};

export default function BankingServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Banking Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Banking Partners</h2>
          <div className="grid gap-4">
            {/* Add your banking partners here */}
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">State Bank of India</h3>
              <p className="text-gray-600">Home loans starting at 6.7% p.a.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">HDFC Bank</h3>
              <p className="text-gray-600">Special rates for premium customers</p>
            </div>
            {/* Add more banks as needed */}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Loan Services</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Home Loans</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Competitive interest rates</li>
                <li>Flexible repayment options</li>
                <li>Quick approval process</li>
                <li>Minimal documentation</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Property Financing</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Construction financing</li>
                <li>Land purchase loans</li>
                <li>Property renovation loans</li>
                <li>Balance transfer facility</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Contact for Assistance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 