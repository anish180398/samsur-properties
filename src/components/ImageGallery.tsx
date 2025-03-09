'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image
          src={`https:${images[0]}`}
          alt={alt}
          fill
          className="object-cover"
          onClick={() => setSelectedImage(0)}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index + 1}
            className="relative h-24 cursor-pointer rounded-md overflow-hidden"
            onClick={() => setSelectedImage(index + 1)}
          >
            <Image
              src={`https:${image}`}
              alt={`${alt} - ${index + 2}`}
              fill
              className="object-cover hover:opacity-75 transition-opacity"
            />
          </div>
        ))}
      </div>

      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
        
        <div className="relative z-50 max-w-7xl mx-auto px-4">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white"
            >
              Close
            </button>
            
            <div className="relative h-[80vh] w-[90vw]">
              <Image
                src={`https:${images[selectedImage || 0]}`}
                alt={alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 p-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    selectedImage === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
} 