import { NextResponse } from 'next/server'
import { createBookingDraft } from '@/lib/booking'
import type { BookingRequest } from '@/types'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest
    const draft = await createBookingDraft(body)
    return NextResponse.json({ booking: draft }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}