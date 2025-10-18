export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              ShoeCare<span className="text-accent">Essentials</span>
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Premium shoe care products for the discerning gentleman.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
          <p>© 2025 ShoeCareEssentials.com. All rights reserved.</p>
          <p className="mt-2">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
