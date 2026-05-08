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
      { title: "ACAPIA – Salud Mental y Discapacidad en CABA" },
      {
        name: "description",
        content:
          "ACAPIA Asociación Civil. Acompañamiento Terapéutico (AT) y Psicoterapia domiciliaria en CABA. Atención en salud mental, discapacidad, consumos y adicciones.",
      },
      { property: "og:title", content: "ACAPIA – Salud Mental y Discapacidad en CABA" },
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
const WHATSAPP_DISPLAY = "011 3791-4461";
const EMAIL = "acapiaasociacioncivil@gmail.com";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Ajustado */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-4">
            {/* Logo se mantiene en 48 para que destaque */}
            <img src={logoImg} alt="ACAPIA" className="h-48 w-48 object-contain" />
            {/* La palabra acapia ahora es más chica (4xl) */}
            <span className="text-4xl font-bold tracking-tight text-primary">acapia</span>
          </a>
          
          {/* Menú más chico (xl) pero sigue en negrita */}
          <nav className="hidden gap-8 text-xl font-bold text-foreground md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          {/* Botón de WhatsApp más equilibrado */}
          <Button asChild className="rounded-full text-lg font-bold px-8 py-6 h-auto">
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
              ACAPIA — Atención en{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                Salud Mental y Discapacidad
              </span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              <strong className="text-foreground">A.C.A.P.I.A</strong> — Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental y problemáticas asociadas.
            </p>
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
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#servicios">Conocer servicios</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Acompañamiento terapéutico cálido"
              className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Secciones de contenido */}
      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Quiénes somos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Cuidado clínico, cercano y continuo
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Somos una asociación civil orientada a la atención en salud mental,
            discapacidad y problemáticas vinculadas a consumos.
            Brindamos prestaciones personalizadas, con enfoque clínico comunitario y
            acompañamiento continuo, articulando con profesionales y redes de atención.
          </p>
        </div>
      </section>

      <section id="servicios" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Servicios que ofrecemos
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Home, title: "Acompañamiento Terapéutico", desc: "AT domiciliario sostenido y planificado clínicamente." },
              { icon: Heart, title: "Psicoterapia individual", desc: "Espacios terapéuticos adaptados a cada persona." },
              { icon: Stethoscope, title: "Intervenciones en salud mental", desc: "Abordajes integrales y articulados con el equipo tratante." },
              { icon: ClipboardList, title: "Atención ambulatoria", desc: "Consultorio propio para entrevistas y seguimiento clínico." },
              { icon: Users, title: "Consumos problemáticos", desc: "Asistencia integral en situaciones de consumo." },
              { icon: CheckCircle2, title: "Obras sociales", desc: "Prestaciones en discapacidad y obras sociales." },
