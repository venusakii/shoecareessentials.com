import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Star, ThumbsUp, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Product data (in a real app, this would come from a database)
const products = {
  "leather-honey-conditioner": {
    name: "Leather Honey Leather Conditioner",
    image: "https://m.media-amazon.com/images/I/71rmKHGsGFL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Leather-Honey-Conditioner-Furniture-Accessories/dp/B003IS3HV0",
    rating: 4.8,
    reviewCount: 10676,
    price: "$19.99",
    description:
      "Leather Honey Leather Conditioner, used since 1968, deeply penetrates to restore and protect all types of leather. It rejuvenates dry, cracked leather, restoring softness and preventing further damage while maintaining the leather’s natural look and feel.",
    features: ["Non-toxic formula", "Deep conditioning", "Protects against cracking", "Suitable for all leather types"],
    reviews: [
      {
        author: "John D.",
        rating: 5,
        date: "1 week ago",
        text: "This conditioner worked wonders on my old leather jacket. It’s soft and supple again, no greasy residue. Highly recommend!",
      },
      {
        author: "Emily S.",
        rating: 5,
        date: "2 weeks ago",
        text: "Used it on my leather boots and they look brand new. The formula is easy to apply and smells great.",
      },
      {
        author: "Mark T.",
        rating: 4,
        date: "1 month ago",
        text: "Great product, but it takes some time to absorb fully. My leather shoes are much softer now.",
      },
      {
        author: "Clara H.",
        rating: 5,
        date: "2 months ago",
        text: "Best leather conditioner I’ve tried. My purse and shoes look revitalized, and it’s non-toxic!",
      },
      {
        author: "David L.",
        rating: 5,
        date: "3 months ago",
        text: "Fantastic for car leather seats. Restored the shine and kept them protected for months.",
      },
    ],
  },
  "crep-protect-spray": {
    name: "Crep Protect Shoe Protector Spray",
    image: "https://m.media-amazon.com/images/I/61nNDkemy8L._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Art-Crep-Protect-Spray/dp/B013YRRFJ4",
    rating: 4.5,
    reviewCount: 3975,
    price: "$15.00",
    description:
      "Crep Protect Shoe Protector Spray creates an invisible, breathable barrier that repels water, oil, and stains. Designed for sneakers, suede, nubuck, and canvas, it ensures long-lasting protection without altering the material’s appearance or texture.",
    features: ["Water and stain repellent", "Invisible barrier", "Breathable formula", "Safe for multiple materials"],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        date: "1 week ago",
        text: "Saved my white sneakers from a muddy day! Water just rolls off. A must-have for sneaker lovers.",
      },
      {
        author: "James R.",
        rating: 4,
        date: "2 weeks ago",
        text: "Works well on suede shoes, but needs reapplication after heavy use. Still very effective.",
      },
      {
        author: "Lisa K.",
        rating: 5,
        date: "1 month ago",
        text: "Applied to my canvas sneakers, and they stayed clean through a rainy weekend. Love this spray!",
      },
      {
        author: "Tom B.",
        rating: 4,
        date: "2 months ago",
        text: "Good protection, but the spray can be a bit strong-smelling during application. Results are worth it.",
      },
    ],
  },
  "horsehair-shoe-brush-set": {
    name: "Horsehair Shoe Shine Brush Set",
    image: "https://m.media-amazon.com/images/I/81hkYzwgFWL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Horsehair-Neutral-Leather-Cleaning-Sponges/dp/B0D2VKMJ3V",
    rating: 4.7,
    reviewCount: 245,
    price: "$14.99",
    description:
      "This Horsehair Shoe Shine Brush Set includes premium horsehair brushes for cleaning and polishing leather shoes. The soft bristles gently remove dirt and apply polish, ensuring a brilliant shine without scratching the leather.",
    features: [
      "Soft horsehair bristles",
      "Includes dauber and polishing brushes",
      "Durable wooden handles",
      "Gentle on leather",
    ],
    reviews: [
      {
        author: "Michael P.",
        rating: 5,
        date: "1 week ago",
        text: "These brushes are fantastic! They make polishing my dress shoes so easy, and the shine is amazing.",
      },
      {
        author: "Anna L.",
        rating: 5,
        date: "2 weeks ago",
        text: "High-quality brushes. The horsehair is soft but effective, and the handles feel sturdy.",
      },
      {
        author: "Robert C.",
        rating: 4,
        date: "1 month ago",
        text: "Great for the price, but the smaller brush could be a bit larger for faster polishing.",
      },
      {
        author: "Sophie W.",
        rating: 5,
        date: "2 months ago",
        text: "Perfect for my leather boots. The brushes are gentle and bring out a great shine.",
      },
    ],
  },
  "houndsbay-shoe-trees": {
    name: "HOUNDSBAY Cedar Shoe Trees",
    image: "https://m.media-amazon.com/images/I/81yg73H6ArL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/HOUNDSBAY-Shaper-Inserts-Holders-Shapers/dp/B0BBXD6D1K",
    rating: 4.8,
    reviewCount: 1876,
    price: "$39.99",
    description:
      "HOUNDSBAY Cedar Shoe Trees are crafted from aromatic cedar wood to maintain shoe shape, absorb moisture, and naturally deodorize. The adjustable split-toe design fits a wide range of shoe sizes, extending the life of your footwear.",
    features: ["Aromatic cedar wood", "Adjustable split-toe design", "Moisture absorption", "Natural deodorizer"],
    reviews: [
      {
        author: "William R.",
        rating: 5,
        date: "1 week ago",
        text: "These shoe trees are a game-changer. My dress shoes stay in perfect shape, and the cedar smell is great.",
      },
      {
        author: "Emma T.",
        rating: 5,
        date: "2 weeks ago",
        text: "Really high-quality cedar. They fit my shoes perfectly and keep them fresh.",
      },
      {
        author: "George S.",
        rating: 4,
        date: "1 month ago",
        text: "Great product, but make sure to check sizing for wider shoes. Otherwise, excellent quality.",
      },
      {
        author: "Laura M.",
        rating: 5,
        date: "2 months ago",
        text: "Love these! My leather shoes look better and last longer with these shoe trees.",
      },
    ],
  },
  "chemical-guys-leather-kit": {
    name: "Chemical Guys Leather Cleaner & Conditioner Kit",
    image: "https://m.media-amazon.com/images/I/71g5iZEA2yL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    amazonUrl: "https://www.amazon.com/Chemical-Guys-Leather-Cleaner-Conditioner-Protectant-Honey/dp/B001TJ3HUG",
    rating: 4.6,
    reviewCount: 5432,
    price: "$29.99",
    description:
      "The Chemical Guys Leather Cleaner & Conditioner Kit is a pH-balanced solution for cleaning and conditioning leather surfaces. It gently removes dirt and stains while restoring softness and protecting against UV damage and cracking.",
    features: ["pH-balanced cleaner", "UV protection", "Restores softness", "Safe for all leather"],
    reviews: [
      {
        author: "Daniel K.",
        rating: 5,
        date: "1 week ago",
        text: "Perfect for my car’s leather seats. Cleans well and leaves them soft and protected.",
      },
      {
        author: "Michelle B.",
        rating: 4,
        date: "2 weeks ago",
        text: "Works great, but the conditioner takes a bit to absorb. My leather shoes look fantastic now.",
      },
      {
        author: "Ryan T.",
        rating: 5,
        date: "1 month ago",
        text: "Used this on my leather jacket and shoes. Both look revitalized and feel softer.",
      },
      {
        author: "Sophia L.",
        rating: 5,
        date: "2 months ago",
        text: "Amazing kit! Easy to use and makes leather look brand new. Highly recommend.",
      },
    ],
  },
  "pink-miracle-shoe-cleaner": {
    name: "Pink Miracle Shoe Cleaner Kit",
    image: "https://m.media-amazon.com/images/I/71cnlqJqidL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Pink-Miracle-Cleaner-Leather-Sneakers/dp/B01N1ROCE7",
    rating: 4.6,
    reviewCount: 5189,
    price: "$19.97",
    description:
      "Pink Miracle Shoe Cleaner Kit is a legendary cleaner for white shoes, leather, and sneakers. The gentle yet effective formula, paired with a premium brush, removes dirt and stains, restoring shoes to their original brightness.",
    features: ["Gentle formula", "Includes cleaning brush", "Safe for leather and sneakers", "Whitening power"],
    reviews: [
      {
        author: "Tyler J.",
        rating: 5,
        date: "1 week ago",
        text: "My white sneakers look brand new again! The brush and cleaner work perfectly together.",
      },
      {
        author: "Ashley M.",
        rating: 5,
        date: "2 weeks ago",
        text: "Incredible results on my leather sneakers. They’re bright white again with minimal effort.",
      },
      {
        author: "Brandon C.",
        rating: 4,
        date: "1 month ago",
        text: "Great for light stains, but heavy marks need extra scrubbing. Still a solid product.",
      },
      {
        author: "Megan F.",
        rating: 5,
        date: "2 months ago",
        text: "Best sneaker cleaner I’ve used. Works on leather, canvas, and more. Highly recommend!",
      },
    ],
  },
  "scotchgard-water-shield": {
    name: "Scotchgard Outdoor Water Shield Spray",
    image: "https://m.media-amazon.com/images/I/61nxMzVvoIL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    amazonUrl: "https://www.amazon.com/Scotchgard-Outdoor-Repellent-Furniture-Protection/dp/B07GSQQTWQ",
    rating: 4.5,
    reviewCount: 1234,
    price: "$20.99",
    description:
      "Scotchgard Outdoor Water Shield Spray provides heavy-duty water repellency for outdoor gear, shoes, and fabrics. It creates a durable, breathable barrier that protects against water and stains without affecting fabric breathability.",
    features: ["Water repellent", "Breathable protection", "Safe for multiple fabrics", "Odorless when dry"],
    reviews: [
      {
        author: "Daniel W.",
        rating: 5,
        date: "1 week ago",
        text: "Used on my canvas sneakers and outdoor gear. Water beads right off, and no stains!",
      },
      {
        author: "Olivia H.",
        rating: 4,
        date: "2 weeks ago",
        text: "Effective protection, but reapply monthly for best results. Works well on my boots.",
      },
      {
        author: "Ryan M.",
        rating: 5,
        date: "1 month ago",
        text: "Perfect for rainy weather. My shoes and backpack stay dry and clean.",
      },
      {
        author: "Sophia T.",
        rating: 4,
        date: "2 months ago",
        text: "Good waterproofing for outdoor gear. Easy to apply, but the spray smell is strong initially.",
      },
    ],
  },
  "horsehair-shine-brush-set": {
    name: "Medium Horsehair Shine Brush Set",
    image: "https://m.media-amazon.com/images/I/71atmOGQySL._AC_SY695_.jpg",
    amazonUrl: "https://www.amazon.com/Medium-Horsehair-Long-Handled-Polishing-Storage/dp/B0DQZG6JN4",
    rating: 4.7,
    reviewCount: 456,
    price: "$19.99",
    description:
      "The Medium Horsehair Shine Brush Set includes long-handled horsehair brushes for professional shoe polishing. Soft bristles ensure gentle buffing, and the included storage case keeps tools organized for home or travel use.",
    features: ["Long-handled brushes", "Soft horsehair bristles", "Includes storage case", "Gentle polishing"],
    reviews: [
      {
        author: "Charles B.",
        rating: 5,
        date: "1 week ago",
        text: "These brushes are top-notch. They make polishing my dress shoes quick and easy with a great shine.",
      },
      {
        author: "Victoria L.",
        rating: 5,
        date: "2 weeks ago",
        text: "Love the storage case! The brushes are high quality and perfect for my leather shoes.",
      },
      {
        author: "Edward K.",
        rating: 4,
        date: "1 month ago",
        text: "Great brushes, but the case feels a bit flimsy. The horsehair is excellent, though.",
      },
      {
        author: "Grace M.",
        rating: 5,
        date: "2 months ago",
        text: "Professional results at home. These brushes are a must for anyone serious about shoe care.",
      },
    ],
  },
  "leather-repair-kit": {
    name: "Leather Repair Kit for Furniture & Shoes",
    image: "https://m.media-amazon.com/images/I/71dhvEVOXhL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Vinyl-Leather-Repair-Kit-Furniture/dp/B07ZN8JK88",
    rating: 4.4,
    reviewCount: 2890,
    price: "$24.99",
    description:
      "This Leather Repair Kit includes color-matching compounds, applicators, and a finishing solution to fix scratches, scuffs, and tears on leather and vinyl surfaces. Ideal for shoes, furniture, and car interiors.",
    features: ["Color-matching compounds", "Easy to use", "Repairs scratches and tears", "Works on leather and vinyl"],
    reviews: [
      {
        author: "Matthew S.",
        rating: 5,
        date: "1 week ago",
        text: "Fixed a tear on my leather couch perfectly. The color match was spot-on, and it’s invisible now!",
      },
      {
        author: "Amanda R.",
        rating: 4,
        date: "2 weeks ago",
        text: "Worked well on my leather shoes, but color matching takes practice. Good results overall.",
      },
      {
        author: "Joseph T.",
        rating: 5,
        date: "1 month ago",
        text: "Saved my favorite boots from a bad scratch. The repair is seamless, and the kit is easy to use.",
      },
      {
        author: "Elizabeth W.",
        rating: 5,
        date: "2 months ago",
        text: "Great for small repairs. The instructions are clear, and the results are professional-grade.",
      },
    ],
  },
}

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug]

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Product Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on Amazon
                </a>
              </Button>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {product.reviews.map((review: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold mb-1">{review.author}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful
                      </Button>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
