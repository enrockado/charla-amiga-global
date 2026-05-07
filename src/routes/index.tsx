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
const EMAIL = "acapia@acapia.com.ar";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logoImg} alt="ACAPIA" className="h-10 w-10 object-contain" />
            <span className="text-lg font-bold tracking-tight text-primary">acapia</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#nosotros" className="hover:text-foreground">Nosotros</a>
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
            <a href="#modalidad" className="hover:text-foreground">Modalidad</a>
            <a href="#proceso" className="hover:text-foreground">Proceso</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-warm)] opacity-80" />
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
              Acompañamiento Terapéutico (AT) y Psicoterapia con atención domiciliaria
              y respaldo profesional en la Ciudad Autónoma de Buenos Aires.
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

      {/* Nosotros */}
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

      {/* Servicios */}
      <section id="servicios" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Qué hacemos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Servicios que ofrecemos
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Acompañamiento Terapéutico",
                desc: "AT domiciliario sostenido y planificado clínicamente.",
              },
              {
                icon: Heart,
                title: "Psicoterapia individual",
                desc: "Espacios terapéuticos adaptados a cada persona.",
              },
              {
                icon: Stethoscope,
                title: "Intervenciones en salud mental",
                desc: "Abordajes integrales y articulados con el equipo tratante.",
              },
              {
                icon: Users,
                title: "Consumos problemáticos",
                desc: "Asistencia integral en situaciones de consumo problemático.",
              },
              {
                icon: ClipboardList,
                title: "Seguimiento clínico",
                desc: "Coordinación con profesionales tratantes e informes.",
              },
              {
                icon: CheckCircle2,
                title: "Obras sociales",
                desc: "Trabajamos con obras sociales y prestaciones en discapacidad.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Modalidad de atención
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Atención domiciliaria con respaldo profesional
            </h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span><strong className="text-foreground">Zona:</strong> Ciudad Autónoma de Buenos Aires (CABA).</span>
              </li>
              <li className="flex gap-3">
                <Home className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span><strong className="text-foreground">Atención domiciliaria</strong> en el espacio cotidiano del paciente.</span>
              </li>
              <li className="flex gap-3">
                <Stethoscope className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span><strong className="text-foreground">Consultorio de respaldo</strong> para entrevistas y coordinación.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Trabajamos con <strong className="text-foreground">obras sociales</strong> y prestaciones en discapacidad.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-[image:var(--gradient-warm)] p-10 shadow-[var(--shadow-card)]">
            <blockquote className="text-xl font-medium leading-relaxed text-foreground/90">
              “Acompañar es sostener un proceso clínico con presencia, escucha
              y articulación con el equipo tratante.”
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— Equipo ACAPIA</p>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Un proceso claro, paso a paso
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Recepción del caso", "Tomamos contacto y escuchamos la consulta."],
              ["02", "Evaluación inicial", "Analizamos necesidades clínicas y contexto."],
              ["03", "Presupuesto", "Presentamos la propuesta con claridad."],
              ["04", "Autorizaciones", "Gestionamos la cobertura con la obra social."],
              ["05", "Inicio de la prestación", "Comenzamos el AT o la psicoterapia."],
              ["06", "Seguimiento e informes", "Coordinación con profesionales tratantes."],
            ].map(([n, t, d]) => (
              <li
                key={n}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <span className="text-sm font-semibold text-primary">{n}</span>
                <h3 className="mt-2 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-warm)] p-10 md:p-14 shadow-[var(--shadow-soft)]">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                ¿Necesitás acompañamiento o atención en salud mental?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Contactanos y evaluamos tu caso a la brevedad. También recibimos
                derivaciones profesionales y consultas.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="block text-base font-semibold">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="block text-base font-semibold">{EMAIL}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ACAPIA · Asociación Civil</p>
          <p>Atención en Salud Mental y Discapacidad — CABA</p>
        </div>
      </footer>
    </div>
  );
}
