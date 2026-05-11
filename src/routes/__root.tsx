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
        
        <footer style={{ 
          width: '100%', 
          padding: '40px 20px', 
          borderTop: '1px solid #eaeaea', 
          textAlign: 'center',
          backgroundColor: '#ffffff',
          marginTop: 'auto'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#333' }}>
              © 2013 ACAPIA | Salud Mental y Discapacidad
            </p>
            <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px', lineHeight: '1.4' }}>
              Asociación Civil para la Asistencia, Prevención, Investigación y Acompañamiento en Salud Mental.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '11px', color: '#999', margin: 0 }}>
              Personería Jurídica otorgada por Res. IGJ N° 1576. CUIT 33-71464384-9.
            </p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
