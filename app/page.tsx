import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { AboutSection } from "@/components/sections/about-section"
import { ResourcesSection } from "@/components/sections/resources-section"
import { ReservationSection } from "@/components/sections/reservation-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CarouselSection />
        <AboutSection />
        <ResourcesSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
