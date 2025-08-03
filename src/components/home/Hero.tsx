"use client";

import Image from "next/image";
import PropertySearch from "@/components/PropertySearch";
import HeroImage from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Clean Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Samsur Properties Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Simple Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/60" />
      </div>


      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col px-5 py-32 justify-center items-center min-h-screen">
        
        {/* Hero Content Container */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-white/90 text-sm font-medium tracking-wide">PREMIUM REAL ESTATE SOLUTIONS</span>
          </div>

          {/* Main Heading */}
          <h1 className="title-font text-5xl md:text-7xl lg:text-8xl mb-8 font-black text-white leading-tight tracking-tight">
            Find Your
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
              Perfect Property
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-12 leading-relaxed text-white/80 text-lg md:text-xl max-w-3xl font-light">
            Discover exceptional properties across all categories. From luxury homes to commercial spaces, 
            we connect you with the perfect real estate opportunities that match your vision and investment goals.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
              <div className="text-white/70 text-sm">Properties Listed</div>
            </div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm">Happy Clients</div>
            </div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>

          {/* Search Component */}
          <div className="w-full max-w-4xl">
            <div className="relative">
              {/* Search Container */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 text-left">Start Your Property Search</h3>
                  <p className="text-gray-600 text-left text-sm">Find your dream property in just a few clicks</p>
                </div>
                <PropertySearch />
              </div>
              
              {/* Subtle Shadow */}
              <div className="absolute -inset-2 bg-gradient-to-b from-transparent via-black/5 to-black/10 rounded-3xl -z-10" />
            </div>
          </div>

        
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent z-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500" />
    </section>
  );
}
