import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ProductReviewCard } from "@/components/product-review-card"

const productReviews = [
  {
    slug: "leather-honey-conditioner",
    name: "Leather Honey Leather Conditioner",
    image: "https://m.media-amazon.com/images/I/71rmKHGsGFL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Leather-Honey-Conditioner-Furniture-Accessories/dp/B003IS3HV0",
    rating: 4.8,
    reviewCount: 10676,
    price: "$19.99",
    excerpt: "Exceptional nourishment for fine leather. Restores shine and suppleness."
  },
  {
    slug: "crep-protect-spray",
    name: "Crep Protect Shoe Protector Spray",
    image: "https://m.media-amazon.com/images/I/61nNDkemy8L._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Art-Crep-Protect-Spray/dp/B013YRRFJ4",
    rating: 4.5,
    reviewCount: 3975,
    price: "$15.00",
    excerpt: "Ultimate protection against water and stains. A must-have for suede shoes."
  },
  {
    slug: "horsehair-shoe-brush-set",
    name: "Horsehair Shoe Shine Brush Set",
    image: "https://m.media-amazon.com/images/I/81hkYzwgFWL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Horsehair-Neutral-Leather-Cleaning-Sponges/dp/B0D2VKMJ3V",
    rating: 4.7,
    reviewCount: 245,
    price: "$14.99",
    excerpt: "Premium horsehair brushes for shining and cleaning leather shoes."
  },
  {
    slug: "houndsbay-shoe-trees",
    name: "HOUNDSBAY Cedar Shoe Trees",
    image: "https://m.media-amazon.com/images/I/81yg73H6ArL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/HOUNDSBAY-Shaper-Inserts-Holders-Shapers/dp/B0BBXD6D1K",
    rating: 4.8,
    reviewCount: 1876,
    price: "$39.99",
    excerpt: "Aromatic cedar wood maintains shoe shape and absorbs moisture perfectly."
  },
  {
    slug: "chemical-guys-leather-kit",
    name: "Chemical Guys Leather Cleaner & Conditioner Kit",
    image: "https://m.media-amazon.com/images/I/71g5iZEA2yL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    amazonUrl: "https://www.amazon.com/Chemical-Guys-Leather-Cleaner-Conditioner-Protectant-Honey/dp/B001TJ3HUG",
    rating: 4.6,
    reviewCount: 5432,
    price: "$29.99",
    excerpt: "pH-balanced cleaner and conditioner restores and protects leather surfaces."
  },
  {
    slug: "pink-miracle-shoe-cleaner",
    name: "Pink Miracle Shoe Cleaner Kit",
    image: "https://m.media-amazon.com/images/I/71cnlqJqidL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Pink-Miracle-Cleaner-Leather-Sneakers/dp/B01N1ROCE7",
    rating: 4.6,
    reviewCount: 5189,
    price: "$19.97",
    excerpt: "Gentle yet effective formula. Brings white sneakers back to life."
  },
  {
    slug: "scotchgard-water-shield",
    name: "Scotchgard Outdoor Water Shield Spray",
    image: "https://m.media-amazon.com/images/I/61nxMzVvoIL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    amazonUrl: "https://www.amazon.com/Scotchgard-Outdoor-Repellent-Furniture-Protection/dp/B07GSQQTWQ",
    rating: 4.5,
    reviewCount: 1234,
    price: "$20.99",
    excerpt: "Invisible protection for outdoor gear and shoes. Breathable and long-lasting."
  },
  {
    slug: "horsehair-shine-brush-set",
    name: "Medium Horsehair Shine Brush Set",
    image: "https://m.media-amazon.com/images/I/71atmOGQySL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Medium-Horsehair-Long-Handled-Polishing-Storage/dp/B0DQZG6JN4",
    rating: 4.7,
    reviewCount: 456,
    price: "$19.99",
    excerpt: "Professional horsehair brushes for gentle buffing and polishing."
  },
  {
    slug: "leather-repair-kit",
    name: "Leather Repair Kit for Furniture & Shoes",
    image: "https://m.media-amazon.com/images/I/71dhvEVOXhL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Vinyl-Leather-Repair-Kit-Furniture/dp/B07ZN8JK88",
    rating: 4.4,
    reviewCount: 2890,
    price: "$24.99",
    excerpt: "Fix scratches and scuffs professionally with color-matching compounds."
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Customer Reviews</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            See what our customers say about our premium shoe care products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productReviews.map((product) => (
              <ProductReviewCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
