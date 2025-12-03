import logo from "@/public/logo_encino_white.png"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} width={230} height={50} alt="" />
              {/* <span className="text-xl font-semibold">MAESTRO DE LA MADERA</span> */}
            </div>
            <p className="text-background/70 text-sm sm:text-xs 2xl:text-sm leading-relaxed">
              Creando muebles únicos y duraderos con pasión y dedicación desde hace más de 15 años.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-background/70 hover:text-background transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#trabajos" className="text-background/70 hover:text-background transition-colors">
                  Trabajos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8  text-center text-sm text-background/70">
          <p>
            © {currentYear} Encino Carpintería. Desarrollado por{" "}
            <Link target="_blank" href="https://tosunian.dev" className="hover:text-background ">
              <div className="hover-underline">tosunian.dev</div>
            </Link>
          </p>

        </div>
      </div>
    </footer>
  )
}
