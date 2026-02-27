import { addDays, differenceInDays } from 'date-fns'
import type { BookingDraft, BookingRequest } from '@/types'

export async function createBookingDraft(request: BookingRequest): Promise<BookingDraft> {
  const nights = differenceInDays(new Date(request.departureDate), new Date(request.arrivalDate))
  const baseTotal = request.basePrice * nights
  const total = baseTotal + request.addOns.reduce((sum, addOn) => sum + addOn.price, 0)

  return {
    id: `draft-${Date.now()}`,
    status: 'PENDING',
    arrivalDate: request.arrivalDate,
    departureDate: request.departureDate,
    totalPrice: total,
    expiresAt: addDays(new Date(), 1).toISOString()
  }
}