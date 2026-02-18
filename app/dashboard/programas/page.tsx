"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Trophy, Filter, ListFilter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Imports modularizados
import { programsData, Program, ProgramStatus } from "./data";
import { ProgramCard } from "./components/program-card";
import { ProgramDetailsModal } from "./components/program-details-modal";

import { containerVariants, itemVariants } from "@/lib/animations";

export default function ProgramasPage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<ProgramStatus | "Todos">("Todos");

  // Lógica de Filtrado
  const filteredPrograms = filter === "Todos"
    ? programsData
    : programsData.filter(p => p.status === filter);

  const filterOptions: (ProgramStatus | "Todos")[] = ["Todos", "Activo", "Por Iniciar", "Completado"];

  // CÁLCULO DINÁMICO DEL RESUMEN (Stats)
  const summary = {
    total: programsData.length,
    active: programsData.filter(p => p.status === "Activo").length,
    completed: programsData.filter(p => p.status === "Completado").length
  };

  const handleViewDetails = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Mis Programas</h1>
        <p className="text-sm text-muted-foreground">Historial de maestrías, diplomados y cursos de especialización.</p>
      </div>

      {/* 1. SECCIÓN DE RESUMEN (Original restaurada) */}
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

      {/* 2. BARRA DE FILTROS */}
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

      {/* 3. GRILLA DE PROGRAMAS (Cards Originales) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ProgramCard program={program} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}

          {filteredPrograms.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground bg-muted/30 rounded-lg border border-dashed border-border">
              <Filter className="h-10 w-10 mx-auto mb-3 opacity-20" />
              <p>No tienes programas con el estado &quot;{filter}&quot;.</p>
              <Button variant="link" onClick={() => setFilter("Todos")} className="mt-2 text-uagrm-blue">
                Ver todos los programas
              </Button>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. MODAL DE DETALLES */}
      <ProgramDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        program={selectedProgram}
      />

    </motion.div>
  );
}