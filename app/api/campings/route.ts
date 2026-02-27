import { NextResponse } from 'next/server'
import { getCampings } from '@/lib/utils'

export async function GET() {
  const campings = await getCampings()
  return NextResponse.json({ campings })
}