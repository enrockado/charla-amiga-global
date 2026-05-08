import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Home,
  Stethoscope,
  Users,
  ClipboardList,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salud Mental y Discapacidad en CABA" },
      {
        name: "description",
        content:
          "Asociación Civil. Acompañamiento Terapéutico (AT) y Psicoterapia domiciliaria en CABA. Atención en salud mental, discapacidad, consumos y adicciones.",
      },
      { property: "og:title", content: "Salud Mental y Discapacidad en CABA" },
      {
        property: "og:description",
        content:
          "Acompañamiento Terapéutico y Psicoterapia con atención domiciliaria. Trabajamos con obras sociales y prestaciones en discapacidad.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "541137914461";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header con Logo extra grande */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-full items-center justify-between px-12 py-10">
          <a href="#top" className="flex items-center">
            <img src={logoImg} alt="ACAPIA" className="h-72 w-72 object-contain" />
          </a>
          
          <nav className="hidden gap-14 text-3xl font-black text-foreground md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          <Button asChild className="rounded-full text-2xl font-black px-12 py-8 h-auto">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: `url(${heroImg})` }} 
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Heart className="h-3.5 w-3.5 text-primary" />
              Asociación Civil · CABA
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Atención en{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                Salud Mental y Discapacidad
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Acompañamiento Terapéutico (AT) y Psicoterapia con atención
              domiciliaria y ambulatoria en consultorio propio, con respaldo
              profesional en la Ciudad Autónoma de Buenos Aires.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)]">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  <Phone className="h-4 w-4" /> Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} className="relative w-full rounded-3xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Cuidado clínico y cercano</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Somos una asociación civil orientada a la atención en salud mental,
            discapacidad y problemáticas vinculadas a consumos. Brindamos prestaciones 
            con enfoque clínico comunitario.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <Home className="mx-auto h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Acompañamiento Terapéutico</h3>
              <p className="text-muted-foreground mt-2">AT domiciliario sostenido y planificado.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <Heart className="mx-auto h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Psicoterapia</h3>
              <p className="text-muted-foreground mt-2">Espacios individuales adaptados.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <CheckCircle2 className="mx-auto h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Obras Sociales</h3>
              <p className="text-muted-foreground mt-2">Prestaciones en discapacidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="py-24 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl font-bold">Modalidad de Trabajo</h2>
          <p className="text-xl text-muted-foreground">
            Trabajamos de forma interdisciplinaria, coordinando con los equipos tratantes 
            y las familias para asegurar una red de contención efectiva.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="bg-primary text-primary-foreground py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">Cómo empezamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xl mb-4">1</div>
              <p className="text-xl">Entrevista inicial</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xl mb-4">2</div>
              <p className="text-xl">Planificación clínica</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xl mb-4">3</div>
              <p className="text-xl">Inicio del tratamiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contactanos</h2>
        <p className="text-xl mb-8">Estamos para acompañarte en el proceso.</p>
        <Button asChild size="lg" className="rounded-full px-12 py-8 text-2xl h-auto">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
            Enviar Mensaje
          </a>
        </Button>
      </section>

      <footer className="border-t py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} ACAPIA · Asociación Civil</p>
      </footer>
    </div>
  );
}
