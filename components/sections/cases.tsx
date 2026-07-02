import { cases } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'
import { Carousel } from '@/components/carousel'

/**
 * Results gallery. Ships with designed placeholder panels — the PRD requires
 * patient consent for every image, so no stock teeth stand in for real work.
 */
export function Cases() {
  const slides = cases.map((c) => (
    <div key={c.id} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_40%]">
      <div className="photo-slot flex aspect-[4/3] flex-col justify-between rounded-2xl p-6">
        <span className="font-display text-sm tracking-[0.18em] text-porcelain/80 tabular-nums">
          CASE {c.id}
        </span>
        <div>
          <p className="font-display text-xl text-porcelain">{c.treatment}</p>
          <p className="mt-1 text-sm text-porcelain/70">{c.note}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <section id="results" className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHead eyebrow="Results" plain="Work that speaks" accent="softly." />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Consented before &amp; after cases will appear here. Until then, see our latest work
              on{' '}
              <a
                href="https://www.instagram.com/zenithdentalstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer font-medium text-ink underline decoration-champagne underline-offset-4 hover:text-champagne"
              >
                Instagram
              </a>
              .
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-12">
          <Carousel label="Before and after cases" slides={slides} />
        </Reveal>
      </div>
    </section>
  )
}
