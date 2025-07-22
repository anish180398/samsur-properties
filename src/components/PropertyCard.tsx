'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency} from '@/utils/format';
import { Property } from '@/types/contentful';
import ShareProperty from './ShareProperty';
import { 
  MapPinIcon, 
  HomeIcon, 
  Square3Stack3DIcon,
  BanknotesIcon 
} from '@heroicons/react/24/outline';
import defaultProperty from '@/assets/defualt-property.jpg';
interface PropertyCardProps {
  property: Property;
}

export function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition-shadow w-fit animate-pulse">
      <div className="relative h-48 bg-gray-200" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-8 bg-gray-200 rounded mb-4" />
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
}

export default function PropertyCard({ property }: PropertyCardProps) {
  // const [locationName, setLocationName] = useState<string>('Loading...');

  // useEffect(() => {
  //   // Clear expired cache entries when component mounts
  //   clearExpiredCache();

  //   const [lat, lng] = property.location.split(',').map(coord => parseFloat(coord.trim()));
    
  //   if (!isNaN(lat) && !isNaN(lng)) {
  //     getLocationName(lat, lng)
  //       .then(name => {
  //         // If the name is too long, truncate it
  //         setLocationName(name.length > 30 ? name.substring(0, 27) + '...' : name);
  //       })
  //       .catch(() => setLocationName('Location unavailable'));
  //   } else {
  //     setLocationName(property.location);
  //   }
  // }, [property.location]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={property.images[0]||defaultProperty}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded text-sm">
          {property.purpose}
        </div>
      </div>
      
      <div className="p-4 space-y-4 flex-1 flex flex-col">
        {/* Location with icon */}
        <div className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5 text-red-600 flex-shrink-0" />
          <span className="text-gray-600 text-sm font-bold truncate">{property.location}</span>
        </div>
        
        {/* Title with fixed height */}
        <h3 className='text-base font-semibold min-h-[3rem] overflow-hidden' style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>{property.title}</h3>
        
        {/* Property details */}
        <div className="flex gap-4 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <span className="truncate">{property.propertyType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Square3Stack3DIcon className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <span className='whitespace-nowrap'>{property.size} sq.ft</span>
          </div>
          <div className="flex items-center gap-2">
            <BanknotesIcon className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <span className="truncate">{formatCurrency(property.price)}</span>
          </div>
        </div>

        {/* Actions - pushed to bottom */}
        <div className="flex justify-between items-center pt-2 mt-auto">
          <Link 
            href={`/properties/${property.slug}`}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 font-medium"
          >
            View Details
          </Link>
          <ShareProperty property={property} />
        </div>
      </div>
    </div>
  );
} 