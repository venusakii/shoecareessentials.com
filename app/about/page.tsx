import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-balance">About Us</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Discover our passion for premium shoe care
          </p>
        </div>
        <AboutSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
