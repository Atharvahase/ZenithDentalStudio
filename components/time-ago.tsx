'use client'

import { useEffect, useState } from 'react'

/** "today" / "1 day ago" / "3 weeks ago" from an ISO timestamp. */
export function timeAgo(iso: string, now = new Date()): string {
  const days = Math.floor((now.getTime() - new Date(iso).getTime()) / 86_400_000)
  if (days <= 0) return 'today'
  if (days === 1) return '1 day ago'
  if (days < 7) return `${days} days ago`
  const weeks = Math.floor(days / 7)
  if (weeks === 1) return '1 week ago'
  if (days < 30) return `${weeks} weeks ago`
  const months = Math.floor(days / 30)
  if (months === 1) return '1 month ago'
  if (days < 365) return `${months} months ago`
  const years = Math.floor(days / 365)
  return years === 1 ? '1 year ago' : `${years} years ago`
}

/**
 * Renders the relative age of a review. Computed after mount so the static
 * HTML never bakes in a stale "today" (the site can sit on the CDN for
 * weeks between builds).
 */
export function TimeAgo({ iso, className }: { iso: string | null; className?: string }) {
  const [label, setLabel] = useState<string | null>(null)
  useEffect(() => {
    if (iso) setLabel(timeAgo(iso))
  }, [iso])
  if (!label) return null
  return <span className={className}>{label}</span>
}
