import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
//import BookingCalendar from "@/components/booking-calendar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CalendlyEmbed from "../components/calendly-embed"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      {/* <BookingCalendar /> */}
      <CalendlyEmbed url="https://calendly.com/lenaelena" />
      <Footer />
    </main>
  )
}
