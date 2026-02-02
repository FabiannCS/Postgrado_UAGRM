"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  LayoutDashboard, 
  Users, 
  RefreshCcw, 
  LogOut,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Definimos las rutas del menú
const menuItems = [
  { href: "/dashboard", label: "Mis Notas", icon: LayoutDashboard },
  { href: "/dashboard/modulos", label: "Módulos Inscritos", icon: BookOpen },
  { href: "/dashboard/horarios", label: "Horarios", icon: Calendar },
  { href: "/dashboard/docentes", label: "Mis Docentes", icon: Users },
  { href: "/dashboard/programas", label: "Programas de Formación", icon: GraduationCap },
  { href: "/dashboard/readmision", label: "Readmisión", icon: RefreshCcw },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-slate-900 text-white">
      {/* 1. Header del Sidebar (Logo) */}
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-wide">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <span className="text-sm">U</span>
          </div>
          <span className="text-slate-100">Postgrado</span>
        </div>
      </div>

      {/* 2. Menú de Navegación */}
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <nav className="flex flex-col gap-1 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-blue-700 text-white shadow-md shadow-blue-900/20" // Estilo Activo
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100" // Estilo Inactivo
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-blue-200" : "text-slate-500")} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. Footer del Sidebar (Perfil resumido y Salir) */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-200 text-xs font-bold border border-blue-500/30">
                MG
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="truncate text-sm font-medium text-slate-200">María González</span>
                <span className="truncate text-xs text-slate-500">219004589</span>
            </div>
        </div>
        
        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30" asChild>
            <Link href="/login">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
            </Link>
        </Button>
      </div>
    </div>
  );
}