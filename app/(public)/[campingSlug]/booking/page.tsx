// app/(public)/[campingSlug]/booking/page.tsx
import BookingSearchForm from '@/components/BookingSearchForm'

export default async function BookingPage({
  params
}: {
  params: Promise<{ campingSlug: string }>
}) {
  const { campingSlug } = await params

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Boeken bij {campingSlug}</h1>
      <BookingSearchForm />
    </div>
  )
}