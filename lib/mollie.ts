import { createMollieClient } from '@mollie/api-client'

export const mollieClient = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY as string
})

export function verifyMollieWebhook(body: string, headers: Headers): boolean {
  const signature = headers.get('mollie-signature')
  const secret = process.env.MOLLIE_WEBHOOK_SECRET as string
  if (!signature || !secret) return false
  return signature === secret && body.length > 0
}