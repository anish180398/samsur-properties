"use client";

import Image from "next/image";
import PropertySearch from "@/components/PropertySearch";
import HeroImage from "@/assets/hero.jpg"; // Add your hero image to assets

export default function Hero() {
  return (
    <section className="relative min-h-screen text-gray-600 body-font">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Samsur Properties Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col px-5 py-48 justify-end items-center min-h-screen">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-6xl text-5xl mb-4 font-bold text-white">
            Find Your Perfect Property
          </h1>
          <p className="mb-8 leading-relaxed text-white/90 text-xl">
            Discover a wide range of properties across all categories. Whether
            you&apos;re looking for a new home, an investment property, or a
            commercial space, we have the perfect property for you.
          </p>

          <div className="w-full max-w-2xl ">
            <PropertySearch />
          </div>
        </div>
      </div>
    </section>
  );
}
