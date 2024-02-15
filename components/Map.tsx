// components/Map.tsx

import { useEffect, useRef } from 'react';

interface Marker {
  position: { lat: number; lng: number };
  title: string;
}

interface MapProps {
  markers: Marker[];
}

const Map: React.FC<MapProps> = ({ markers }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!window.google) {
        // Google Maps API not loaded yet, return
        return;
      }

      const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat: 0, lng: 0 },
        zoom: 4,
      });

      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
        });
      });
    };

    if (!window.google) {
      // Google Maps API not loaded, load it dynamically
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAQpaGkmf7etCBHsCzWJoBLNq-sC3Cu4uo&callback=initMap`;
      script.defer = true;
      script.async = true;

      window.initMap = loadMap;

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
        delete window.initMap;
      };
    } else {
      // Google Maps API already loaded, initialize map
      loadMap();
    }
  }, [markers]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default Map;
