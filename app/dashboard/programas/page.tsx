"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Trophy, ListFilter, SearchX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Asegúrate de que la ruta de importación sea correcta
import { programsData, Program, ProgramStatus } from "./data";
import { ProgramCard } from "./components/program-card";

// Variantes de animación locales
const localContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const localItemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ProgramasPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<ProgramStatus | "Todos">("Todos");
  const [isMounted, setIsMounted] = useState(false);

  // Evitar hidratación incorrecta
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lógica de Filtrado Robusta
  const filteredPrograms = filter === "Todos"
    ? programsData
    : programsData.filter(p => p.status.trim() === filter);
  // .trim() ayuda si hay espacios accidentales en data.ts

  const filterOptions: (ProgramStatus | "Todos")[] = ["Todos", "Activo", "Por Iniciar", "Completado"];

  // Cálculo de resumen
  const summary = {
    total: programsData.length,
    active: programsData.filter(p => p.status === "Activo").length,
    completed: programsData.filter(p => p.status === "Completado").length
  };

  const handleViewDetails = (program: Program) => {
    router.push(`/dashboard/programas/${program.id}`);
  };

  if (!isMounted) return null;

  return (
    <motion.div
      variants={localContainerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Mis Programas</h1>
        <p className="text-sm text-muted-foreground">Historial de maestrías, diplomados y cursos de especialización.</p>
      </div>

      {/* 1. SECCIÓN DE RESUMEN */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Programas Totales</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.total}</div>
            <p className="text-xs text-muted-foreground">Historial académico completo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursando</CardTitle>
            <BookOpen className="h-4 w-4 text-uagrm-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-uagrm-blue">{summary.active}</div>
            <p className="text-xs text-muted-foreground">Programas en progreso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
            <Trophy className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{summary.completed}</div>
            <p className="text-xs text-muted-foreground">Titulaciones obtenidas</p>
          </CardContent>
        </Card>
      </div>

      {/* 2. FILTROS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide pt-2">
        <div className="flex items-center gap-2 pr-2 border-r border-border mr-2">
          <ListFilter className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">Estado:</span>
        </div>
        {filterOptions.map((option) => (
          <Button
            key={option}
            variant={filter === option ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(option)}
            className={`whitespace-nowrap rounded-full transition-all ${filter === option
              ? "bg-foreground text-background shadow-md border-transparent"
              : "border-border text-muted-foreground hover:text-foreground"
              }`}
          >
            {option}
          </Button>
        ))}
      </div>

      {/* 3. LISTA DE PROGRAMAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={localItemVariants}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              >
                <ProgramCard program={program} onViewDetails={handleViewDetails} />
              </motion.div>
            ))
          ) : (
            /* ESTADO VACÍO (Solución al problema de pantalla blanca) */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-12 flex flex-col items-center justify-center text-center p-8 bg-muted/30 border border-dashed rounded-lg"
            >
              <div className="bg-muted p-4 rounded-full mb-4">
                <SearchX className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">No se encontraron programas</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                No tienes programas registrados con el estado &quot;{filter}&quot;.
              </p>
              <Button
                variant="link"
                onClick={() => setFilter("Todos")}
                className="mt-4 text-uagrm-blue"
              >
                Ver todos los programas
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  );
}