import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProductReviewCardProps {
  product: {
    slug: string
    name: string
    image: string
    rating: number
    reviewCount: number
    price: string
    excerpt: string
  }
}

export function ProductReviewCard({ product }: ProductReviewCardProps) {
  return (
    <Link href={`/reviews/${product.slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 h-full">
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative overflow-hidden aspect-square bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-foreground/70">({product.reviewCount} reviews)</span>
            </div>

            {/* Excerpt */}
            <p className="text-sm text-foreground/80 leading-relaxed text-pretty">{product.excerpt}</p>

            {/* Read More Link */}
            <div className="mt-4 text-sm font-medium text-accent group-hover:underline">Read all reviews →</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
