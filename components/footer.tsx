export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              ShoeCare<span className="text-accent">Essentials</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium shoe care products for the discerning gentleman.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Leather Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Polish & Shine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ShoeCareEssentials.com. All rights reserved.</p>
          <p className="mt-2">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
