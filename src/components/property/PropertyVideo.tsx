'use client';

import { useState } from 'react';

interface PropertyVideoProps {
  videoLink?: string;
  title: string;
}

// Function to extract YouTube video ID from various YouTube URL formats
function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|m\.youtube\.com\/watch\?v=|youtube\.com\/\?v=)([^#\&\?]{11})/,
    /^([^#\&\?]{11})$/ // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export default function PropertyVideo({ videoLink, title }: PropertyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(true);

  if (!videoLink) {
    return null;
  }

  const videoId = extractYouTubeVideoId(videoLink);

  if (!videoId) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-600">Invalid YouTube video URL provided.</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;

  return (
    <div className="mb-8">
      {/* <h2 className="text-2xl font-bold mb-4">Property Video</h2> */}
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
        {isLoaded && (
          <iframe
            src={embedUrl}
            title={`Video tour of ${title}`}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
} 