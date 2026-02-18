"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Download, ListFilter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants } from "@/lib/animations";

// Imports modularizados
import { weeklySchedule } from "./data";
import { DayScheduleCard } from "./components/day-schedule-card";
import { AdminHoursCard } from "./components/admin-hours-card";

export default function HorariosPage() {
  // 1. ESTADO DEL FILTRO
  const [filter, setFilter] = useState("Todos");

  // 2. OBTENER LISTA ÚNICA DE PROGRAMAS (Dinámicamente)
  const allPrograms = weeklySchedule.flatMap(day => day.classes.map(cls => cls.program));
  const uniquePrograms = ["Todos", ...Array.from(new Set(allPrograms))];

  // 3. LÓGICA DE FILTRADO
  const filteredSchedule = weeklySchedule.map(day => ({
    ...day,
    classes: day.classes.filter(cls => filter === "Todos" || cls.program === filter)
  }));

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-8"
    >

      {/* ENCABEZADO */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <CalendarDays className="h-6 w-6 text-uagrm-blue" />
            Horario de Clases
          </h1>
        </div>

        <Button variant="outline" className="gap-2 border-border hover:bg-muted text-foreground transition-all">
          <Download className="h-4 w-4" />
          Descargar PDF
        </Button>
      </div>

      {/* 4. BARRA DE FILTROS (PILLS) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center gap-2 pr-2 border-r border-border mr-2">
          <ListFilter className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">Ver horario de:</span>
        </div>

        {uniquePrograms.map((programName) => (
          <Button
            key={programName}
            variant={filter === programName ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(programName)}
            className={`whitespace-nowrap rounded-full transition-all ${filter === programName
              ? "bg-uagrm-blue hover:bg-uagrm-blue/90 text-white border-transparent shadow-md"
              : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
          >
            {programName}
          </Button>
        ))}
      </div>

      {/* GRILLA DE HORARIO (Lunes a Sábado) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSchedule.map((dayItem, index) => (
            <DayScheduleCard key={index} dayItem={dayItem} />
          ))}
        </AnimatePresence>
      </div>

      {/* HORARIO ADMINISTRATIVO */}
      <AdminHoursCard />

    </motion.div>
  );
}