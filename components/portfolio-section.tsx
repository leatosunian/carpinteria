"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const projects = [
  {
    id: 1,
    title: "Mesa de Comedor Rústica",
    description: "Mesa de roble macizo con acabado natural, capacidad para 8 personas",
    image: "/rustic-wooden-dining-table-oak.jpg",
    images: [
      "/rustic-wooden-dining-table-oak.jpg",
      "/m3.jpg",
      "/m2.webp"
    ],
  },
  {
    id: 2,
    title: "Estantería Modular",
    description: "Sistema de estanterías personalizadas en nogal con diseño minimalista",
    image: "/modern-wooden-modular-shelving-walnut.jpg",
    images: ["/modern-wooden-modular-shelving-walnut.jpg", "/em1.webp", "/em2.jpg", "/em3.webp"],
  },
  {
    id: 3,
    title: "Escritorio Ejecutivo",
    description: "Escritorio de cerezo con cajones integrados y acabado premium",
    image: "/executive-wooden-desk-cherry-wood.jpg",
    images: ["/executive-wooden-desk-cherry-wood.jpg", "/esc3.jpg", "/esc2.png"],
  },
  {
    id: 4,
    title: "Sillas Artesanales",
    description: "Juego de 6 sillas de comedor con respaldo ergonómico",
    image: "/handcrafted-wooden-dining-chairs.jpg",
    images: ["/handcrafted-wooden-dining-chairs.jpg", "/silla2.jpg", "/silla3.jpg"],
  },
  {
    id: 5,
    title: "Puerta de Entrada",
    description: "Puerta maciza de cedro con tallados decorativos personalizados",
    image: "/carved-wooden-entrance-door-cedar.jpg",
    images: ["/carved-wooden-entrance-door-cedar.jpg", "/puerta2.jpg", "/puerta3.png"],
  },
  {
    id: 6,
    title: "Cama King Size",
    description: "Estructura de cama en pino con cabecero diseñado a medida",
    image: "/king-size-wooden-bed-frame-pine.jpg",
    images: ["/king-size-wooden-bed-frame-pine.jpg", "/cama2.jpg", "/cama1.webp"],
  },
]

export function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  // Dialog state
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([])
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | null>(null)
  const [startIndex, setStartIndex] = useState(0)

  return (
    <section id="trabajos" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-semibold">Trabajos Destacados</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Cada proyecto es una oportunidad para crear algo extraordinario
          </p>
        </div>

        <div className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                // Open modal with project's images and set the carousel to the first image
                setSelectedProjectImages(project.images ?? [project.image])
                setSelectedProjectTitle(project.title)
                setStartIndex(0)
                setIsOpen(true)
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 ${hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-center text-primary-foreground">Hacé click para ver más</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal gallery */}
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open)
          if (!open) {
            setSelectedProjectImages([])
            setSelectedProjectTitle(null)
            setStartIndex(0)
          }
        }}
      >
        <DialogContent className="w-full max-w-6xl">
          <DialogHeader>
            <DialogTitle>{selectedProjectTitle ?? 'Galería'}</DialogTitle>
          </DialogHeader>

          <div className="w-full">
            {selectedProjectImages.length === 0 ? (
              <div className="p-8 text-center">No images available</div>
            ) : (
              <Carousel setApi={() => { }} opts={{ startIndex }} className="w-full">
                <CarouselPrevious />
                <CarouselNext />
                <CarouselContent className="w-full">
                  {selectedProjectImages.map((src, idx) => (
                    <CarouselItem key={idx} className="flex items-center justify-center">
                      <div className="max-h-[80vh] flex items-center justify-center p-4">
                        <img
                          src={src}
                          alt={`Image ${idx + 1}`}
                          className="max-h-[80vh] max-w-full object-contain"
                          style={{ maxWidth: 'calc(100% - 32px)' }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
