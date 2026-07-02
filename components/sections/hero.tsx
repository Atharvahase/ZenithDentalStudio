import { hero, waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { LineReveal, FadeIn } from '@/components/reveal'
import { WaButton, GhostLink, Eyebrow } from '@/components/ui'

// Hero entrances are delayed so they play as the Preloader curtain lifts
// (~1.4s). Reveal components drop delays to 0 under reduced motion, where
// the curtain never shows.
const INTRO = 1.15

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-12 lg:gap-8">
        {/* Editorial type block */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <FadeIn delay={INTRO + 0.05}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </FadeIn>
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[1.02] font-normal tracking-tight text-ink">
            {hero.headlineLines.map((line, i) => (
              <LineReveal key={i} delay={INTRO + 0.15 + i * 0.09}>
                {line.plain}
                {line.accent && <span className="accent-serif">{line.accent}</span>}
              </LineReveal>
            ))}
          </h1>
          <FadeIn delay={INTRO + 0.5}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">{hero.sub}</p>
          </FadeIn>
          <FadeIn delay={INTRO + 0.62} className="mt-10 flex flex-wrap items-center gap-6">
            <WaButton href={waLink(waMessages.generic)}>{hero.primaryCta}</WaButton>
            <GhostLink href="#treatments">{hero.secondaryCta}</GhostLink>
          </FadeIn>
        </div>

        <FadeIn delay={INTRO + 0.35} className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-ink/5">
            <img
              src="/images/clinic-facade.jpg"
              alt="Zenith Dental Studio on College Road, Nashik"
              width={640}
              height={1136}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </FadeIn>
      </div>

      {/* Trust strip */}
      <FadeIn delay={INTRO + 0.75}>
        <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
          <dl className="hairline-t grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl tracking-tight text-ink tabular-nums">
                  {s.value}
                </dd>
                <dd className="text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </section>
  )
}
