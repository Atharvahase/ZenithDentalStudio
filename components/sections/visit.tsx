import { MapPin, Phone, Clock } from 'lucide-react'
import { clinic } from '@/lib/content'
import { InstagramIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

export function Visit() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`

  return (
    <section id="visit" className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHead eyebrow="Visit" plain="Worth the" accent="trip." />
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-champagne" />
                <div>
                  <h3 className="font-display text-lg tracking-tight text-ink">The studio</h3>
                  <p className="mt-1 leading-relaxed text-muted">
                    {clinic.address.street}
                    <br />
                    {clinic.address.locality} {clinic.address.postalCode}
                  </p>
                  <p className="mt-1 text-sm text-muted/80">{clinic.landmark}</p>
                  <a
                    href={clinic.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block cursor-pointer text-sm font-medium text-ink underline decoration-champagne underline-offset-4 hover:text-champagne"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-champagne" />
                <div>
                  <h3 className="font-display text-lg tracking-tight text-ink">Hours</h3>
                  <dl className="mt-1 space-y-1 text-muted">
                    {clinic.hours.map((h) => (
                      <div key={h.days} className="flex gap-4">
                        <dt className="w-44">{h.days}</dt>
                        <dd className="tabular-nums">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-champagne" />
                <div>
                  <h3 className="font-display text-lg tracking-tight text-ink">Prefer to call?</h3>
                  <a
                    href={`tel:${clinic.phoneHref}`}
                    className="mt-1 inline-block cursor-pointer text-muted transition-colors hover:text-ink"
                  >
                    {clinic.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-4">
                <InstagramIcon className="mt-1 size-5 shrink-0 text-champagne" />
                <div>
                  <h3 className="font-display text-lg tracking-tight text-ink">Instagram</h3>
                  <a
                    href={clinic.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block cursor-pointer text-muted transition-colors hover:text-ink"
                  >
                    @zenithdentalstudio
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="h-full min-h-[360px] overflow-hidden rounded-2xl border border-hairline">
              <iframe
                src={mapSrc}
                title={`Map: ${clinic.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
