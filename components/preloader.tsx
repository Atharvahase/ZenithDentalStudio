'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const luxe = [0.22, 1, 0.36, 1] as const

/** Curtain lifts at this point — hero entrances (INTRO in hero.tsx) sync to it. */
const EXIT_AT_MS = 2600

/**
 * Brand intro modeled on the studio signage: the name "Zenith" appears,
 * the smiling-e draws itself left-to-right in brand teal, the tagline
 * settles in, the name holds for a beat, then the curtain lifts.
 * - Skipped entirely for prefers-reduced-motion users.
 * - `preloader` CSS class carries a no-JS fallback animation (globals.css)
 *   so the curtain can never permanently cover the page.
 * - pointer-events-none: never blocks interaction, even mid-animation.
 */
export function Preloader() {
  const reduced = useReducedMotion()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), EXIT_AT_MS)
    return () => clearTimeout(t)
  }, [])

  if (reduced) return null

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="preloader pointer-events-none fixed inset-0 z-90 flex flex-col items-center justify-center gap-7 bg-porcelain"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: luxe }}
        >
          {/* Z‿nith — the smile draws left to right, as on the signage */}
          <div className="flex items-baseline font-display text-6xl font-medium tracking-tight text-ink sm:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: luxe }}
            >
              Z
            </motion.span>
            <svg
              viewBox="0 0 32 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              className="mx-[0.05em] inline-block h-[0.55em] w-auto self-center text-brand"
            >
              <motion.path
                d="M3 12.5c3.7 6.6 9.1 9.9 13 9.9s9.3-3.3 13-9.9"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: luxe, delay: 0.5 }}
              />
              <motion.path
                d="M18.5 2.2c-3.8.5-5 3.3-3.6 6.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: luxe, delay: 1.35 }}
              />
            </svg>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: luxe, delay: 0.12 }}
            >
              nith
            </motion.span>
          </div>

          <motion.p
            className="font-display text-xs font-medium tracking-[0.34em] text-champagne"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: luxe, delay: 1.6 }}
          >
            THE DENTAL STUDIO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
