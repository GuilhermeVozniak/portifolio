"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

interface MapProps {
  location: string;
}

export function Map({ location }: MapProps) {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Dynamic import of Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Fix marker icon issues
      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      // Initialize the map if it hasn't been initialized yet
      if (!map) {
        const newMap = L.map("map").setView([0, 0], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(newMap);
        setMap(newMap);
      }

      // Geocode the location string and update the map
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data[0] && map) {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 13);
            L.marker([lat, lon], { icon }).addTo(map);
          }
        });
    });

    return () => {
      map?.remove();
    };
  }, [location, map]);

  return (
    <div id="map" className="h-[300px] w-full rounded-lg overflow-hidden" />
  );
}
