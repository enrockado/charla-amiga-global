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

// Componente de imagen del Hero restaurado con el diseño y palabras originales
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
    <div className="min-h-screen bg-white text-foreground scroll-smooth font-sans">
      
      {/* HEADER: Logo ampliado y navegación */}
      <header className="sticky top-0 z-[100] border-b border-slate-200/60 bg-[#f8f9ff]/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-2">
          
          <div className="flex items-center flex-1">
            <a href="#top" className="block">
              <img 
                src={logoImg} 
                alt="ACAPIA" 
                className="h-[185px] w-auto object-contain pointer-events-none" 
              />
            </a>
          </div>
          
          <nav className="hidden gap-10 text-lg font-bold text-slate-800 md:flex">
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#modalidad" className="hover:text-primary transition-colors">Modalidad</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center flex-1 justify-end">
            <Button asChild className="rounded-full bg-[#1e2d6b] hover:bg-[#2a3e8e] text-white px-8 py-6 h-auto shadow-lg transition-all font-bold text-lg">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO: Incluye 'ambulatoria' */}
      <section id="top" className="relative pt-12 bg-gradient-to-b from-[#f8f9ff] to-white">
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

      {/* NOSOTROS: Texto original restaurado íntegramente */}
      <section id="nosotros" className="scroll-mt-[150px] py-32 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-4">Desde 2013</p>
        <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Quiénes Somos</h2>
        <p className="text-2xl text-slate-500 leading-relaxed font-light italic">
          Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas con un enfoque clínico y humano.
        </p>
      </section>

      {/* SERVICIOS: Incluye 'ambulatorio' */}
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
                <div className="text-primary mb-6 flex justify-center">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 text-center">{s.title}</h3>
                <p className="text-lg text-slate-500 font-light leading-snug text-center">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODALIDAD */}
      <section id="modalidad" className="scroll-mt-[150px] py-32 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-8 italic">Nuestra Modalidad</h2>
            <div className="space-y-6 text-xl text-slate-500 font-light leading-relaxed">
              <p>Sostenemos una práctica basada en la articulación constante entre los profesionales, las familias y los equipos tratantes externos.</p>
              <div className="flex gap-4 items-start">
                <Users className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <p><span className="font-bold text-slate-800">Abordaje Interdisciplinario:</span> Coordinamos acciones para una visión integral del tratamiento.</p>
              </div>
              <div className="flex gap-4 items-start">
                <ClipboardList className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                <p><span className="font-bold text-slate-800">Supervisión Clínica:</span> Todos nuestros procesos cuentan con monitoreo permanente para asegurar la calidad ética.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1e2d6b] p-12 rounded-[48px] text-white">
            <ul className="space-y-6 text-2xl font-bold italic">
              <li>✓ Intervención Domiciliaria</li>
              <li>✓ Reinserción Social</li>
              <li>✓ Seguimiento Personalizado</li>
              <li>✓ Apoyo a la Familia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="scroll-mt-[150px] bg-[#f8f9ff] py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-20 tracking-tight">Proceso de Ingreso</h2>
          <div className="grid md:grid-cols-3 gap-16 relative">
            {[
              { num: "01", t: "Admisión", d: "Entrevista inicial para conocer la demanda y definir objetivos." },
              { num: "02", t: "Asignación", d: "Selección del profesional idóneo según el perfil del paciente." },
              { num: "03", t: "Implementación", d: "Inicio del plan terapéutico y seguimiento clínico continuo." }
            ].map((p, i) => (
              <div key={i} className="relative group">
                <span className="text-8xl font-black text-slate-200 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-primary/10 transition-colors">{p.num}</span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{p.t}</h3>
                <p className="text-lg text-slate-500 font-light relative z-10">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO: Incluye Email Corporativo */}
      <section id="contacto" className="scroll-mt-[150px] py-40 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-6xl font-bold text-slate-900 tracking-tighter italic">Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full"><Mail className="text-primary h-8 w-8" /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">Email Corporativo</span>
                  <a href={`mailto:${EMAIL}`} className="text-2xl hover:text-primary font-bold text-slate-800 transition-colors break-all">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full"><Phone className="text-primary h-8 w-8" /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-[0.2em]">WhatsApp</span>
