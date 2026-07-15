'use client'

import { useState } from 'react'
import { treatments, waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/icons'

/**
 * Booking composer (PRD §6.2): composes a structured WhatsApp message
 * entirely in browser memory. Nothing is stored, transmitted or persisted —
 * no cookies, no localStorage, no analytics payloads with PII.
 */
export function Composer() {
  const [name, setName] = useState('')
  const [treatment, setTreatment] = useState('Not sure yet, advise me')
  const [preference, setPreference] = useState('')
  const [touched, setTouched] = useState(false)

  const nameValid = name.trim().length > 0
  const showError = touched && !nameValid

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nameValid) {
      setTouched(true)
      return
    }
    const msg = waMessages.composer(name.trim(), treatment, preference.trim() || 'Flexible')
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
  }

  const field =
    'mt-2 w-full rounded-xl border bg-porcelain px-4 py-3.5 text-ink placeholder:text-muted/60 transition-colors focus:border-champagne focus:outline-none'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-surface p-7 text-ink shadow-[0_32px_64px_-32px_rgb(0_0_0/0.4)] sm:p-9"
    >
      <p className="font-display text-xl tracking-tight">Compose your booking message</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        Three details, one tap. We reply personally on WhatsApp.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="composer-name" className="text-sm font-medium">
            Your name <span aria-hidden="true" className="text-champagne">*</span>
          </label>
          <input
            id="composer-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="e.g. Aditi Sharma"
            aria-invalid={showError}
            aria-describedby={showError ? 'composer-name-error' : undefined}
            className={`${field} ${showError ? 'border-red-700' : 'border-hairline'}`}
          />
          {showError && (
            <p id="composer-name-error" role="alert" className="mt-2 text-sm text-red-700">
              Please add your name so we know who to greet.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="composer-treatment" className="text-sm font-medium">
            Treatment of interest
          </label>
          <select
            id="composer-treatment"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className={`${field} cursor-pointer appearance-none border-hairline`}
          >
            <option>Not sure yet, advise me</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="composer-time" className="text-sm font-medium">
            Preferred day &amp; time <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="composer-time"
            type="text"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            placeholder="e.g. Saturday morning"
            className={`${field} border-hairline`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 flex min-h-13 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-ink px-7 font-medium text-porcelain transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft"
      >
        <WhatsAppIcon className="size-4.5" />
        Continue on WhatsApp
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        Opens WhatsApp with your message pre-filled. Nothing is stored on this website.
      </p>
    </form>
  )
}
