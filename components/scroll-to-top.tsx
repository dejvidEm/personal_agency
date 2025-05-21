"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const prevPathRef = useRef<string | null>(null)

  useEffect(() => {
    // Only scroll to top if the path has changed
    if (prevPathRef.current !== pathname) {
      // Use setTimeout to ensure this runs after the DOM update
      setTimeout(() => {
        // Try multiple scroll methods for maximum compatibility
        if (typeof window !== "undefined") {
          // Method 1: window.scrollTo
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          })

          // Method 2: document.documentElement
          if (document.documentElement) {
            document.documentElement.scrollTop = 0
          }

          // Method 3: document.body
          if (document.body) {
            document.body.scrollTop = 0
          }

          // Method 4: For some mobile browsers
          if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) {
            window.scrollTo(0, 0)
          }
        }
      }, 0)
    }

    prevPathRef.current = pathname
  }, [pathname, searchParams])

  return null
}
