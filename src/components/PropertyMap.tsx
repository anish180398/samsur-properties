'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

interface PropertyMapProps {
  address: string;
  coordinates?: string;
  className?: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const DEFAULT_COORDINATES = { lat: 17.385044, lng: 78.486671 }; // Hyderabad

export default function PropertyMap({  coordinates, className }: PropertyMapProps) {
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>(DEFAULT_COORDINATES);

  useEffect(() => {
    if (coordinates) {
      const [lat, lng] = coordinates.split(',').map(coord => parseFloat(coord.trim()));
      if (!isNaN(lat) && !isNaN(lng)) {
        setMapCoordinates({ lat, lng });
      }
    }
  }, [coordinates]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerClassName={className}
        center={mapCoordinates}
        zoom={15}
      >
        <Marker position={mapCoordinates} />
      </GoogleMap>
    </LoadScript>
  );
} 