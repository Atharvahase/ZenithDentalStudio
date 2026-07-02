import { ArrowUpRight } from 'lucide-react'
import { treatments, waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

export function Treatments() {
  return (
    <section id="treatments" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionHead
          eyebrow="Treatments"
          plain="A short menu,"
          accent="edited"
          after=" with intent."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t, i) => (
          <Reveal key={t.id} delay={(i % 3) * 0.08}>
            <a
              href={waLink(waMessages.treatment(t.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-hairline bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:shadow-[0_24px_48px_-24px_rgb(28_25_23/0.18)]"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm tracking-[0.18em] text-champagne tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight className="size-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-champagne" />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">{t.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{t.promise}</p>
              </div>
              <p className="mt-8 text-sm font-medium text-ink">
                Enquire on WhatsApp
                <span className="mt-1 block h-px w-8 bg-champagne transition-all duration-300 group-hover:w-16" />
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
