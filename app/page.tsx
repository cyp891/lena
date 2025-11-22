import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
import BookingCalendar from "@/components/booking-calendar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <BookingCalendar />
      <Footer />
    </main>
  )
}
