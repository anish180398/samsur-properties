'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface FullscreenImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function FullscreenImageViewer({
  images,
  initialIndex,
  onClose,
}: FullscreenImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext, onClose]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        onClick={onClose}
        aria-label="Close viewer"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>

      {/* Image */}
      <div className="relative w-full max-w-screen-lg max-h-screen-lg h-full flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`Fullscreen view of image ${currentIndex + 1}`}
          width={1000} // Adjust as needed
          height={800} // Adjust as needed
          style={{ objectFit: 'contain' }} // Use style prop for objectFit
          priority
        />
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-10 w-10" />
          </button>
          <button
            className="absolute right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-10 w-10" />
          </button>
        </>
      )}
    </div>
  );
} 