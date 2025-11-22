export default function Hero() {
  return (
    <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-b from-secondary to-background py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Transform Your Practice</h1>
        <p className="text-xl text-muted-foreground mb-8 text-balance">
          Join our community of mindful practitioners. Book live classes, follow guided sessions, and find peace within.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
