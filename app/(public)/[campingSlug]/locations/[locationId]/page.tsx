// app/(public)/[campingSlug]/locations/[locationId]/page.tsx
import PricingBreakdown from '@/components/PricingBreakdown'

export default async function LocationPage({
  params
}: {
  params: Promise<{ campingSlug: string; locationId: string }>
}) {
  const { locationId } = await params

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Locatie {locationId}</h1>
      <PricingBreakdown
        basePrice={55}
        extras={[{ label: 'Ontbijt', price: 12 }]}
        total={67}
      />
    </div>
  )
}