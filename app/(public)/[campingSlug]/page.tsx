// app/(public)/[campingSlug]/page.tsx
import MapView from '@/components/MapView'
import PricingBreakdown from '@/components/PricingBreakdown'
import BookingSearchForm from '@/components/BookingSearchForm'
import type { CampingMapLocation } from '@/types'

const locations: CampingMapLocation[] = [
  {
    id: 'loc-1',
    name: 'A-12',
    type: 'Tent',
    latitude: 52.37,
    longitude: 4.9,
    price: 45
  },
  {
    id: 'loc-2',
    name: 'B-04',
    type: 'Glamping',
    latitude: 52.371,
    longitude: 4.902,
    price: 120
  }
]

export default async function CampingHomepage({
  params
}: {
  params: Promise<{ campingSlug: string }>
}) {
  const { campingSlug } = await params

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div>
        <p className="text-sm text-gray-500">Camping</p>
        <h1 className="text-3xl font-semibold">{campingSlug}</h1>
      </div>
      <BookingSearchForm />
      <MapView locations={locations} />
      <PricingBreakdown
        basePrice={45}
        extras={[{ label: 'Extra tent', price: 8 }]}
        total={53}
      />
    </div>
  )
}