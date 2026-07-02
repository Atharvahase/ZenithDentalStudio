import { pillars } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

/** Dark editorial band — the Apa-style three-pillar value proposition. */
export function Pillars() {
  return (
    <section className="bg-ink text-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHead
            eyebrow="Why Zenith"
            plain="Dentistry, treated as"
            accent="craft."
            dark
          />
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="border-t border-hairline-light pt-8">
                <span className="accent-serif text-4xl text-champagne-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-porcelain/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
