import { journey, waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { Reveal } from '@/components/reveal'
import { SectionHead, WaButton } from '@/components/ui'

/** The three-step patient journey — doubles as the WhatsApp-first explainer (PRD §6.1 3b). */
export function Journey() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionHead eyebrow="How it works" plain="Three steps, no" accent="friction." />
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {journey.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.1}>
            <div className="hairline-t pt-8">
              <span className="accent-serif text-5xl text-champagne">{s.step}</span>
              <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25} className="mt-14">
        <WaButton href={waLink(waMessages.generic)}>Start with step one</WaButton>
      </Reveal>
    </section>
  )
}
