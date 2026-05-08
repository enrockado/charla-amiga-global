import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Heart,
  Home,
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

const HeroSvg = () => (
  <svg width="380" height="320" viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[450px] drop-shadow-xl">
    <rect width="380" height="320" rx="24" fill="#f0eef8"/>
    <line x1="60" y1="40" x2="60" y2="280" stroke="#1e2d6b" strokeWidth="2.5" opacity="0.15" strokeLinecap="round"/>
    <circle cx="60" cy="90" r="9" fill="#1e2d6b" opacity="0.25"/>
    <circle cx="60" cy="90" r="4" fill="#1e2d6b" opacity="0.5"/>
    <rect x="50" y="80" width="20" height="20" rx="2" fill="none" stroke="#1e2d6b" strokeWidth="1" opacity="0.2" transform="rotate(45 60 90)"/>
    <text x="86" y="84" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#1e2d6b" opacity="0.45" letterSpacing="3">ACOMPAÑAMOS</text>
    <line x1="86" y1="96" x2="260" y2="96" stroke="#1e2d6b" strokeWidth="0.6" opacity="0.1"/>
    <circle cx="60" cy="165" r="11" fill="#e87c2e" opacity="0.18"/>
    <circle cx="60" cy="165" r="5" fill="#e87c2e" opacity="0.45"/>
    <rect x="48" y="153" width="24" height="24" rx="2.5" fill="none" stroke="#e87c2e" strokeWidth="1.2" opacity="0.25" transform="rotate(45 60 165)"/>
    <text x="86" y="171" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="600" fill="#1e2d6b" opacity="0.72">Incluimos</text>
    <line x1="86" y1="183" x2="290" y2="183" stroke="#e87c2e" strokeWidth="1" opacity="0.2"/>
    <circle cx="60" cy="242" r="9" fill="#1e2d6b" opacity="0.2"/>
    <circle cx="60" cy="242" r="4" fill="#e87c2e" opacity="0.55"/>
    <rect x="50" y="232" width="20" height="20" rx="2" fill="none" stroke="#e87c2e" strokeWidth="1" opacity="0.2" transform="rotate(45 60 242)"/>
    <text x="86" y="236" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#e87c2e" opacity="0.6" letterSpacing="3">TRANSFORMAMOS</text>
    <line x1="86" y1="248" x2="280" y2="248" stroke="#1e2d6b" strokeWidth="0.6" opacity="0.08"/>
    <circle cx="330" cy="100" r="42" fill="none" stroke="#1e2d6b" strokeWidth="0.8" opacity="0.07"/>
    <circle cx="330" cy="100" r="28" fill="none" stroke="#e87c2e" strokeWidth="0.8" opacity="0.07"/>
    <rect x="298" y="55" width="22" height="22" rx="2.5" fill="#1e2d6b" opacity="0.07" transform="rotate(45 309 66)"/>
    <rect x="318" y="80" width="16" height="16" rx="2" fill="#e87c2e" opacity="0.1" transform="rotate(45 326 88)"/>
    <rect x="300" y="105" width="18" height="18" rx="2" fill="#1e2d6b" opacity="0.06" transform="rotate(45 309 114)"/>
  </svg>
);

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Header: Logo reducido 15% con contenedor de recorte limpio */}
      <header className="sticky top-0 z-[100] border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-full items-center justify-between px-12 py-3">
          <a href="#top" className="flex items-center">
            {/* Contenedor que oculta las palabras inferiores deslizando la imagen */}
            <div className="overflow-hidden h-[85px] w-[95px] flex items-start justify-center">
              <img 
                src={logoImg} 
                alt="ACAPIA" 
                className="h-[110px] w-auto max-w-none pointer-events-none"
                style={{ marginTop: "-2px" }} // Ajuste fino para centrar el icono y nombre
              />
            </div>
          </a>
          
          <nav className="hidden gap-10 text-xl font-semibold text-slate-700 md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          <Button asChild className="rounded-full text-lg font-bold px-10 py-6 h-auto shadow-sm">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl text-slate-900">
              Atención en{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent font-bold">
                Salud Mental <span className="font-normal opacity-80 text-[0.9em]">y Discapacidad</span>
              </span>
            </h1>
            <p className="mt-5 text-xl text-slate-500 font-light leading-relaxed">
              Acompañamiento Terapéutico y Psicoterapia con atención domiciliaria y ambulatoria en la Ciudad Autónoma de Buenos Aires.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-xl h-auto font-bold shadow-md hover:-translate-y-1 transition-transform">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Contactar ahora
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <HeroSvg />
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="scroll-mt-[100px] py-32 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-4">Desde 2013</p>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Quiénes Somos</h2>
          <p className="text-2xl text-slate-500 leading-relaxed max-w-5xl mx-auto font-light">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas, con enfoque clínico comunitario y acompañamiento continuo, articulando con profesionales y redes de atención.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-[100px] bg-secondary/20 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-5xl font-extrabold text-center text-slate-900 mb-20 tracking-tight">Servicios</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { title: "Acompañamiento", icon: <Home className="h-10 w-10" />, desc: "AT domiciliario y ambulatorio planificado bajo seguimiento clínico." },
              { title: "Psicoterapia", icon: <Heart className="h-10 w-10" />, desc: "Abordajes individuales adaptados a las necesidades de cada paciente." },
              { title: "Obras Sociales", icon: <CheckCircle2 className="h-10 w-10" />, desc: "Gestión de atención mediante prestaciones en discapacidad." }
            ].map((s, i) => (
              <div key={i} className="bg-card p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{s.title}</h3>
                <p className="text-lg text-slate-500 font-light leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="scroll-mt-[100px] py-32 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">Nuestra Modalidad</h2>
          <div className="space-y-6 text-xl text-slate-500 font-light">
            <p>Sostenemos una práctica basada en la articulación constante con familias y equipos tratantes.</p>
            <ul className="space-y-4 font-bold text-slate-800 italic">
              <li>✓ Intervención Domiciliaria</li>
              <li>✓ Abordaje Interdisciplinario</li>
              <li>✓ Supervisión Clínica Permanente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="scroll-mt-[100px] bg-primary text-white py-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-20 tracking-tight">Proceso de Ingreso</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { num: "01", t: "Admisión", d: "Evaluación inicial del caso y necesidades." },
              { num: "02", t: "Asignación", d: "Selección del profesional o equipo idóneo." },
              { num: "03", t: "Seguimiento", d: "Monitoreo constante del proceso terapéutico." }
            ].map((p, i) => (
              <div key={i}>
                <span className="text-7xl font-extrabold opacity-20 block mb-4">{p.num}</span>
                <h3 className="text-2xl font-bold mb-2">{p.t}</h3>
                <p className="text-lg opacity-90 font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-[100px] py-40 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-6xl font-extrabold text-slate-900 tracking-tighter">Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Mail className="text-primary h-8 w-8" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-2xl hover:text-primary font-bold text-slate-800 transition-colors">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="text-primary h-8 w-8" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">WhatsApp</span>
                  <span className="text-3xl font-extrabold text-slate-900">{WHATSAPP_DISPLAY}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <MapPin className="text-primary h-8 w-8" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">Zona de Atención</span>
                  <span className="text-2xl font-bold text-slate-800">CABA y GBA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-[3px] border-primary p-12 rounded-[48px] text-center shadow-xl">
            <h3 className="text-3xl font-extrabold mb-8 text-slate-900">Solicitá una entrevista</h3>
            <Button asChild className="w-full rounded-full py-9 text-2xl font-bold h-auto shadow-lg">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-20 text-center bg-slate-50 text-slate-400">
        <p className="text-2xl font-bold text-slate-900 mb-2">© 2013 ACAPIA</p>
        <p className="uppercase tracking-[0.15em] text-xs font-medium max-w-3xl mx-auto px-6 italic leading-relaxed">
          Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental y problemáticas asociadas
        </p>
      </footer>
    </div>
  );
}
