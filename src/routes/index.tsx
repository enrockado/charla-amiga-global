import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
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
  <svg width="380" height="320" viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[420px] drop-shadow-sm opacity-90">
    <rect width="380" height="320" rx="24" fill="#f8f9fc"/>
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
    <div className="min-h-screen bg-[#fafafc] text-foreground scroll-smooth">
      {/* Header: Logo más equilibrado (h-24) y Menú más refinado */}
      <header className="sticky top-0 z-[100] border-b border-border/40 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <a href="#top" className="flex items-center transition-opacity hover:opacity-90">
            <img 
              src={logoImg} 
              alt="ACAPIA" 
              className="h-24 w-auto object-contain" 
            />
          </a>
          
          <nav className="hidden gap-10 text-lg font-semibold text-slate-700 md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          <Button asChild className="rounded-full font-bold px-8 py-6 h-auto text-lg shadow-md hover:shadow-lg transition-all">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 py-24 md:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              Atención en{" "}
              <span className="text-primary block mt-2">Salud Mental</span>
              <span className="text-slate-400 text-4xl md:text-5xl font-light">y Discapacidad</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Acompañamiento Terapéutico y Psicoterapia con atención domiciliaria y ambulatoria en la Ciudad Autónoma de Buenos Aires.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-xl h-auto shadow-xl hover:-translate-y-1 transition-all">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Contactar ahora
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <HeroSvg />
          </div>
        </div>
      </section>

      {/* Nosotros: Texto con ancho de lectura óptimo */}
      <section id="nosotros" className="scroll-mt-32 py-32 bg-[#fafafc]">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/70 mb-4">Trayectoria Solidaria</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-10">Quiénes Somos</h2>
          <p className="text-2xl text-slate-600 leading-relaxed font-light">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas, con enfoque clínico comunitario y acompañamiento continuo, articulando
