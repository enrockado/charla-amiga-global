import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png"; // Usa el archivo que subiste sin las letras al pie
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Heart,
  Home,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Users,
  ClipboardList,
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

// Imagen original restaurada: Acompañamos, Incluimos, Transformamos
const HeroSvg = () => (
  <svg width="380" height="320" viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[450px] drop-shadow-xl">
    <rect width="380" height="320" rx="24" fill="#f0eef8"/>
    <line x1="60" y1="40" x2="60" y2="280" stroke="#1e2d6b" strokeWidth="2.5" opacity="0.15" strokeLinecap="round"/>
    <circle cx="60" cy="90" r="9" fill="#1e2d6b" opacity="0.25"/>
    <circle cx="60" cy="90" r="4" fill="#1e2d6b" opacity="0.5"/>
    <text x="86" y="84" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#1e2d6b" opacity="0.45" letterSpacing="3">ACOMPAÑAMOS</text>
    <line x1="86" y1="96" x2="260" y2="96" stroke="#1e2d6b" strokeWidth="0.6" opacity="0.1"/>
    <circle cx="60" cy="165" r="11" fill="#e87c2e" opacity="0.18"/>
    <circle cx="60" cy="165" r="5" fill="#e87c2e" opacity="0.45"/>
    <text x="86" y="171" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="600" fill="#1e2d6b" opacity="0.72">Incluimos</text>
    <line x1="86" y1="183" x2="290" y2="183" stroke="#e87c2e" strokeWidth="1" opacity="0.2"/>
    <circle cx="60" cy="242" r="9" fill="#1e2d6b" opacity="0.2"/>
    <circle cx="60" cy="242" r="4" fill="#e87c2e" opacity="0.55"/>
    <text x="86" y="236" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#e87c2e" opacity="0.6" letterSpacing="3">TRANSFORMAMOS</text>
  </svg>
);

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground scroll-smooth font-sans">
      {/* Header con contraste suave y elementos centrados simétricamente */}
      <header className="sticky top-0 z-[100] border-b border-slate-200/60 bg-[#f8f9ff] shadow-sm">
        <div className="mx-auto flex max-w-full items-center justify-between px-20 py-4">
          
          {/* Logo: SIN las 3 palabras debajo, 15% más grande y sin recortes */}
          <div className="flex items-center">
            <a href="#top" className="block ml-10">
              <img 
                src={logoImg} 
                alt="ACAPIA" 
                className="h-[200px] w-auto object-contain pointer-events-none"
              />
            </a>
          </div>
          
          {/* Navegación: Presencia fuerte y grosor negrita */}
          <nav className="hidden gap-14 text-xl font-bold text-slate-800 md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors tracking-tight">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors tracking-tight">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors tracking-tight">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors tracking-tight">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors tracking-tight">Contacto</a>
          </nav>

          {/* Botón WhatsApp: Desplazado hacia el centro desde la derecha */}
          <div className="flex items-center mr-10">
            <Button asChild className="rounded-full text-lg font-bold px-12 py-8 h-auto shadow-md">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-12">
        <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold leading-tight text-slate-900">
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
          <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Quiénes Somos</h2>
          <p className="text-2xl text-slate-500 leading-relaxed max-w-5xl mx-auto font-light italic">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas, con enfoque clínico comunitario y acompañamiento continuo.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-[150px] bg-secondary/10 py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-20 tracking-tight">Servicios</h2>
          <div className="grid gap-10 md:grid-cols-3 text-left">
            {[
              { title: "Acompañamiento", icon: <Home className="h-10 w-10" />, desc: "AT domiciliario y ambulatorio planificado bajo seguimiento clínico y supervisión permanente." },
              { title: "Psicoterapia", icon: <Heart className="h-10 w-10" />, desc: "Abordajes individuales y grupales adaptados a la singularidad de cada paciente." },
              { title: "Obras Sociales", icon: <CheckCircle2 className="h-10 w-10" />, desc: "Gestión y orientación para la cobertura de prestaciones básicas obligatorias en discapacidad." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                <div className="text-primary mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{s.title}</h3>
                <p className="text-lg text-slate-500 font-light leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidad */}
      <section id="modalidad" className="scroll-mt-[150px] py-32 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-8">Nuestra Modalidad</h2>
            <div className="space-y-6 text-xl text-slate-500 font-light leading-relaxed">
              <p>Sostenemos una práctica basada en la articulación constante entre los profesionales, las familias y los equipos tratantes externos.</p>
              <div className="flex gap-4 items-start">
                <Users className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <p><span className="font-bold text-slate-800">Abordaje Interdisciplinario:</span> Coordinamos acciones para una visión integral del tratamiento.</p>
              </div>
              <div className="flex gap-4 items-start">
                <ClipboardList className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <p><span className="font-bold text-slate-800">Supervisión Clínica:</span> Todos nuestros procesos cuentan con monitoreo permanente para asegurar la calidad ética y terapéutica.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 p-12 rounded-[48px] border border-primary/10">
            <ul className="space-y-6 text-2xl font-bold text-primary italic">
              <li>✓ Intervención Domiciliaria</li>
              <li>✓ Reinserción Social</li>
              <li>✓ Seguimiento Personalizado</li>
              <li>✓ Apoyo a la Familia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso de Ingreso */}
      <section id="proceso" className="scroll-mt-[150px] bg-primary text-white py-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 tracking-tight">Proceso de Ingreso</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { num: "01", t: "Admisión", d: "Entrevista inicial para evaluar el caso y definir objetivos." },
              { num: "02", t: "Asignación", d: "Selección del profesional idóneo según el perfil del paciente." },
              { num: "03", t: "Inicio", d: "Implementación del plan de trabajo y seguimiento clínico." }
            ].map((p, i) => (
              <div key={i} className="relative">
                <span className="text-8xl font-black opacity-10 absolute -top-10 left-1/2 -translate-x-1/2">{p.num}</span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{p.t}</h3>
                <p className="text-lg opacity-90 font-light relative z-10">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-[150px] py-40 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-6xl font-bold text-slate-900 tracking-tighter">Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full"><Mail className="text-primary h-8 w-8" /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-2xl hover:text-primary font-bold text-slate-800 transition-colors">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full"><Phone className="text-primary h-8 w-8" /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">WhatsApp</span>
                  <span className="text-3xl font-bold text-slate-900">{WHATSAPP_DISPLAY}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full"><MapPin className="text-primary h-8 w-8" /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">Área de cobertura</span>
                  <span className="text-2xl font-bold text-slate-800">CABA y Gran Buenos Aires</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-[3px] border-primary p-12 rounded-[48px] text-center shadow-xl flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">Solicitá una entrevista de admisión</h3>
            <Button asChild className="w-full rounded-full py-9 text-2xl font-bold h-auto shadow-lg">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                Enviar Mensaje
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-20 text-center bg-slate-50 text-slate-400">
        <p className="text-2xl font-bold text-slate-900 mb-2">© 2013 ACAPIA</p>
        <p className="uppercase tracking-
