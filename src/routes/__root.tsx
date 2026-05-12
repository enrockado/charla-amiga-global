import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <div>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>404</h1>
        <p>Página no encontrada</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Volver al inicio</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <div>
        <h2>Algo salió mal</h2>
        <button onClick={() => { router.invalidate(); reset(); }} style={{ padding: '10px 20px', marginTop: '10px' }}>
          Reintentar
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ACAPIA - Salud Mental" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        
        {/* FOOTER UNIFICADO EN FRANJA OSCURA */}
        <footer style={{ 
          width: '100%', 
          padding: '50px 20px', 
          textAlign: 'center',
          backgroundColor: '#1A1F2C', // Color oscuro institucional
          color: '#ffffff',
          marginTop: 'auto'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.4rem', margin: '0 0 8px 0', letterSpacing: '0.5px' }}>
                © 2013 ACAPIA
              </p>
              <p style={{ fontSize: '1.1rem', margin: '0 0 10px 0', opacity: 0.9 }}>
                Salud Mental y Discapacidad
              </p>
              <p style={{ fontSize: '14px', opacity: 0.7, fontStyle: 'italic', lineHeight: '1.5', maxWidth: '600px', margin: '0 auto' }}>
                Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental.
              </p>
            </div>
            
            {/* Divisor y Datos Legales */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
              <p style={{ fontSize: '12px', opacity: 0.5, margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Personería Jurídica otorgada por Res
