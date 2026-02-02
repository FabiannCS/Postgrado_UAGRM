"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const items = [
  { href: "/dashboard", title: "Mis Notas" },
  { href: "/dashboard/modulos", title: "Módulos Inscritos" },
  { href: "/dashboard/horarios", title: "Horarios" },
  { href: "/dashboard/docentes", title: "Mis Docentes" },
  { href: "/dashboard/programas", title: "Programas" },
  { href: "/dashboard/readmision", title: "Readmisión" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-hide"> 
      {/* Container con scroll horizontal para móviles */}
      <nav className="flex items-center space-x-1 md:space-x-2">
        {items.map((item) => {
            const isActive = pathname === item.href;
            return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full whitespace-nowrap",
                        isActive 
                            ? "text-blue-700" 
                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    )}
                >
                    {isActive && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-blue-50 border border-blue-200 rounded-full"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{item.title}</span>
                </Link>
            )
        })}
      </nav>
    </div>
  );
}