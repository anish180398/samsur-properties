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
    <div className="relative group">
    {/* Floating background glow */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
    
    {/* Shadow layer for depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-3xl transform translate-y-2 translate-x-2 opacity-30" />
    
    {/* Main filter container */}
    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-6 lg:p-8">
      {/* Inner glow border */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl pointer-events-none" />
      
      {/* Header */}
      <div className="relative mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Filter Properties
          </h3>
        </div>
        <p className="text-sm text-slate-600 ml-11">Refine your search to find the perfect property</p>
      </div>
  
      {/* Filter Grid - Responsive Layout */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6">
        
        {/* Property Type Filter */}
        <div className="relative group/filter col-span-1 sm:col-span-1 lg:col-span-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-focus-within/filter:opacity-100 blur-sm transition-all duration-300" />
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-2 ml-1">Property Type</label>
            <select
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:shadow-xl transition-all duration-300 hover:bg-white/90"
            >
              <option value="">All Types</option>
              <option value="Flat">🏢 Flats</option>
              <option value="Plot">📍 Plots</option>
              <option value="Villa">🏘️ Villas</option>
              <option value="Commercial">🏬 Commercial</option>
            </select>
          </div>
        </div>
  
        {/* Purpose Filter */}
        <div className="relative group/filter col-span-1 sm:col-span-1 lg:col-span-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-xl opacity-0 group-focus-within/filter:opacity-100 blur-sm transition-all duration-300" />
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-2 ml-1">Purpose</label>
            <select
              value={filters.purpose}
              onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
              className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent focus:shadow-xl transition-all duration-300 hover:bg-white/90"
            >
              <option value="">All Purposes</option>
              <option value="Sale">💰 Sale</option>
              <option value="Resale">🔄 Resale</option>
              <option value="Rental">🏠 Rental</option>
            </select>
          </div>
        </div>
  
        {/* Price Range - Responsive: spans 2 columns on sm+ */}
        <div className="relative group/filter col-span-1 sm:col-span-2 lg:col-span-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl opacity-0 group-focus-within/filter:opacity-100 blur-sm transition-all duration-300" />
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-2 ml-1">Price Range</label>
            <div className="flex gap-3 items-center">
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Min ₹"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent focus:shadow-xl transition-all duration-300 hover:bg-white/90 placeholder-slate-400"
                />
              </div>
              <div className="flex-shrink-0">
                <div className="w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full" />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Max ₹"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent focus:shadow-xl transition-all duration-300 hover:bg-white/90 placeholder-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Location Filter */}
        <div className="relative group/filter col-span-1 sm:col-span-1 lg:col-span-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl opacity-0 group-focus-within/filter:opacity-100 blur-sm transition-all duration-300" />
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-2 ml-1">Location</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-3 pl-10 text-sm font-medium text-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent focus:shadow-xl transition-all duration-300 hover:bg-white/90 placeholder-slate-400"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sort By Filter */}
        <div className="relative group/filter col-span-1 sm:col-span-1 lg:col-span-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-xl opacity-0 group-focus-within/filter:opacity-100 blur-sm transition-all duration-300" />
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-2 ml-1">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent focus:shadow-xl transition-all duration-300 hover:bg-white/90"
            >
              <option value="">Default</option>
              <option value="price-asc">💹 Price: Low to High</option>
              <option value="price-desc">💰 Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
  
      {/* Action Buttons - Responsive Layout */}
      <div className="relative mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-between">
        
        {/* Left side - Main actions */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          
          {/* Apply Button */}
          <button
            onClick={handleFilter}
            className="relative group/apply flex-1 sm:flex-initial transform-gpu hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-emerald-600/50 rounded-2xl opacity-70 group-hover/apply:opacity-100 blur-xl transition-all duration-300" />
            
            <div className="relative">
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl transform translate-y-1 translate-x-1 opacity-20" />
              
              {/* Main button */}
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-2xl transform-gpu group-hover/apply:translate-y-[-1px] transition-all duration-300 border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Apply Filters
                </span>
              </div>
            </div>
          </button>
  
          {/* Reset Button */}
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
            className="relative group/reset flex-1 sm:flex-initial transform-gpu hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-300/30 to-slate-400/30 rounded-xl opacity-0 group-hover/reset:opacity-100 blur-lg transition-all duration-300" />
            
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 text-slate-600 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg group-hover/reset:bg-white/90 group-hover/reset:text-slate-800 group-hover/reset:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset All
              </span>
            </div>
          </button>
        </div>
  
        {/* Right side - Filter count indicator */}
        <div className="flex justify-center sm:justify-end">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100/80 to-blue-100/80 backdrop-blur-sm border border-white/40 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">
              {Object.values(filters).filter(value => value !== '').length} filters active
            </span>
          </div>
        </div>
      </div>
  
      {/* Bottom reflection */}
      <div className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-b from-white/20 to-transparent rounded-b-3xl blur-sm opacity-60" />
    </div>
  </div>
  
  );
} 