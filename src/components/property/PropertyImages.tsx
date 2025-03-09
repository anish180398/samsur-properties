'use client';

import Image from 'next/image';

interface PropertyImagesProps {
  images: string[];
  title: string;
}

export default function PropertyImages({ images, title }: PropertyImagesProps) {
  return (
    <div className="space-y-4">
      <div className="relative h-[400px]">
        <Image
          src={`${images[0]}`}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.slice(1).map((image: string, index: number) => (
          <div key={index} className="relative h-20">
            <Image
              src={`${image}`}
              alt={`${title} - Image ${index + 2}`}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 