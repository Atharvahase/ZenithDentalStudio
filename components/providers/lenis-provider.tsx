'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig } from 'motion/react'

/**
 * Lenis smooth scrolling (PRD §7.4 — the Aventura reference feel).
 * Disabled entirely under prefers-reduced-motion; anchor links are routed
 * through Lenis so in-page navigation glides instead of jumping.
 * MotionConfig reducedMotion="user" makes every Motion animation respect
 * the user's OS preference (transforms complete instantly).
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -72 })
      history.pushState(null, '', id)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
