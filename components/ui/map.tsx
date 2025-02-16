"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  location: string;
}

export function Map({ location }: MapProps) {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([0, 0], 13);

    // Add the tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Geocode the location string and update the map
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        location
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0]) {
          const { lat, lon } = data[0];
          map.setView([lat, lon], 13);
          L.marker([lat, lon]).addTo(map);
        }
      });

    return () => {
      map.remove();
    };
  }, [location]);

  return (
    <div id="map" className="h-[300px] w-full rounded-lg overflow-hidden" />
  );
}
