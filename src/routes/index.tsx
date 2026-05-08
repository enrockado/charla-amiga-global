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
      { title: "ACAPIA | Salud Mental y Discapacidad en CABA" },
      {
        name: "description",
        content:
          "Asociación Civil constituida en 2013. Acompañamiento Terapéutico (AT) y Psicoterapia personalizada en CABA. Especialistas en salud mental, discapacidad y consumos problemáticos.",
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
      {/* Header con Logo Gigante (h-92) */}
      <header className="sticky top-0 z-[100] border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-full items-center justify-between px-12 py-6">
          <a href="#top" className="flex items-center">
            <img 
              src={logoImg} 
              alt="ACAPIA" 
              className="h-92 w-auto object-contain pointer-events-none" 
            />
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
      <section id="top" className="relative pt-32">
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
            <p className="mt-5 text-xl text-muted-foreground">
              Acompañamiento Terapéutico y Psicoterapia con atención domiciliaria y ambulatoria en la Ciudad Autónoma de Buenos Aires.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-xl h-auto">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Contactar ahora
                </a>
              </Button>
            </div>
          </div>
          <img src={heroImg} className="rounded-3xl shadow-2xl" alt="Atención en Salud Mental" />
        </div>
      </section>

      {/* Nosotros: Texto Exacto Solicitado */}
      <section id="nosotros" className="scroll-mt-[450px] py-32 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">Desde 2013</p>
          <h2 className="text-5xl font-black mb-8">Quiénes Somos</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed max-w-5xl mx-auto">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas, con enfoque clínico comunitario y acompañamiento continuo, articulando con profesionales y redes de atención.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-[450px] bg-secondary/30 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-5xl font-black text-center mb-20">Servicios</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-card p-10 rounded-3xl border shadow-sm">
              <Home className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Acompañamiento</h3>
              <p className="text-lg text-muted-foreground">AT domiciliario y ambulatorio planificado bajo seguimiento clínico.</p>
            </div>
            <div className="bg-card p-10 rounded-3xl border shadow-sm">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Psicoterapia</h3>
              <p className="text-lg text-muted-foreground">Abordajes individuales adaptados a las necesidades de cada paciente.</p>
            </div>
            <div className="bg-card p-10 rounded-3xl border shadow-sm">
              <CheckCircle2 className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Obras Sociales</h3>
              <p className="text-lg text-muted-foreground">Gestión de atención mediante prestaciones en discapacidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="scroll-mt-[450px] py-32 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <h2 className="text-5xl font-black">Nuestra Modalidad</h2>
          <div className="space-y-6 text-xl text-muted-foreground">
            <p>Sostenemos una práctica basada en la articulación constante con familias y equipos tratantes.</p>
            <ul className="space-y-4">
              <li className="flex gap-4 font-bold text-foreground">✓ Intervención Domiciliaria</li>
              <li className="flex gap-4 font-bold text-foreground">✓ Abordaje Interdisciplinario</li>
              <li className="flex gap-4 font-bold text-foreground">✓ Supervisión Clínica Permanente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="scroll-mt-[450px] bg-primary text-primary-foreground py-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-black mb-20">Proceso de Ingreso</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <span className="text-7xl font-black opacity-20 block mb-4">01</span>
              <h3 className="text-3xl font-bold">Admisión</h3>
              <p className="mt-4 text-xl opacity-90">Evaluación inicial del caso y necesidades.</p>
            </div>
            <div>
              <span className="text-7xl font-black opacity-20 block mb-4">02</span>
              <h3 className="text-3xl font-bold">Asignación</h3>
              <p className="mt-4 text-xl opacity-90">Selección del profesional o equipo idóneo.</p>
            </div>
            <div>
              <span className="text-7xl font-black opacity-20 block mb-4">03</span>
              <h3 className="text-3xl font-bold">Seguimiento</h3>
              <p className="mt-4 text-xl opacity-90">Monitoreo constante del proceso terapéutico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-[450px] py-40 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-6xl font-black">Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Mail className="text-primary h-10 w-10" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold uppercase text-muted-foreground tracking-widest">Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-2xl hover:underline font-bold">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="text-primary h-10 w-10" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold uppercase text-muted-foreground tracking-widest">WhatsApp</span>
                  <span className="text-3xl font-black">{WHATSAPP_DISPLAY}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
