"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "James Mitchell",
    role: "Luxury Footwear Collector",
    rating: 5,
    text: "Absolutely exceptional products. My Italian leather shoes have never looked better. The conditioning cream is worth every penny.",
    avatar: "/professional-man-portrait.png",
  },
  {
    name: "Robert Chen",
    role: "Fashion Consultant",
    rating: 5,
    text: "I recommend these products to all my clients. The quality is unmatched, and the results speak for themselves.",
    avatar: "/asian-professional-man-portrait.jpg",
  },
  {
    name: "David Thompson",
    role: "Shoe Enthusiast",
    rating: 5,
    text: "The care kit transformed my entire collection. Professional-grade quality at a reasonable price point.",
    avatar: "/confident-businessman.png",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted by Enthusiasts</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See what our customers say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-accent transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
