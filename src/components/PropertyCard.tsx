'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/utils/format';
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
    <div className="relative group">
      {/* Floating glow effect */}
      <div className="absolute -inset-3 bg-gradient-to-br from-slate-200/30 via-slate-100/20 to-slate-200/30 rounded-3xl animate-pulse blur-xl" />
      
      {/* Shadow layer */}
      <div className="absolute inset-0 bg-slate-200/20 rounded-2xl transform translate-y-2 translate-x-2 opacity-30" />
      
      {/* Main skeleton card */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
        
        {/* Image skeleton */}
        <div className="relative h-64 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
        
        {/* Content skeleton */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-200 rounded animate-pulse" />
            <div className="h-4 bg-slate-200 rounded w-2/3 animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <div className="h-6 bg-slate-200 rounded w-4/5 animate-pulse" />
            <div className="h-6 bg-slate-200 rounded w-3/4 animate-pulse" />
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 rounded w-20 animate-pulse" />
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4">
            <div className="h-10 bg-slate-200 rounded-xl w-32 animate-pulse" />
            <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="relative group transform-gpu hover:scale-105 transition-all duration-500">
      {/* Floating background glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
      
      {/* Shadow layer with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-3xl transform translate-y-3 translate-x-3 opacity-40 group-hover:translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
      
      {/* Main card container */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 overflow-hidden group-hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Inner glow border */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl pointer-events-none" />
        
        {/* Image container with 3D effects */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
          
          <Image
            src={property.images[0] || defaultProperty}
            alt={property.title}
            fill
            className="object-cover transform-gpu group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Property purpose badge with glass effect */}
          <div className="absolute top-4 right-4 z-20">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-sm" />
              <div className="relative bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
                <span className="relative z-10">{property.purpose}</span>
              </div>
            </div>
          </div>
          
          {/* Bottom fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        </div>
        
        {/* Content section with enhanced styling */}
        <div className="relative p-6 space-y-5 flex-1 flex flex-col">
          {/* Location with enhanced icon styling */}
          <div className="flex items-center gap-3 group/location">
            <div className="relative">
              <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover/location:opacity-100 transition-opacity duration-300" />
              <MapPinIcon className="relative h-5 w-5 text-red-600 flex-shrink-0 transform group-hover/location:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-slate-700 text-sm font-bold truncate bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text">
              {property.location}
            </span>
          </div>
          
          {/* Title with 3D text effect */}
          <div className="relative">
            <h3 className="text-lg font-bold min-h-[3.5rem] overflow-hidden bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight" 
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
              {property.title}
            </h3>
          </div>
          
          {/* Property details with enhanced styling */}
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl border border-slate-200/50 group/detail">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover/detail:opacity-100 transition-opacity duration-300" />
                <HomeIcon className="relative h-4 w-4 text-slate-600 flex-shrink-0" />
              </div>
              <span className="truncate font-medium text-slate-700">{property.propertyType}</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-purple-50/50 rounded-xl border border-slate-200/50 group/detail">
              <div className="relative">
                <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-sm opacity-0 group-hover/detail:opacity-100 transition-opacity duration-300" />
                <Square3Stack3DIcon className="relative h-4 w-4 text-slate-600 flex-shrink-0" />
              </div>
              <span className="whitespace-nowrap font-medium text-slate-700">{property.size} sq.ft</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-emerald-50/50 rounded-xl border border-slate-200/50 group/detail">
              <div className="relative">
                <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur-sm opacity-0 group-hover/detail:opacity-100 transition-opacity duration-300" />
                <BanknotesIcon className="relative h-4 w-4 text-slate-600 flex-shrink-0" />
              </div>
              <span className="truncate font-bold text-emerald-700">{formatCurrency(property.price)}</span>
            </div>
          </div>

          {/* Actions section with 3D buttons */}
          <div className="flex justify-between items-center pt-4 mt-auto">
            <Link 
              href={`/properties/${property.slug}`}
              className="relative group/button transform-gpu hover:scale-105 transition-all duration-300"
            >
              {/* Button glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-800/30 to-slate-600/30 rounded-2xl opacity-50 group-hover/button:opacity-100 blur-lg transition-all duration-300" />
              
              <div className="relative">
                {/* Shadow layer */}
                <div className="absolute inset-0 bg-slate-900 rounded-xl transform translate-y-1 translate-x-1 opacity-20" />
                
                {/* Main button */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 text-white px-6 py-3 rounded-xl font-semibold shadow-xl transform-gpu group-hover/button:translate-y-[-1px] transition-all duration-300 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
                  <span className="relative z-10">View Details</span>
                </div>
              </div>
            </Link>
            
            <div className="relative group/share transform-gpu hover:scale-110 transition-all duration-300">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover/share:opacity-100 blur-lg transition-all duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/50 group-hover/share:shadow-xl transition-all duration-300">
                <ShareProperty property={property} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom reflection */}
        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-b from-white/20 to-transparent rounded-b-3xl blur-sm opacity-60" />
      </div>
    </div>
  );
}
