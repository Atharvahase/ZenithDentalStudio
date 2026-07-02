import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

const spaces = [
  { caption: 'Reception', note: 'Arrive to quiet, not queues', tall: false },
  { caption: 'The private suite', note: 'One patient at a time', tall: true },
  { caption: 'The details', note: 'Materials chosen without compromise', tall: false },
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
                <div
                  className={`photo-slot rounded-2xl ${s.tall ? 'aspect-[3/4]' : 'aspect-[4/5] md:aspect-square'}`}
                />
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
