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

// GRÁFICO RESTITUIDO: ACOMPAÑAMOS, Incluimos, TRANSFORMAMOS
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
      
      {/* Header: LOGO TAL CUAL ESTABA (Importante) */}
      <header className="sticky top-0 z-[100] border-b border-slate-200/60 bg-[#f8f9ff]/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-2">
          
          <div className="flex items-center flex-1">
            <a href="#top" className="block overflow-hidden h-[155px]"> 
              <img 
                src={logoImg} 
                alt="ACAPIA" 
                className="h-[185px] w-auto object-contain -mt-2 pointer-events-none" 
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

      {/* Hero: Texto simplificado y gráfico restituido */}
      <section id="top" className="relative bg-gradient-to-b from-[#f8f9ff] to-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              Atención en <br />
              <span className="text-primary italic">Salud Mental</span> y Discapacidad
            </h1>
            <p className="mt-8 text-2xl text-slate-500 font-light leading-relaxed">
              atención domiciliaria y ambulatoria.
            </p>
            <div className="mt-12 flex gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-xl font-bold shadow-xl">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">Contactar ahora</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
             <HeroSvg />
          </div>
        </div>
      </section>

      {/* Quiénes Somos: Texto corregido a enfoque clínico-comunitario */}
      <section id="nosotros" className="py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 italic">Quiénes Somos</h2>
          <p className="text-2xl text-slate-600 leading-relaxed font-light">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en 
            salud mental, discapacidad y problemáticas vinculadas a consumos. 
            Ofrecemos prestaciones personalizadas con enfoque clínico-comunitario.
          </p>
        </div>
      </section>

      {/* Servicios: Textos exactos solicitados */}
      <section id="servicios" className="py-32 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-slate-900">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-primary mb-6 scale-125"><Home /></div>
              <h3 className="text-2xl font-bold mb-4">Acompañamiento</h3>
              <p className="text-slate-500 text-lg leading-snug">AT domiciliario y ambulatorio planificado bajo seguimiento clínico.</p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-primary mb-6 scale-125"><Heart /></div>
              <h3 className="text-2xl font-bold mb-4">Psicoterapia</h3>
              <p className="text-slate-500 text-lg leading-snug">Abordajes individuales adaptados a las necesidades de cada paciente.</p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-primary mb-6 scale-125"><CheckCircle2 /></div>
              <h3 className="text-2xl font-bold mb-4">Obras Sociales</h3>
              <p className="text-slate-500 text-lg leading-snug">Gestión de atención mediante prestaciones en discapacidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="modalidad" className="py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 italic">Nuestra Modalidad</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Trabajamos mediante una articulación constante entre profesionales, familias y equipos externos.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1"><Users className="text-primary h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800">Abordaje Interdisciplinario</h4>
                    <p className="text-slate-500">Coordinación integral para cada caso particular.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1"><ClipboardList className="text-primary h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800">Supervisión Clínica</h4>
                    <p className="text-slate-500">Monitoreo permanente de todos los procesos terapéuticos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[#1e2d6b] p-12 rounded-[50px] text-white">
               <h3 className="text-3xl font-bold mb-6 italic">Enfoque</h3>
               <p className="text-lg opacity-80 mb-8 font-light">Priorizamos la reinserción social y la autonomía del paciente en su entorno cotidiano.</p>
               <div className="h-1 w-20 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="py-32 bg-[#f8f9ff] scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-20">Proceso de Trabajo</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              { n: "1", t: "Admisión", d: "Entrevista inicial para conocer la demanda." },
              { n: "2", t: "Asignación", d: "Selección del profesional según el perfil." },
              { n: "3", t: "Implementación", d: "Inicio del plan terapéutico y seguimiento." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-slate-200 absolute -top-12 left-1/2 -translate-x-1/2 group-hover:text-primary/10 transition-colors">{step.n}</div>
                <div className="relative z-10 pt-4">
                  <h4 className="text-2xl font-bold mb-4">{step.t}</h4>
                  <p className="text-slate-500 text-lg">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-12 italic">Contacto</h2>
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <Mail className="text-primary h-8 w-8" />
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-widest">Email Corporativo</p>
                    <a href={`mailto:${EMAIL}`} className="text-2xl font-semibold hover:text-primary transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="text-primary h-8 w-8" />
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-widest">WhatsApp</p>
                    <p className="text-2xl font-semibold text-slate-800">{WHATSAPP_DISPLAY}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <MapPin className="text-primary h-8 w-8" />
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-widest">Atención</p>
                    <p className="text-2xl font-semibold text-slate-800">CABA y Gran Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-200 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-center italic">Solicitá una entrevista</h3>
              <Button asChild className="w-full rounded-full py-8 text-xl font-bold h-auto shadow-lg bg-[#1e2d6b]">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Enviar Mensaje Directo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-slate-900 text-white/50 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-2xl font-bold text-white mb-4">© 2013 ACAPIA</h3>
          <p className="uppercase text-[10px] tracking-[0.3em] font-bold mb-8">Salud Mental y Discapacidad</p>
          <p className="text-sm italic max-w-2xl mx-auto border-t border-white/10 pt-8">
            Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental.
          </p>
        </div>
      </footer>
    </div>
  );
}
