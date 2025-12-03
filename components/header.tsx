"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/public/logo_encino.png"
import Image from "next/image"

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm border-border">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="flex items-center gap-2">
          <Image src={logo} width={100} height={50} alt=""/>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          <button onClick={() => scrollToSection("inicio")} className="text-sm transition-colors hover:text-primary">
            Inicio
          </button>
          <button onClick={() => scrollToSection("sobre-mi")} className="text-sm transition-colors hover:text-primary">
            Sobre Mí
          </button>
          <button onClick={() => scrollToSection("trabajos")} className="text-sm transition-colors hover:text-primary">
            Trabajos
          </button>
          <button onClick={() => scrollToSection("servicios")} className="text-sm transition-colors hover:text-primary">
            Servicios
          </button>
          <button onClick={() => scrollToSection("contacto")} className="text-sm transition-colors hover:text-primary">
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
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:hidden" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t md:hidden border-border bg-background">
          <div className="container flex flex-col gap-4 px-4 py-4 mx-auto">
            <button
              onClick={() => scrollToSection("inicio")}
              className="py-2 text-left transition-colors hover:text-primary"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="py-2 text-left transition-colors hover:text-primary"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="py-2 text-left transition-colors hover:text-primary"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="py-2 text-left transition-colors hover:text-primary"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="py-2 text-left transition-colors hover:text-primary"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Solicitar Presupuesto
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
