import { clinic } from './content'

/**
 * WhatsApp click-to-chat deep link (PRD §6.2).
 * Opens the WhatsApp app on mobile, WhatsApp Web/Desktop on desktop.
 * No API, no server — the message is composed entirely client-side.
 */
export function waLink(message: string): string {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`
}
