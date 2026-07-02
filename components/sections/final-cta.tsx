import { finalCta, waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { Reveal } from '@/components/reveal'
import { Eyebrow, WaButton } from '@/components/ui'
import { Composer } from './composer'

/** Closing band: the promise restated + the booking composer (PRD §6.1–6.2). */
export function FinalCta() {
  return (
    <section id="book" className="bg-ink text-porcelain">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Begin</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
              {finalCta.headlinePlain}
              <span className="accent-serif text-champagne-soft">{finalCta.headlineAccent}</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-porcelain/70">{finalCta.sub}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9">
            <WaButton href={waLink(waMessages.generic)} variant="light">
              {finalCta.cta}
            </WaButton>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="lg:col-span-6">
          <Composer />
        </Reveal>
      </div>
    </section>
  )
}
