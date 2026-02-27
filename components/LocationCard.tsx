import Link from 'next/link'
import type { CampingSummary } from '@/types'

export default function LocationCard({ camping }: { camping: CampingSummary }) {
  return (
    <article className="border border-gray-200 rounded-xl overflow-hidden">
      <img
        src={`${camping.heroImage}?w=1200&h=800&fit=crop&auto=format,compress`}
        alt={camping.name}
        className="w-full h-48 object-cover"
        width={600}
        height={320}
      />
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">{camping.name}</h3>
        <p className="text-sm text-gray-600">{camping.description}</p>
        <Link
          href={`/${camping.slug}`}
          className="inline-flex text-sm font-medium text-blue-600"
        >
          Bekijk camping →
        </Link>
      </div>
    </article>
  )
}