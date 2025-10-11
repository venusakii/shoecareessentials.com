const guides = [
  {
    step: "01",
    title: "Clean",
    description: "Remove dirt and debris with a soft brush and gentle cleaner",
    image: "/cleaning-leather-shoes-with-brush.jpg",
  },
  {
    step: "02",
    title: "Condition",
    description: "Apply premium conditioner to nourish and restore leather",
    image: "/applying-leather-conditioner-to-shoes.jpg",
  },
  {
    step: "03",
    title: "Polish",
    description: "Buff to a brilliant shine with quality polish and cloth",
    image: "/polishing-leather-shoes-to-shine.jpg",
  },
  {
    step: "04",
    title: "Protect",
    description: "Seal with water-resistant spray for lasting protection",
    image: "/applying-protective-spray-to-shoes.jpg",
  },
]

export function CareGuide() {
  return (
    <section id="care-guide" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">The Perfect Care Routine</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow our expert four-step process for professional-quality results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                <img
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center font-bold">
                  {guide.step}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{guide.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
