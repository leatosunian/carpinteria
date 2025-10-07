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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/artisan-carpenter-workshop-with-wooden-furniture-w.jpg"
          alt="Taller de carpintería"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal mb-6 text-balance leading-tight">
          Creando muebles únicos a medida para tu hogar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          Transforma tus espacios con piezas artesanales de madera diseñadas con pasión y precisión
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Solicitar Presupuesto
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <button
            onClick={() => {
              const element = document.getElementById("trabajos")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
          >
            <span className="border border-primary rounded-full p-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowRight className="h-4 w-4" />
            </span>
            Ver Trabajos Realizados
          </button>
        </div>
      </div>
    </section>
  )
}
