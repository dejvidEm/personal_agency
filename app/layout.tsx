import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AgencyForce | Prepojíme firmy s ochotnými rukami.",
  description: "Spájame špičkové talenty s poprednými spoločnosťami naprieč rôznymi odvetviami.",
    generator: 'v0.dev',
    openGraph: {
      title: "AgencyForce | Prepojíme firmy s ochotnými rukami.",
      siteName: "AgencyForce",
      images: [
        {
          url: "/business-handshake.jpg", // alebo absolútna URL
          width: 1200,
          height: 630,
          alt: "Popis obrázka",
        },
      ],
      locale: "sk_SK",
      type: "website",
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
