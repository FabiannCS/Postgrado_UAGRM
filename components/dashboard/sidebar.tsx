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
import Image from "next/image";

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
    <div className="flex h-full flex-col bg-card text-card-foreground border-r border-border">
      {/* 1. Header del Sidebar (Logo) */}
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-wide">
          <div className="flex h-8 w-8 items-center justify-center">
            <Image
              src="/Autonomous_University_Gabriel_Rene_Moreno_Logo.svg.png"
              alt="Logo UAGRM"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-foreground">Postgrado</span>
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
                    ? "bg-uagrm-blue text-white shadow-md shadow-uagrm-blue/20" // Estilo Activo
                    : "text-muted-foreground hover:bg-muted hover:text-foreground" // Estilo Inactivo
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. Footer del Sidebar (Perfil resumido y Salir) */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold border border-primary/20">
            MG
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-medium text-foreground">María González</span>
            <span className="truncate text-xs text-muted-foreground">219004589</span>
          </div>
        </div>

        <Button variant="ghost" className="w-full justify-start text-uagrm-red hover:text-uagrm-red hover:bg-red-50 dark:hover:bg-red-950/30" asChild>
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Link>
        </Button>
      </div>
    </div>
  );
}