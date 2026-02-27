import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY as string)

export async function sendBookingEmail(to: string, subject: string, html: string) {
  await resend.emails.send({
    from: 'CampingOS <no-reply@campingos.com>',
    to,
    subject,
    html
  })
}