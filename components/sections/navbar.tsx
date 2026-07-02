'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clinic, waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/icons'
import { Wordmark } from '@/components/wordmark'

const links = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#results', label: 'Results' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#studio', label: 'Studio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#visit', label: 'Visit' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-hairline bg-porcelain/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/images/logo.jpg"
            alt=""
            width={320}
            height={320}
            className="size-9 rounded-full border border-hairline bg-white object-cover"
          />
          <Wordmark
            className="text-sm text-ink"
            taglineClassName="hidden text-champagne sm:inline"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink(waMessages.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 cursor-pointer items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-porcelain transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Book a consultation
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-porcelain px-5 pb-10 pt-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl tracking-tight text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(waMessages.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-ink px-7 font-medium text-porcelain"
          >
            <WhatsAppIcon className="size-4.5" />
            Book a consultation on WhatsApp
          </a>
          <p className="mt-4 text-center text-sm text-muted">{clinic.phoneDisplay}</p>
        </div>
      )}
    </header>
  )
}
