import type { CampingSummary } from '@/types'

export async function getCampings(): Promise<CampingSummary[]> {
  return [
    {
      id: 'camp-1',
      name: 'Duin & Bos Camping',
      slug: 'duin-en-bos',
      description: 'Rustige plekken in de natuur met moderne faciliteiten.',
      heroImage:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop&auto=format,compress'
    }
  ]
}