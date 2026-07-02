'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { SMILE_E } from './icons'

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
              viewBox={SMILE_E.viewBox}
              fill="none"
              strokeLinecap="round"
              className="mx-[0.04em] inline-block h-[0.68em] w-auto translate-y-[0.12em]"
            >
              {/* the letter's grey top appears with the other letters */}
              <motion.path
                d={SMILE_E.top}
                stroke="currentColor"
                strokeWidth={SMILE_E.topStroke}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: luxe, delay: 0.12 }}
              />
              {/* ...then the teal smile draws itself left to right */}
              <motion.path
                d={SMILE_E.smile}
                stroke="currentColor"
                strokeWidth={SMILE_E.smileStroke}
                className="text-brand"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.0, ease: luxe, delay: 0.65 }}
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
