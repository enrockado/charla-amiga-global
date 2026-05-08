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
    ],
  }),
  component: Index,
});

const WHATSAPP = "541137914461";
const WHATSAPP_DISPLAY = "011 3791-4461";
const EMAIL = "acapiaasociacioncivil@gmail.com";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Header Gigante */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
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
      <section id="top" className="relative pt-20">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url(${heroImg})` }} 
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Atención en{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent font-bold">
                Salud Mental y Discapacidad
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground italic">
              Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento.
            </p>
            <p className="mt-5 text-xl text-muted-foreground">
              Acompañamiento Terapéutico (AT) y Psicoterapia domiciliaria y ambulatoria en CABA.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-xl h-auto">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Contactar ahora
                </a>
              </Button>
            </div>
          </div>
          <img src={heroImg} className="rounded-3xl shadow-2xl" alt="Atención" />
        </div>
      </section>

      {/* Nosotros - Añadido scroll-mt para que el header no tape el título */}
      <section id="nosotros" className="scroll-mt-96 py-32 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-black mb-8">Quiénes Somos</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Somos una asociación civil dedicada a la salud mental y discapacidad, 
            brindando abordajes integrales con enfoque clínico comunitario en CABA.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-96 bg-secondary/30 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-5xl font-black text-center mb-20">Servicios</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { icon: Home, title: "Acompañamiento", desc: "Atención domiciliaria planificada." },
              { icon: Heart, title: "Psicoterapia", desc: "Espacios individuales adaptados." },
              { icon: CheckCircle2, title: "Obras Sociales", desc: "Prestaciones por discapacidad." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-10 rounded-3xl border shadow-sm">
                <Icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-lg text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="scroll-mt-96 py-32 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <h2 className="text-5xl font-black">Nuestra Modalidad</h2>
          <div className="space-y-6 text-xl text-muted-foreground">
            <p>Atención personalizada en el entorno del paciente.</p>
            <ul className="space-y-4">
              <li className="flex gap-4 font-bold text-foreground">✓ Intervención Domiciliaria</li>
              <li className="flex gap-4 font-bold text-foreground">✓ Red de contención familiar</li>
              <li className="flex gap-4 font-bold text-foreground">✓ Supervisión profesional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso - Corregido scroll-mt y padding */}
      <section id="proceso" className="scroll-mt-96 bg-primary text-primary-foreground py-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-black mb-20">Proceso de Ingreso</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <span className="text-7xl font-black opacity-20 block mb-4">01</span>
              <h3 className="text-3xl font-bold">Admisión</h3>
              <p className="mt-4 text-xl opacity-90">Entrevista inicial de evaluación.</p>
            </div>
            <div>
              <span className="text-7xl font-black opacity-20 block mb-4">02</span>
              <h3 className="text-3xl font-bold">Asignación</h3>
              <p className="mt-4 text-xl opacity-90">Selección del profesional idóneo.</p>
            </div>
            <div>
              <span className="text-7xl font-black opacity-20 block mb-4">03</span>
              <h3 className="text-3xl font-bold">Inicio</h3>
              <p className="mt-4 text-xl opacity-90">Seguimiento clínico sostenido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-96 py-40 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <h2 className="text-6xl font-black">Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Mail className="text-primary h-10 w-10" />
                <a href={`mailto:${EMAIL}`} className="text-2xl hover:underline font-bold">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="text-primary h-10 w-10" />
                <span className="text-3xl font-black">{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-6">
                <MapPin className="text-primary h-10 w-10" />
                <span className="text-2xl font-bold">CABA y GBA</span>
              </div>
            </div>
          </div>
          <div className="bg-card border-4 border-primary p-12 rounded-[40px] text-center shadow-2xl">
            <h3 className="text-3xl font-black mb-8">¿Dudas? Escribinos</h3>
            <Button asChild className="w-full rounded-full py-10 text-3xl font-black h-auto">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-20 text-center text-muted-foreground bg-secondary/10">
        <p className="text-2xl font-bold">© {new Date().getFullYear()} ACAPIA</p>
        <p className="mt-2 uppercase tracking-[0.2em] text-sm">Asociación Civil</p>
      </footer>
    </div>
  );
}
