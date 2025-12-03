import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Encino - Carpintería Artesanal",
  description:
    "Creando muebles únicos a medida para tu hogar. Más de 15 años de experiencia en carpintería artesanal y diseño de interiores en madera.",
  keywords: "carpintería, muebles a medida, madera, artesanal, restauración, diseño interiores",
  authors: [{ name: "Leandro Tosunian", url: "https://tosunian.dev/" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} antialiased scroll-smooth`}>
      <body className={`${poppins.className} `}>{children}</body>
    </html>
  )
}
