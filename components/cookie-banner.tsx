"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-2">Cookie Notice</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze site traffic. This site contains affiliate
              links, and we may earn a commission from qualifying purchases made through links on this site (such as
              Amazon Associates).
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleDecline} variant="outline" size="sm">
              Decline
            </Button>
            <Button onClick={handleAccept} size="sm">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
