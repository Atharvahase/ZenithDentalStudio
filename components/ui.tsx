import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './icons'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function SectionHead({
  eyebrow,
  plain,
  accent,
  after,
  dark = false,
}: {
  eyebrow: string
  plain: string
  accent?: string
  after?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-4xl font-normal tracking-tight text-balance sm:text-5xl ${
          dark ? 'text-porcelain' : 'text-ink'
        }`}
      >
        {plain}
        {accent && <span className="accent-serif"> {accent}</span>}
        {after}
      </h2>
    </div>
  )
}

/**
 * The one primary action, everywhere: a WhatsApp deep link styled to the
 * brand (ink/porcelain) — never green, except the floating bubble (PRD §7.1).
 */
export function WaButton({
  href,
  children,
  variant = 'solid',
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'light'
  className?: string
}) {
  const styles = {
    solid: 'bg-ink text-porcelain hover:bg-ink-soft',
    outline: 'border border-hairline text-ink hover:border-champagne hover:text-champagne',
    light: 'bg-porcelain text-ink hover:bg-white',
  }[variant]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 text-[0.95rem] font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <WhatsAppIcon className="size-4.5 shrink-0" />
      {children}
      <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

/** Quiet secondary action — an anchor link with a sliding underline. */
export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 cursor-pointer items-center gap-2 text-[0.95rem] font-medium text-muted transition-colors hover:text-ink"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  )
}
