export interface CosmicObject {
  id: string
  slug: string
  title: string
  type: string
  created_at: string
  modified_at: string
  metadata?: Record<string, unknown>
}

export type Role = 'SUPERADMIN' | 'CAMPING_ADMIN' | 'USER'

export interface CampingSummary {
  id: string
  name: string
  slug: string
  description: string
  heroImage: string
}

export interface CampingMapLocation {
  id: string
  name: string
  type: string
  latitude: number
  longitude: number
  price: number
}

export interface BookingRequest {
  arrivalDate: string
  departureDate: string
  basePrice: number
  addOns: { label: string; price: number }[]
}

export interface BookingDraft {
  id: string
  status: 'PENDING'
  arrivalDate: string
  departureDate: string
  totalPrice: number
  expiresAt: string
}