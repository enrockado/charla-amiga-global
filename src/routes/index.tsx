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
      { title: "ACAPIA | Salud Mental y Discapacidad" },
      {
        name: "description",
        content:
          "Asociación Civil constituida en 2013. Acompañamiento Terapéutico (AT) y Psicoterapia personalizada.",
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
    <text x="86" y="84" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#1e2d6b" opacity="0.45" letterSpacing="3">ACOMPAÑAMOS</text>
    <circle cx="60" cy="165" r="11" fill="#e87c2e" opacity="0.18"/>
    <text x="86" y="171" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="600" fill="#1e2d6b" opacity="0.72">Incluimos</text>
    <line x1="86" y1="183" x2="290" y2="183" stroke="#e87c2e" strokeWidth="1" opacity="0.2"/>
    <text x="86" y="236" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#e87c2e" opacity="0.6" letterSpacing="3">TRANSFORMAMOS</text>
  </svg>
);

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground scroll-smooth">
      {/* Header con contraste y elementos agrupados hacia el centro */}
      <header className="sticky top-0 z-[100] border-b border-slate-200/60 bg-[#f8f9ff] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          
          {/* Logo: Tamaño aumentado un 10% (165px) y sin palabras al pie */}
          <div className="flex items-center">
            <a href="#top" className="block">
              <img 
                src={logoImg} 
                alt="ACAPIA" 
                className="h-[165px] w-auto object-contain pointer-events-none"
              />
            </a>
          </div>
          
          {/* Navegación: Presencia fuerte y centrada */}
          <nav className="hidden justify-center gap-10 text-xl font-bold text-slate-800 md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors tracking-tight">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors tracking-tight">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors tracking-tight">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors tracking-tight">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors tracking-tight">Contacto</a>
          </nav>

          {/* Botón WhatsApp: Agrupado junto a la navegación */}
          <div className="flex items-center">
            <Button asChild className="rounded-full text-lg font-bold px-12 py-8 h-auto shadow-md">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl text-slate-900">
              Atención en{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent font-bold">
                Salud Mental <span className="font-light opacity-70 text-[0.9em]">y Discapacidad</span>
              </span>
            </h1>
            <p className="mt-8 text-2xl text-slate-500 font-light leading-relaxed">
              Acompañamiento Terapéutico y Psicoterapia con atención domiciliaria y ambulatoria.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl h-auto font-bold shadow-lg hover:-translate-y-1 transition-transform">
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
      <section id="nosotros" className="scroll-mt-[150px] py-32 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-4">Desde 2013</p>
          <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">Quiénes Somos</h2>
          <p className="text-2xl text-slate-500 leading-relaxed max-w-5xl mx-auto font-light">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas con un enfoque clínico y humano.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-[150px] bg-secondary/10 py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-20 tracking-tight">Servicios</h2>
          <div className="grid gap-10 md:grid-cols-3">
             {[
              { title: "Acompañamiento", icon: <Home className="h-10 w-10" />, desc: "AT domiciliario y ambulatorio planificado bajo seguimiento clínico." },
              { title: "Psicoterapia", icon: <Heart className="h-10 w-10" />, desc: "Abordajes individuales adaptados a las necesidades de cada paciente." },
              { title: "Obras Sociales", icon: <CheckCircle2 className="h-10 w-10" />, desc: "Gestión de atención mediante prestaciones en discapacidad." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="text-primary mb-6 flex justify-center">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{s.title}</h3>
                <p className="text-lg text-slate-500 font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-[150px] py-40 mx-auto max-w-6xl px-6">
        <div className="bg-white border-[3px] border-primary p-12 rounded-[48px] text-center shadow-xl max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Solicitá una entrevista</h3>
          <Button asChild className="w-full rounded-full py-9 text-2xl font-bold h-auto shadow-lg">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t py-20 text-center bg-slate-50 text-slate-400">
        <p className="text-2xl font-bold text-slate-900 mb-2">© 2013 ACAPIA</p>
        <p className="uppercase tracking-[0.15em] text-xs font-medium max-w-3xl mx-auto px-6 italic">
          Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental
        </p>
      </footer>
    </div>
  );
}
