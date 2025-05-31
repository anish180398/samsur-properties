'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PropertyImagesProps {
  images: string[];
  title: string;
}

export default function PropertyImages({ images, title }: PropertyImagesProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  if (!images || images.length === 0) {
    return null; // Or some fallback UI
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleMainImageClick = () => {
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] cursor-pointer" onClick={handleMainImageClick}>
        <Image
          src={images[selectedImageIndex]}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image: string, index: number) => (
            <div 
              key={index} 
              className={`relative h-20 cursor-pointer ${index === selectedImageIndex ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}

      {isViewerOpen && (
        // Fullscreen Viewer Component (will create next)
        <FullscreenImageViewer 
          images={images}
          initialIndex={selectedImageIndex}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}

// Placeholder for the Fullscreen ImageViewer component
function FullscreenImageViewer({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  // This will be implemented in the next step
  return null;
} 