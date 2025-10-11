"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24 bg-accent text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Subscribe to receive exclusive care tips, product launches, and special offers
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background text-foreground border-background"
            />
            <Button type="submit" variant="secondary" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <p className="text-xs mt-6 opacity-75">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
