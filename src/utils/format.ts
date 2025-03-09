export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatArea(size: number): string {
  return `${size.toLocaleString()} sq.ft`;
}

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeResult {
  address_components: AddressComponent[];
  formatted_address: string;
  place_id: string;
  types: string[];
}

interface GeocodeResponse {
  results: GeocodeResult[];
  status: string;
}

// Cache object to store location names
const locationCache: Record<string, { name: string; timestamp: number }> = {};
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function getLocationName(latitude: number, longitude: number): Promise<string> {
  const cacheKey = `${latitude},${longitude}`;
  const now = Date.now();

  // Check cache first
  if (locationCache[cacheKey]) {
    const cached = locationCache[cacheKey];
    // Return cached value if it's not expired
    if (now - cached.timestamp < CACHE_DURATION) {
      return cached.name;
    }
    // Remove expired cache entry
    delete locationCache[cacheKey];
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&result_type=sublocality|neighborhood|route`
    );
    const data: GeocodeResponse = await response.json();
    
    let locationName = 'Unknown Location';

    if (data.results && data.results[0]) {
      const addressComponents = data.results[0].address_components;
      
      // Try to find the most specific area name in this order:
      const neighborhood = addressComponents.find(
        component => component.types.includes('neighborhood')
      );

      const subSubLocality = addressComponents.find(
        component => component.types.includes('sublocality_level_2')
      );
      
      const subLocality = addressComponents.find(
        component => component.types.includes('sublocality_level_1')
      );

      const route = addressComponents.find(
        component => component.types.includes('route')
      );
      
      // Get the most specific name available
      locationName = neighborhood?.short_name || 
                    subSubLocality?.short_name ||
                    subLocality?.short_name ||
                    route?.short_name ||
                    'Unknown Location';
    }

    // Cache the result
    locationCache[cacheKey] = {
      name: locationName,
      timestamp: now
    };
    
    return locationName;
  } catch (error) {
    console.error('Error getting location name:', error);
    return 'Unknown Location';
  }
}

// Optional: Function to clear expired cache entries
export function clearExpiredCache(): void {
  const now = Date.now();
  Object.entries(locationCache).forEach(([key, value]) => {
    if (now - value.timestamp >= CACHE_DURATION) {
      delete locationCache[key];
    }
  });
}

// Optional: Function to clear entire cache
export function clearLocationCache(): void {
  Object.keys(locationCache).forEach(key => {
    delete locationCache[key];
  });
} 