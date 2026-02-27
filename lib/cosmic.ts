import { createBucketClient } from '@cosmicjs/sdk'
import type { CosmicObject } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getCosmicObjects(type: string): Promise<CosmicObject[]> {
  try {
    const response = await cosmic.objects.find({ type }).depth(1)
    return response.objects as CosmicObject[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch Cosmic objects')
  }
}