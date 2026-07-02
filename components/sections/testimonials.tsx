import { testimonials } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'
import { Carousel } from '@/components/carousel'

export function Testimonials() {
  const slides = testimonials.map((t) => (
    <figure key={t.name} className="min-w-0 flex-[0_0_100%] lg:flex-[0_0_70%]">
      <blockquote className="accent-serif max-w-3xl text-3xl leading-snug text-porcelain sm:text-4xl">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="flex size-11 items-center justify-center rounded-full border border-hairline-light font-display text-sm text-champagne-soft">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-medium text-porcelain">{t.name}</p>
          <p className="text-sm text-porcelain/60">{t.context}</p>
        </div>
      </figcaption>
    </figure>
  ))

  return (
    <section className="bg-ink text-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHead eyebrow="Patient stories" plain="In their" accent="words." dark />
        </Reveal>
        <Reveal delay={0.15} className="mt-14">
          <Carousel label="Patient testimonials" slides={slides} dark />
        </Reveal>
      </div>
    </section>
  )
}
