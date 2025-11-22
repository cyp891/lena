"use client"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">LFK</span>
          </div>
          <span className="font-bold text-xl text-foreground">Lena-from-Kos</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition">
            About Us
          </a>
          <a href="#gallery" className="text-muted-foreground hover:text-foreground transition">
            Gallery
          </a>
          <a href="#exercise" className="text-muted-foreground hover:text-foreground transition">
            Exercise
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
          <a href="#booking" className="text-muted-foreground hover:text-foreground transition">
            Book Class
          </a>
          <a href="#live-chat" className="text-red-500 hover:text-red-600 transition font-medium">
            Live Chat
          </a>
          <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition font-medium">
            Sign In
          </button>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
