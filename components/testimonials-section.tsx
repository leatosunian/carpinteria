import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente Residencial",
    image: "/professional-woman-portrait.png",
    text: "El trabajo es excepcional. La mesa que me hizo es la pieza central de mi comedor. La atención al detalle y la calidad de la madera superaron todas mis expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Ruiz",
    role: "Propietario de Restaurante",
    image: "/professional-man-portrait.png",
    text: "Contraté sus servicios para amueblar mi restaurante. El resultado fue impresionante. Muebles duraderos, hermosos y perfectamente adaptados al espacio.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Diseñadora de Interiores",
    image: "/professional-woman-designer.png",
    text: "Trabajo con él regularmente para mis proyectos. Su habilidad para interpretar diseños y ejecutarlos con precisión es incomparable. Altamente recomendado.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Testimonios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Lo que dicen nuestros clientes satisfechos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
