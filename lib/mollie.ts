import { createMollieClient } from '@mollie/api-client'

const mollieApiKey = process.env.MOLLIE_API_KEY

// Changed: Guard Mollie client initialization to avoid build-time crashes when apiKey is missing.
export const mollieClient: ReturnType<typeof createMollieClient> = mollieApiKey
  ? createMollieClient({ apiKey: mollieApiKey })
  : new Proxy({} as ReturnType<typeof createMollieClient>, {
      get() {
        throw new Error('Mollie API key is not configured. Set MOLLIE_API_KEY before using mollieClient.')
      }
    })

export function verifyMollieWebhook(body: string, headers: Headers): boolean {
  const signature = headers.get('mollie-signature')
  const secret = process.env.MOLLIE_WEBHOOK_SECRET as string
  if (!signature || !secret) return false
  return signature === secret && body.length > 0
}