import { WHATSAPP_NUMBER } from '../config/salon'

export interface WhatsAppBookingParams {
  name: string
  phone: string
  service: string
  categoryName?: string
  priceDh?: number
  date: string
  time: string
  note?: string
}

export function validateMoroccanPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\s+/g, '')
  const moroccanRegex = /^(0|\+212)[5-7]\d{8}$/
  return moroccanRegex.test(cleanPhone)
}

export function buildBookingWhatsAppUrl(booking: WhatsAppBookingParams): string {
  const formattedDate = booking.date
    ? new Date(booking.date + 'T00:00:00').toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : booking.date

  const message = [
    `Bold Beauty Lounge — Demande de reservation`,
    ``,
    `Nom : ${booking.name}`,
    `Tel : ${booking.phone}`,
    `Prestation : ${booking.service}${booking.categoryName ? ` / ${booking.categoryName}` : ''}`,
    booking.priceDh ? `Tarif : ${booking.priceDh} DH` : '',
    `Date : ${formattedDate}`,
    `Heure : ${booking.time}`,
    booking.note && booking.note.trim() ? `Note : ${booking.note}` : '',
  ].filter(Boolean).join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
