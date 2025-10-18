export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Craftsmanship Meets Care</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-foreground leading-relaxed">
              At ShoeCareEssentials, we believe that exceptional footwear deserves exceptional care. Our carefully
              curated selection of premium products ensures your shoes maintain their elegance and longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Premium Quality</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Only the finest ingredients and materials for superior shoe care results.
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Expert Guidance</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Comprehensive care guides and tutorials from footwear specialists.
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Trusted Results</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Proven formulas trusted by professionals and enthusiasts worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
