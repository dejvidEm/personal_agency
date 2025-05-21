"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { name: "Domov", href: "/" },
  { name: "O nás", href: "/about" },
  { name: "Služby", href: "/services" },
  { name: "Referencie", href: "/references" },
  { name: "Kontakt", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }

    // Force scroll to top before navigation on mobile
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }

    // Navigate to the page
    router.push(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2" onClick={() => handleNavigation("/")}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-2xl font-bold">
              Agency<span className="text-[#87CEFA]">Force</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "font-medium transition-colors",
                  pathname === item.href ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/contact")
                }}
              >
                Spojme sa!
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium py-2 transition-colors",
                  pathname === item.href ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              <Link
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/contact")
                }}
              >
                Spojme sa!
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
