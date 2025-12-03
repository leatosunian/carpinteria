"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative flex items-center justify-center min-h-screen pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/artisan-carpenter-workshop-with-wooden-furniture-w.jpg"
          alt="Taller de carpintería"
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="mb-6  text-5xl font-normal leading-tight md:text-7xl 2xl:text-8xl text-balance">
          Creando muebles únicos a medida para tu hogar
        </h1>
        <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-muted-foreground text-pretty">
          Transforma tus espacios con piezas artesanales de madera diseñadas con pasión y precisión
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Solicitar Presupuesto
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <button
            onClick={() => {
              const element = document.getElementById("trabajos")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="flex items-center gap-2 text-sm transition-colors hover:text-primary group"
          >
            <span className="p-2 transition-colors border rounded-full border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="w-4 h-4" />
            </span>
            Ver Trabajos Realizados
          </button>
        </div>
      </div>
    </section>
  )
}
