"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Mesa de Comedor Rústica",
    description: "Mesa de roble macizo con acabado natural, capacidad para 8 personas",
    image: "/rustic-wooden-dining-table-oak.jpg",
  },
  {
    id: 2,
    title: "Estantería Modular",
    description: "Sistema de estanterías personalizadas en nogal con diseño minimalista",
    image: "/modern-wooden-modular-shelving-walnut.jpg",
  },
  {
    id: 3,
    title: "Escritorio Ejecutivo",
    description: "Escritorio de cerezo con cajones integrados y acabado premium",
    image: "/executive-wooden-desk-cherry-wood.jpg",
  },
  {
    id: 4,
    title: "Sillas Artesanales",
    description: "Juego de 6 sillas de comedor con respaldo ergonómico",
    image: "/handcrafted-wooden-dining-chairs.jpg",
  },
  {
    id: 5,
    title: "Puerta de Entrada",
    description: "Puerta maciza de cedro con tallados decorativos personalizados",
    image: "/carved-wooden-entrance-door-cedar.jpg",
  },
  {
    id: 6,
    title: "Cama King Size",
    description: "Estructura de cama en pino con cabecero diseñado a medida",
    image: "/king-size-wooden-bed-frame-pine.jpg",
  },
]

export function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="trabajos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Trabajos Destacados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada proyecto es una oportunidad para crear algo extraordinario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-primary-foreground text-center">{project.description}</p>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
