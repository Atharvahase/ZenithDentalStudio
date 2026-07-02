'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

/**
 * Editorial carousel with the "01 / 04" counter pattern from the Aventura
 * and Lava references (PRD §7.4). Drag/swipe on touch, arrows everywhere,
 * fully usable with reduced motion (buttons still navigate).
 */
export function Carousel({
  slides,
  label,
  dark = false,
}: {
  slides: React.ReactNode[]
  label: string
  dark?: boolean
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', skipSnaps: false })
  const [index, setIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const btn = `flex size-12 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 disabled:cursor-default disabled:opacity-35 ${
    dark
      ? 'border-hairline-light text-porcelain hover:border-champagne-soft hover:text-champagne-soft'
      : 'border-hairline text-ink hover:border-champagne hover:text-champagne'
  }`

  return (
    <div role="region" aria-label={label}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y gap-6">{slides}</div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p
          className={`font-display text-sm tracking-[0.18em] tabular-nums ${
            dark ? 'text-porcelain/60' : 'text-muted'
          }`}
        >
          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={index === 0}
            className={btn}
          >
            <ArrowLeft className="size-4.5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => emblaApi?.scrollNext()}
            disabled={index === slides.length - 1}
            className={btn}
          >
            <ArrowRight className="size-4.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
