import { Preloader } from '@/components/preloader'
import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Treatments } from '@/components/sections/treatments'
import { Pillars } from '@/components/sections/pillars'
import { Journey } from '@/components/sections/journey'
import { Cases } from '@/components/sections/cases'
import { Doctors } from '@/components/sections/doctors'
import { Testimonials } from '@/components/sections/testimonials'
import { Studio } from '@/components/sections/studio'
import { Faq } from '@/components/sections/faq'
import { Visit } from '@/components/sections/visit'
import { FinalCta } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="main">
        <Hero />
        <Treatments />
        <Pillars />
        <Journey />
        <Cases />
        <Doctors />
        <Testimonials />
        <Studio />
        <Faq />
        <Visit />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
