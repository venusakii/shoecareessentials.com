import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProduct } from "@/components/featured-product"
import { CareGuide } from "@/components/care-guide"
import { ReviewsSection } from "@/components/reviews-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <FeaturedProduct />
      <CareGuide />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
