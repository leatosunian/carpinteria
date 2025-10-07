"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded" />
          <span className="font-serif text-xl font-semibold">MAESTRO DE LA MADERA</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("inicio")} className="text-sm hover:text-primary transition-colors">
            Inicio
          </button>
          <button onClick={() => scrollToSection("sobre-mi")} className="text-sm hover:text-primary transition-colors">
            Sobre Mí
          </button>
          <button onClick={() => scrollToSection("trabajos")} className="text-sm hover:text-primary transition-colors">
            Trabajos
          </button>
          <button onClick={() => scrollToSection("servicios")} className="text-sm hover:text-primary transition-colors">
            Servicios
          </button>
          <button onClick={() => scrollToSection("contacto")} className="text-sm hover:text-primary transition-colors">
            Contacto
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("contacto")}
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Solicitar Presupuesto
        </Button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Solicitar Presupuesto
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
