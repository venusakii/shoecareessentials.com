"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export function FeaturedProduct() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-lg blur-2xl" />
              <img
                src="/premium-leather-shoe-care-kit-luxury-packaging.jpg"
                alt="Premium Leather Care Kit"
                className="relative w-full rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-accent text-background px-4 py-2 rounded-full font-bold text-sm">
                Best Seller
              </div>
            </div>

            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-xs font-medium text-accent">FEATURED PRODUCT</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Premium Leather Care Kit
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-foreground/70">(247 reviews)</span>
              </div>

              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Our most comprehensive leather care solution. This professional-grade kit includes everything you need
                to clean, condition, and protect your finest leather footwear.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-sm text-foreground/80">Premium leather conditioner with natural oils</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-sm text-foreground/80">Professional horsehair brushes (set of 3)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-sm text-foreground/80">Microfiber polishing cloths and applicators</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs">✓</span>
                  </div>
                  <p className="text-sm text-foreground/80">Water-resistant protective spray</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div></div>
              </div>

              <Button size="lg" className="w-full md:w-auto group" asChild>
                <Link href="/reviews">
                  <Star className="mr-2 h-5 w-5" />
                  Read Reviews
                </Link>
              </Button>

              <p className="text-xs text-foreground/70 mt-4">
                * As an Amazon Associate, we earn from qualifying purchases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
