import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maestro de la Madera - Carpintería Artesanal",
  description:
    "Creando muebles únicos a medida para tu hogar. Más de 15 años de experiencia en carpintería artesanal y diseño de interiores en madera.",
  keywords: "carpintería, muebles a medida, madera, artesanal, restauración, diseño interiores",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
