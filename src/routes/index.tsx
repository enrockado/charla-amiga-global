import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png"; // Asegúrate de que este archivo sea la imagen sin las letras al pie
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

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground scroll-smooth font-sans">
      {/* Header con contraste suave y elementos más centrados */}
      <header className="sticky top-0 z-[100] border-b border-slate-200/60 bg-[#f8f9ff] shadow-sm">
        <div className="mx-auto flex max-w-full items-center justify-between px-20 py-4">
          
          {/* Logo: Más grande, centrado hacia el interior y sin recortes */}
          <div className="flex items-center">
            <a href="#top" className="block ml-10">
              <img 
                src={logoImg} 
                alt="ACAPIA" 
                className="h-[145px] w-auto object-contain pointer-events-none"
              />
            </a>
          </div>
          
          {/* Navegación: Mucha presencia y grosor */}
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

      {/* Hero con texto central editado */}
      <section id="top" className="relative pt-12">
        <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold leading-tight text-slate-900">
              Atención en{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent font-bold">
                Salud Mental <span className="font-light opacity-70 text-[0.8em]">y Discapacidad</span>
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
          
          {/* Gráfico decorativo lateral */}
          <div className="flex justify-center">
            <div className="w-full h-auto max-w-[450px] bg-slate-50 rounded-3xl p-10 shadow-inner border border-slate-100">
              <div className="space-y-6">
                <div className="h-2 w-20 bg-primary/20 rounded" />
                <div className="h-10 w-full bg-white rounded-xl shadow-sm flex items-center px-4 text-slate-400 font-medium">Acompañamos</div>
                <div className="h-10 w-full bg-white rounded-xl shadow-sm border-l-4 border-primary flex items-center px-4 text-primary font-bold">Incluimos</div>
                <div className="h-10 w-full bg-white rounded-xl shadow-sm flex items-center px-4 text-slate-400 font-medium">Transformamos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros con negrita atenuada pero presente */}
      <section id="nosotros" className="scroll-mt-[150px] py-32 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-4">Desde 2013</p>
          <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Quiénes Somos</h2>
          <p className="text-2xl text-slate-500 leading-relaxed max-w-5xl mx-auto font-light italic">
            Somos una Asociación Civil constituida en el año 2013. Brindamos atención en salud mental, discapacidad y problemáticas vinculadas a consumos. Ofrecemos prestaciones personalizadas con enfoque clínico comunitario.
          </p>
        </div>
      </section>

      {/* Otros componentes... */}
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

      <footer className="border-t py-20 text-center bg-slate-50 text-slate-400">
        <p className="text-2xl font-bold text-slate-900 mb-2">© 2013 ACAPIA</p>
        <p className="uppercase tracking-[0.15em] text-xs font-medium max-w-3xl mx-auto px-6 italic">
          Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental
        </p>
      </footer>
    </div>
  );
}
