import { Hammer, Wrench, Ruler, Sparkles } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Muebles a Medida",
    description: "Diseño y fabricación de muebles personalizados adaptados a tus necesidades y espacios específicos",
  },
  {
    icon: Wrench,
    title: "Restauración",
    description: "Devolución de vida a muebles antiguos con técnicas tradicionales y materiales de calidad",
  },
  {
    icon: Ruler,
    title: "Diseño de Interiores",
    description: "Asesoramiento en diseño y planificación de espacios con elementos de madera personalizados",
  },
  {
    icon: Sparkles,
    title: "Acabados Premium",
    description: "Aplicación de barnices, lacas y tintes especiales para protección y belleza duradera",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-semibold">Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones completas en carpintería para tu hogar o negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl mb-3 font-semibold">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
