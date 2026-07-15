/**
 * Refreshes lib/reviews.json with the latest Google reviews for the clinic.
 *
 * Uses the Google Places Details API (reviews_sort=newest) with the key from
 * GOOGLE_PLACES_API_KEY. A Google Maps Platform key gets a substantial free
 * monthly credit; this script's handful of calls per month costs nothing.
 *
 * Without the key set, it exits quietly so builds and the weekly workflow
 * never break: the site keeps serving the existing reviews.json.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const KEY = process.env.GOOGLE_PLACES_API_KEY
const PLACE_ID = 'ChIJLwgm0XXr3TsR3_IVZqR5gyU' // Zenith The Dental Studio, College Road, Nashik
const OUT = new URL('../lib/reviews.json', import.meta.url)

if (!KEY) {
  console.log('GOOGLE_PLACES_API_KEY not set; keeping existing lib/reviews.json')
  process.exit(0)
}

const url =
  `https://maps.googleapis.com/maps/api/place/details/json` +
  `?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${KEY}`

const res = await fetch(url)
if (!res.ok) throw new Error(`Places API HTTP ${res.status}`)
const data = await res.json()
if (data.status !== 'OK') throw new Error(`Places API status ${data.status}: ${data.error_message ?? ''}`)

const r = data.result
const reviews = (r.reviews ?? [])
  .filter((v) => v.text?.trim())
  .slice(0, 5)
  .map((v) => ({
    author: v.author_name ?? 'Google review',
    rating: v.rating ?? 5,
    text: v.text.trim().slice(0, 360),
    publishTime: v.time ? new Date(v.time * 1000).toISOString() : null,
  }))

if (reviews.length === 0) {
  console.log('API returned no text reviews; keeping existing lib/reviews.json')
  process.exit(0)
}

const next = {
  rating: r.rating ?? 5,
  count: r.user_ratings_total ?? 0,
  source: 'Google',
  fetchedAt: new Date().toISOString(),
  reviews,
}

const prev = readFileSync(OUT, 'utf8')
const nextStr = JSON.stringify(next, null, 2) + '\n'
if (prev === nextStr) {
  console.log('Reviews unchanged.')
} else {
  writeFileSync(OUT, nextStr)
  console.log(`Updated lib/reviews.json: ${reviews.length} reviews, rating ${next.rating} (${next.count}).`)
}
