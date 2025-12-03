export function WorkshopSection() {
    return (
        <section id="sobre-mi" className="py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 flex-row-reverse items-center max-w-6xl mx-auto">
                    <div className="order-2">
                        <h2 className="text-4xl md:text-5xl mb-6 font-semibold">Mis Instalaciones</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Mi taller cuenta con todas las herramientas y maquinaria profesional necesarias para realizar cualquier tipo de trabajo en madera: muebles a medida, diseños personalizados, restauraciones y proyectos para hogares o comercios.
                            </p>
                            <p>
                                Cada sector está preparado para trabajar con precisión y eficiencia, permitiéndonos lograr terminaciones de calidad en cada pieza.
                            </p>
                            <p>
                                Además, cuento con un equipo capacitado que garantiza resultados excelentes en el menor tiempo posible.
                            </p>
                            <p className="font-semibold text-foreground">
                                Calidad, compromiso y un servicio totalmente personalizado en cada proyecto.
                            </p>
                        </div>
                    </div>

                    <div className="order-1">
                        <img
                            src="/workshop.jpg"
                            alt="Carpintero trabajando"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
