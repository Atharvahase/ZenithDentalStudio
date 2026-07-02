import { Plus } from 'lucide-react'
import { faqs } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

/** Native <details> accordion — accessible by default, zero JS. */
export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHead eyebrow="Questions" plain="Asked, and" accent="answered." />
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group hairline-t">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg tracking-tight text-ink">{f.q}</h3>
                  <Plus className="size-5 shrink-0 text-champagne transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
