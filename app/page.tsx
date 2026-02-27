import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import BookingSearchForm from '@/components/BookingSearchForm'
import LocationCard from '@/components/LocationCard'
import { getTranslations } from '@/lib/i18n'
import type { CampingSummary } from '@/types'

const featuredCampings: CampingSummary[] = [
  {
    id: 'camp-1',
    name: 'Duin & Bos Camping',
    slug: 'duin-en-bos',
    description: 'Rustige plekken in de natuur met moderne faciliteiten.',
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop&auto=format,compress'
  },
  {
    id: 'camp-2',
    name: 'Rivierzicht Resort',
    slug: 'rivierzicht',
    description: 'Luxe glamping aan de rivier met privé-sanitair.',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop&auto=format,compress'
  }
]

export default function HomePage() {
  const t = getTranslations('nl')

  return (
    <div className="space-y-16">
      <Hero title={t.home.title} subtitle={t.home.subtitle} />
      <section className="max-w-6xl mx-auto px-4">
        <BookingSearchForm />
      </section>
      <section className="max-w-6xl mx-auto px-4">
        <FeatureGrid />
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">{t.home.featuredCampings}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredCampings.map((camping) => (
            <LocationCard key={camping.id} camping={camping} />
          ))}
        </div>
      </section>
    </div>
  )
}