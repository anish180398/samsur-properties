'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchFilters {
  query: string;
  propertyType: string;
  priceRange: {
    min: number;
    max: number;
  };
  location: string;
  purpose: string;
}

export default function PropertySearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams.get('query') || '',
    propertyType: searchParams.get('type') || '',
    priceRange: {
      min: Number(searchParams.get('minPrice')) || 0,
      max: Number(searchParams.get('maxPrice')) || 0,
    },
    location: searchParams.get('location') || '',
    purpose: searchParams.get('purpose') || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (filters.query) params.set('query', filters.query);
    if (filters.propertyType) params.set('type', filters.propertyType);
    if (filters.purpose) params.set('purpose', filters.purpose);
    if (filters.location) params.set('location', filters.location);
    if (filters.priceRange.min > 0) params.set('minPrice', filters.priceRange.min.toString());
    if (filters.priceRange.max > 0) params.set('maxPrice', filters.priceRange.max.toString());

    const url = `/properties?${params.toString()}`;
    console.log('Search filters:', filters);
    console.log('Generated URL:', url);
    router.push(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-4 bg-white/50 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search properties..."
          className="border p-2 rounded"
          value={filters.query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        />
        
        <select
          className="border p-2 rounded"
          value={filters.propertyType}
          onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
        >
          <option value="">Property Type</option>
          <option value="Flat">Flats</option>
          <option value="Plot">Plots</option>
          <option value="Villa">Independent Villas</option>
          <option value="Commercial">Commercial Spaces</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filters.purpose}
          onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
        >
          <option value="">Purpose</option>
          <option value="Sale">Sale</option>
          <option value="Resale">Resale</option>
          <option value="Rental">Rental</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            className="border p-2 rounded w-1/2"
            value={filters.priceRange.min || ''}
            onChange={(e) => setFilters({
              ...filters,
              priceRange: { ...filters.priceRange, min: Number(e.target.value) }
            })}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="border p-2 rounded w-1/2"
            value={filters.priceRange.max || ''}
            onChange={(e) => setFilters({
              ...filters,
              priceRange: { ...filters.priceRange, max: Number(e.target.value) }
            })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
} 