import { clinic } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-hairline-light bg-ink text-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2.5 font-display text-sm tracking-[0.28em]">
              <img
                src="/images/logo.jpg"
                alt=""
                width={320}
                height={320}
                loading="lazy"
                className="size-9 rounded-full bg-white object-cover"
              />
              ZENITH<span className="text-champagne-soft"> · THE DENTAL STUDIO</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-porcelain/60">
              A private dental studio on College Road, {clinic.address.locality} — smile design,
              implants, crowns &amp; bridges and considered everyday care.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-porcelain/70">
              <li><a href="#treatments" className="cursor-pointer transition-colors hover:text-porcelain">Treatments</a></li>
              <li><a href="#doctors" className="cursor-pointer transition-colors hover:text-porcelain">Doctors</a></li>
              <li><a href="#visit" className="cursor-pointer transition-colors hover:text-porcelain">Visit</a></li>
              <li>
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-colors hover:text-porcelain"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-hairline-light pt-6 text-xs text-porcelain/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>
            This site runs entirely in your browser — no cookies, no trackers, and nothing you
            type is stored. Bookings happen on WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  )
}
