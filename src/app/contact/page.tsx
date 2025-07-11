import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Samsur Properties for all your real estate needs.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ContactForm className="bg-white p-6 rounded-lg shadow-md" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <address className="not-italic">
              <p className="mb-2">
                <strong>Samsur Properties</strong>
              </p>
              <p className="text-gray-600 mb-4">
              4/15, G.S.T. Road, near Siva Sakthi Kalyana Mandapam, <br />West Tambaram, Irumbuliyur, Chennai, Tamil Nadu 600045
              </p>
              
              <div className="space-y-2">
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919042000172" className="text-blue-600 hover:text-blue-800">
                 +91 90420 00172 / +91 9087886786
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:samsurproperties@gmail.com" className="text-blue-600 hover:text-blue-800">
                    samsurproperties@gmail.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Sunday: 9:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 