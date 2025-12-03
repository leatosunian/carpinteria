export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">Sobre Mí</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Con más de 15 años de experiencia en el arte de la carpintería, he dedicado mi vida a transformar la
                madera en piezas únicas que cuentan historias y embellecen hogares.
              </p>
              <p>
                Mi pasión por la artesanía comenzó en el taller de mi abuelo, donde aprendí que cada pieza de madera
                tiene su propia personalidad y merece ser tratada con respeto y dedicación.
              </p>
              <p>
                Hoy, combino técnicas tradicionales con diseño contemporáneo para crear muebles que no solo son
                funcionales, sino verdaderas obras de arte que perduran en el tiempo.
              </p>
              <p className="font-semibold text-foreground">
                Mi compromiso es simple: calidad excepcional, atención al detalle y satisfacción garantizada.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/Gemini_Generated_Image_mbawgmbawgmbawgm.png"
              alt="Carpintero trabajando"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
