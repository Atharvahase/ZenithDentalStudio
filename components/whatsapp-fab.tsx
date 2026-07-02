'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { waMessages } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from './icons'

/**
 * Floating WhatsApp bubble (PRD §6.1) — the one place official WhatsApp
 * green is used, for instant recognition. Appears after ~600px of scroll.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink(waMessages.generic)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={reduced ? false : { opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-5 z-60 flex size-14 cursor-pointer items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_16px_32px_-8px_rgb(37_211_102/0.5)] transition-colors hover:bg-whatsapp-deep"
          style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
        >
          <WhatsAppIcon className="size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
