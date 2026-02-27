import { NextResponse } from 'next/server'
import { verifyMollieWebhook } from '@/lib/mollie'

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const isValid = verifyMollieWebhook(body, request.headers)

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}