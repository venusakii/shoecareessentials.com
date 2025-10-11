"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    title: "Leather Care",
    description: "Premium conditioners, creams, and protectors for all leather types",
    image: "/luxury-leather-shoe-care-cream-and-conditioner.jpg",
    products: "24 Products",
  },
  {
    title: "Cleaning Essentials",
    description: "Professional-grade brushes, cloths, and cleaning solutions",
    image: "/premium-shoe-cleaning-brushes-and-tools.jpg",
    products: "18 Products",
  },
  {
    title: "Polish & Shine",
    description: "High-quality polishes and waxes for a mirror-like finish",
    image: "/luxury-shoe-polish-tins-and-shine-products.jpg",
    products: "16 Products",
  },
  {
    title: "Accessories",
    description: "Shoe trees, horns, and storage solutions for proper care",
    image: "/wooden-shoe-trees-and-luxury-accessories.jpg",
    products: "12 Products",
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Collections</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated categories of premium shoe care products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent" asChild>
                    <Link href="/reviews">View All →</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
