/**
 * The brand's smiling "e", faithful to the Zenith logo: the letter's
 * crossbar and upper bowl stay in the text colour, and only the bottom
 * stroke is the teal smile — a wide arc with curled tips at both ends.
 */
/**
 * The brand's smiling "e", used ONLY by the loading intro (Preloader).
 * Geometry traced from the logo's pixels (canvas segmentation + run-length
 * measurement, 2026-07-02): a half-circle arc whose limbs reach down to
 * crossbar level; the crossbar floats free mid-counter and merges with the
 * right limb; the teal smile's tips curl inward (caps at top, elbows at the
 * outer-bottom), teal stroke 25% heavier than the grey.
 */
export const SMILE_E = {
  viewBox: '0 0 36 36',
  topStroke: 3.2,
  smileStroke: 3.8,
  // grey uses flat (butt) terminals like the logo; teal uses round caps
  top: 'M3.4 17.4A15.4 15.4 0 0 1 34.2 17.4M16.8 15.6H35',
  smile: 'M6.4 23.5A2.55 2.55 0 1 0 2.9 27.2A21.8 21.8 0 0 0 33.1 27.2A2.55 2.55 0 1 0 29.6 23.5',
}

/** Instagram glyph — lucide-react v1 removed brand icons, so it lives here. */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

/** Official WhatsApp glyph — used on CTAs and the floating bubble (PRD §7.1). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.23 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}
