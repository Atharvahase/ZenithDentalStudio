import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

const spaces: { caption: string; note: string; tall: boolean; image?: string; alt?: string }[] = [
  { caption: 'Reception', note: 'Arrive to quiet, not queues', tall: false },
  { caption: 'The private suite', note: 'One patient at a time', tall: true },
  {
    caption: 'Digital-first dentistry',
    note: 'Intraoral scanning, precision without impressions',
    tall: false,
    image: '/images/scanner.jpg',
    alt: 'Intraoral scanner kit at Zenith Dental Studio',
  },
]

/** The space is the proof (Lava's "studio, not clinic"). Asymmetric photo strip. */
export function Studio() {
  return (
    <section id="studio" className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHead eyebrow="The studio" plain="Designed to feel nothing like a" accent="clinic." />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:items-end">
          {spaces.map((s, i) => (
            <Reveal key={s.caption} delay={i * 0.1}>
              <figure>
                {s.image ? (
                  <div className="overflow-hidden rounded-2xl bg-ink/5">
                    <img
                      src={s.image}
                      alt={s.alt ?? s.caption}
                      width={640}
                      height={1136}
                      loading="lazy"
                      className={`w-full object-cover ${s.tall ? 'aspect-[3/4]' : 'aspect-[4/5] md:aspect-square'}`}
                    />
                  </div>
                ) : (
                  <div
                    className={`photo-slot rounded-2xl ${s.tall ? 'aspect-[3/4]' : 'aspect-[4/5] md:aspect-square'}`}
                  />
                )}
                <figcaption className="mt-4">
                  <p className="font-display text-lg tracking-tight text-ink">{s.caption}</p>
                  <p className="text-sm text-muted">{s.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
