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
const WHATSAPP_DISPLAY = "011 3791-4461";
const EMAIL = "acapiaasociacioncivil@gmail.com";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header con Logo extra grande y sin redundancia */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-full items-center justify-between px-12 py-10">
          <a href="#top" className="flex items-center">
            {/* Logo gigante (h-72) */}
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

      {/* Hero: Sin "ACAPIA -" en el título */}
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
            <img src={heroImg} className="relative w-full rounded-3xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Quiénes somos</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">Cuidado clínico, cercano y continuo</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Somos una asociación civil orientada a la atención en salud mental,
            discapacidad y problemáticas vinculadas a consumos. Brindamos prestaciones 
            con enfoque clínico comunitario y acompañamiento continuo.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Servicios que ofrecemos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Home, title: "Acompañamiento Terapéutico", desc: "AT domiciliario sostenido y planificado clínicamente." },
              { icon: Heart, title: "Psicoterapia individual", desc: "Espacios terapéuticos adaptados a cada persona." },
              { icon: Stethoscope, title: "Intervenciones en salud mental", desc: "Abordajes integrales y articulados con el equipo tratante." },
              { icon: ClipboardList, title: "Atención ambulatoria", desc: "Consultorio propio para entrevistas y seguimiento clínico." },
              { icon: Users, title: "Consumos problemáticos", desc: "Asistencia integral en situaciones de consumo." },
              { icon: CheckCircle2, title: "Obras sociales", desc: "Prestaciones en discapacidad y obras sociales." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="py-24 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold">Nuestra Modalidad</h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Entendemos el acompañamiento como un puente hacia la autonomía. 
              Trabajamos en el entorno habitual del paciente, coordinando con 
              psiquiatras, psicólogos y familias.
            </p>
          </div>
          <div className="bg-accent/50 p-10 rounded-3xl">
            <h4 className="text-2xl font-bold mb-4">¿Cómo trabajamos?</h4>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3"><CheckCircle2 className="text-primary" /> Atención Domiciliaria</li>
              <li className="flex gap-3"><CheckCircle2 className="text-primary" /> Consultorio en CABA</li>
              <li className="flex gap-3"><CheckCircle2 className="text-primary" /> Supervisión Clínica Constante</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Proceso de Ingreso</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black mb-4">01</div>
              <h3 className="text-2xl font-bold">Admisión</h3>
              <p className="mt-2 opacity-90 text-lg">Entrevista inicial para conocer la situación.</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-4">02</div>
              <h3 className="text-2xl font-bold">Asignación</h3>
              <p className="mt-2 opacity-90 text-lg">Selección del equipo adecuado.</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-4">03</div>
              <h3 className="text-2xl font-bold">Inicio</h3>
              <p className="mt-2 opacity-90 text-lg">Seguimiento clínico continuo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto con Email restaurado */}
      <section id="contacto" className="py-24 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Datos de Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary h-7 w-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-2xl font-medium hover:underline">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary h-7 w-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Teléfono</span>
                  <span className="text-2xl font-medium">{WHATSAPP_DISPLAY}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary h-7 w-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Zona</span>
                  <span className="text-2xl font-medium">CABA y GBA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card border p-12 rounded-3xl shadow-xl flex flex-col justify-center text-center">
            <h3 className="text-3xl font-bold mb-6">Solicitá una entrevista</h3>
            <Button asChild size="lg" className="rounded-full px-12 py-8 text-2xl h-auto">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} ACAPIA · Asociación Civil</p>
        <p className="text-xs uppercase tracking-widest mt-2">Salud Mental y Discapacidad — CABA</p>
      </footer>
    </div>
  );
}
