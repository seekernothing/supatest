import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import LogosBand from "@/components/sections/LogosBand"
import Metrics from "@/components/sections/Metrics"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import VideoSection from "@/components/sections/VideoSection"
import Testimonials from "@/components/sections/Testimonials"
import Pricing from "@/components/sections/Pricing"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosBand />
      <Metrics />
      <Features />
      <HowItWorks />
      <VideoSection />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
