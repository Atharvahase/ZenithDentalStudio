import { clinic } from '@/lib/content'
import reviewData from '@/lib/reviews.json'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'
import { Carousel } from '@/components/carousel'
import { TimeAgo } from '@/components/time-ago'

type Review = {
  author: string
  rating: number
  text: string
  publishTime: string | null
}

function Stars({ rating }: { rating: number }) {
  return (
    <p
      aria-label={`Rated ${rating} out of 5`}
      className="text-sm tracking-[0.3em] text-champagne-soft"
    >
      {'★'.repeat(Math.round(rating))}
    </p>
  )
}

export function Testimonials() {
  const reviews = reviewData.reviews as Review[]

  const slides = reviews.map((r, i) => (
    <figure key={i} className="min-w-0 flex-[0_0_100%] lg:flex-[0_0_70%]">
      <Stars rating={r.rating} />
      <blockquote className="accent-serif mt-5 max-w-3xl text-3xl leading-snug text-porcelain sm:text-4xl">
        “{r.text}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="flex size-11 items-center justify-center rounded-full border border-hairline-light font-display text-sm text-champagne-soft">
          {r.author.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-medium text-porcelain">{r.author}</p>
          <p className="text-sm text-porcelain/60">
            On Google
            <TimeAgo iso={r.publishTime} className="before:mx-1.5 before:content-['·']" />
          </p>
        </div>
      </figcaption>
    </figure>
  ))

  return (
    <section className="bg-ink text-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHead eyebrow="Patient stories" plain="In their" accent="words." dark />
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={clinic.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-baseline gap-3"
            >
              <span className="font-display text-4xl tracking-tight text-champagne-soft">
                {reviewData.rating.toFixed(1)}★
              </span>
              <span className="text-sm text-porcelain/70 underline decoration-champagne-soft/50 underline-offset-4 transition-colors group-hover:text-porcelain">
                {reviewData.count} reviews on Google · read them all
              </span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-14">
          <Carousel label="Patient reviews from Google" slides={slides} dark />
        </Reveal>
      </div>
    </section>
  )
}
