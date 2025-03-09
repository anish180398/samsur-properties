import Link from 'next/link';

export default function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/services/solar-installation" 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Solar Panel Installation</h3>
            <p className="text-gray-600">
              Go green with our professional solar panel installation services
            </p>
          </Link>
          <Link href="/services/banking" 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Banking Services</h3>
            <p className="text-gray-600">
              Get assistance with home loans and property financing
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
} 