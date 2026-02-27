'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { CampingMapLocation } from '@/types'

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

export default function MapView({ locations }: { locations: CampingMapLocation[] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return <div className="h-72 bg-gray-100 rounded-xl" />
  }

  return (
    <div className="h-72 rounded-xl overflow-hidden">
      <MapContainer center={[52.37, 4.9]} zoom={15} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={icon}
          >
            <Popup>
              <div className="text-sm">
                <strong>{location.name}</strong>
                <p>{location.type}</p>
                <p>Vanaf €{location.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}