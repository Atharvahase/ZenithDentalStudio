'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Reduced-motion handling: the app is wrapped in
 * <MotionConfig reducedMotion="user"> (see lenis-provider.tsx), so Motion
 * instantly completes transform animations for users who prefer reduced
 * motion — no conditional element swapping, no stale SSR inline styles.
 */

const luxe = [0.22, 1, 0.36, 1] as const

/** Fade-up scroll reveal (PRD §7.4): 28px rise, ease-out, triggers once. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduced ? 0 : 0.55, ease: luxe, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Masked line reveal for the hero headline — lines rise out of an overflow
 * clip. The padding/negative-margin pair gives serif descenders (the italic
 * "g") room inside the clip box so they don't get cut off.
 */
export function LineReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <span className={`-mb-[0.18em] block overflow-hidden pb-[0.18em] ${className ?? ''}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: '118%' }}
        animate={{ y: 0 }}
        transition={{ duration: reduced ? 0 : 0.8, ease: luxe, delay: reduced ? 0 : delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** Simple mount fade for hero sub-elements, sequenced after the headline. */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.6, ease: luxe, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
