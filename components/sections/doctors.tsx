import { clinic, doctors } from '@/lib/content'
import { InstagramIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { SectionHead } from '@/components/ui'

export function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionHead eyebrow="The doctors" plain="Two specialists, one" accent="standard." />
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {doctors.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.12}>
            <article className="group">
              {/* Portrait slot — monogram placeholder until the clinic shoot */}
              <div className="photo-slot--dark photo-slot flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl">
                <span className="accent-serif text-[7rem] text-champagne-soft/80 transition-transform duration-500 ease-out group-hover:scale-105">
                  {d.name.replace('Dr. ', '').charAt(0)}
                </span>
              </div>
              <h3 className="mt-7 font-display text-2xl tracking-tight text-ink">{d.name}</h3>
              <p className="mt-1 text-sm tracking-wide text-champagne">{d.credentials}</p>
              <p className="accent-serif mt-4 max-w-md text-xl leading-relaxed text-muted">
                {d.philosophy}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12">
        <a
          href={clinic.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-12 cursor-pointer items-center gap-2.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <InstagramIcon className="size-4.5 text-champagne" />
          Follow the studio&apos;s work on Instagram
          <span className="h-px w-8 bg-champagne transition-all duration-300 group-hover:w-14" />
        </a>
      </Reveal>
    </section>
  )
}
