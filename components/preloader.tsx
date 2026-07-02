'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const luxe = [0.22, 1, 0.36, 1] as const

/**
 * Brand intro: porcelain curtain with the Zenith logo, lifted after ~1.4s.
 * - Skipped entirely for prefers-reduced-motion users.
 * - `preloader` CSS class carries a no-JS fallback animation (globals.css)
 *   so the curtain can never permanently cover the page.
 * - pointer-events-none: never blocks interaction, even mid-animation.
 */
export function Preloader() {
  const reduced = useReducedMotion()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400)
    return () => clearTimeout(t)
  }, [])

  if (reduced) return null

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="preloader pointer-events-none fixed inset-0 z-90 flex flex-col items-center justify-center gap-6 bg-porcelain"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: luxe }}
        >
          <motion.img
            src="/images/logo.jpg"
            alt=""
            width={320}
            height={320}
            className="size-24 rounded-full bg-white object-cover shadow-[0_24px_48px_-24px_rgb(28_25_23/0.25)]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: luxe }}
          />
          <motion.p
            className="font-display text-xs font-medium tracking-[0.32em] text-ink"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: luxe, delay: 0.25 }}
          >
            ZENITH<span className="text-champagne"> · THE DENTAL STUDIO</span>
          </motion.p>
          <motion.span
            className="h-px bg-champagne"
            initial={{ width: 0 }}
            animate={{ width: 88 }}
            transition={{ duration: 0.9, ease: luxe, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
