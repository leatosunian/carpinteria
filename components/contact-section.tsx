"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { Card } from "./ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section
      id="contacto"
      className="py-24 overflow-hidden bg-card bg-opacity-90 rounded-t-3xl"
      style={{
        // Vertical gradient: very light gray (almost white) -> white
        background: 'linear-gradient(to bottom, rgb(231 231 231) 60%, #ffffff 100%)',
        // Strong rounded corners for the top of the section
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
      }}
    >

      <div className="container px-4 mx-auto" >
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-semibold text-4xl md:text-5xl">Contacto</h2>
          <p className="max-w-2xl mx-auto text-lg ">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>

        <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="José López"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="joselopez@hotmail.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+54 9 223 542 3025"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Contame sobre tu proyecto..."
                  rows={5}
                  className="resize-none bg-background"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-semibold text-xl 2xl:text-2xl">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Teléfono</p>
                    <a href="tel:+34600000000" className="transition-colors text-muted-foreground hover:text-primary">
                      +54 9 223 542 3025
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Email</p>
                    <a
                      href="mailto:contacto@carpinteria.com"
                      className="transition-colors text-muted-foreground hover:text-primary"
                    >
                      info@encinocarpinteria.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Taller</p>
                    <p className="text-muted-foreground">
                      Hipólito Yrigoyen 3450
                      <br />
                      Mar del Plata, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-xl 2xl:text-2xl">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-muted">
              <h4 className="mb-2 font-semibold">Horario de Atención</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Lunes - Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
