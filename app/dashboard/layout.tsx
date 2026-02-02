import { Navbar } from "@/components/dashboard/navbar";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      
      {/* 1. BARRA SUPERIOR FIJA */}
      <Navbar />

      {/* 2. CONTENIDO PRINCIPAL CENTRADO */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Aquí insertamos el menú de pestañas horizontal */}
        <div className="flex flex-col space-y-2">
           {/* Título de página dinámico (opcional) o simplemente el menú */}
           <DashboardNav />
        </div>

        {/* El contenido de la página (Mis Notas, etc.) */}
        <div className="min-h-[500px]">
            {children}
        </div>

      </main>
      
      {/* Footer simple */}
      <footer className="py-6 text-center text-xs text-slate-400">
        © 2026 Universidad Autónoma Gabriel René Moreno
      </footer>
    </div>
  );
}