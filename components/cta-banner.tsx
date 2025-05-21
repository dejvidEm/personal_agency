"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="relative text-white py-16 overflow-hidden"
    >
      {/* Background image using <Image /> */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.jpg" // <- zmeň na svoju fotku v public/
          alt="Banner pozadie"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Ste pripravení nájsť svoju dokonalú zhodu?</h2>
          <p className="text-lg md:text-xl">
            Či už hľadáte špičkové talenty alebo svoju ďalšiu kariérnu príležitosť, sme tu, aby sme vám pomohli.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Kontaktujte nás ešte dnes</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}