export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">About Serenity</h4>
            <p className="text-sm opacity-75">Transform your practice with our community of mindful practitioners.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Classes</h4>
            <ul className="text-sm opacity-75 space-y-2">
              <li>
                <a href="#" className="hover:opacity-100">
                  Hatha
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Vinyasa
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Yin
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Meditation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="text-sm opacity-75 space-y-2">
              <li>Email: hello@kos.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Studio: Lena Yoga</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="text-sm opacity-75 space-y-2">
              <li>
                <a href="#" className="hover:opacity-100">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Lena Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
