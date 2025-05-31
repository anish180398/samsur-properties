import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Samsur Properties</h3>
            <p className="text-gray-400">
              Your trusted partner in real estate, providing comprehensive property solutions across India.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Properties</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=flat" className="text-gray-400 hover:text-white">
                  Flats
                </Link>
              </li>
              <li>
                <Link href="/properties?type=plot" className="text-gray-400 hover:text-white">
                  Plots
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="text-gray-400 hover:text-white">
                  Independent Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="text-gray-400 hover:text-white">
                  Commercial Spaces
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/solar-installation" className="text-gray-400 hover:text-white">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link href="/services/banking" className="text-gray-400 hover:text-white">
                  Banking Services
                </Link>
              </li>
              <li>
                <Link href="/properties?purpose=buy" className="text-gray-400 hover:text-white">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/properties?purpose=sell" className="text-gray-400 hover:text-white">
                  Sell Property
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+919042000172" className="hover:text-white">
                  +91 090420 00172
                </a>
              </li>
              <li>
                <a href="mailto:info@samsurproperties.com" className="hover:text-white">
                  info@samsurproperties.com
                </a>
              </li>
              <li>
                4/15, G.S.T. Road, near Siva Sakthi Kalyana Mandapam, <br />West Tambaram, Irumbuliyur, Chennai, Tamil Nadu 600045
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Samsur Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 