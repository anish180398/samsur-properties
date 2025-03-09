'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PriceRange {
  min: number;
  max: number;
}

export interface FilterOptions {
  propertyType: string;
  purpose: string;
  priceRange: PriceRange;
  location: string;
  sortBy: string;
}

export default function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    propertyType: searchParams.get('type') || '',
    purpose: searchParams.get('purpose') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    location: searchParams.get('location') || '',
    sortBy: searchParams.get('sort') || '',
  });

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (filters.propertyType) params.set('type', filters.propertyType);
    if (filters.purpose) params.set('purpose', filters.purpose);
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.location) params.set('location', filters.location);
    if (filters.sortBy) params.set('sort', filters.sortBy);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex flex-wrap gap-4 items-center">
        <select
          value={filters.propertyType}
          onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          className="min-w-[120px] border rounded px-3 py-1.5 text-sm"
        >
          <option value="">Property Type</option>
          <option value="Flat">Flats</option>
          <option value="Plot">Plots</option>
          <option value="Villa">Villas</option>
          <option value="Commercial">Commercial</option>
        </select>

        <select
          value={filters.purpose}
          onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
          className="min-w-[100px] border rounded px-3 py-1.5 text-sm"
        >
          <option value="">Purpose</option>
          <option value="Sale">Sale</option>
          <option value="Resale">Resale</option>
          <option value="Rental">Rental</option>
        </select>

        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Min ₹"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            className="w-24 border rounded px-3 py-1.5 text-sm"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max ₹"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="w-24 border rounded px-3 py-1.5 text-sm"
          />
        </div>

        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="min-w-[150px] border rounded px-3 py-1.5 text-sm"
        />

        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
          className="min-w-[120px] border rounded px-3 py-1.5 text-sm"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700"
        >
          Apply
        </button>

        <button
          onClick={() => {
            setFilters({
              propertyType: '',
              purpose: '',
              minPrice: '',
              maxPrice: '',
              location: '',
              sortBy: '',
            });
            router.push('/properties');
          }}
          className="text-gray-600 hover:text-gray-800 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
} 