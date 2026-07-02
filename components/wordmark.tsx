import { SmileE } from './icons'

/**
 * Typographic ZENITH wordmark with the brand's smiling-e glyph in teal.
 * The visual letters are aria-hidden; screen readers get the full name.
 */
export function Wordmark({
  className = '',
  taglineClassName = 'text-champagne',
  showTagline = true,
}: {
  className?: string
  taglineClassName?: string
  showTagline?: boolean
}) {
  return (
    <span
      aria-label="Zenith — The Dental Studio"
      className={`font-display font-medium tracking-[0.28em] ${className}`}
    >
      <span aria-hidden="true">
        Z
        <SmileE className="mx-[0.08em] inline-block h-[0.66em] w-auto translate-y-[0.08em]" />
        NITH
        {showTagline && <span className={taglineClassName}> · THE DENTAL STUDIO</span>}
      </span>
    </span>
  )
}
