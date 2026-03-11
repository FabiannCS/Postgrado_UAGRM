"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { programsData, Program, ProgramStatus } from "./data";
import { SummaryCards, ProgramFilter, ProgramList } from "./components";

export default function ProgramasPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<ProgramStatus | "Todos">("Todos");

  const filteredPrograms =
    filter === "Todos"
      ? programsData
      : programsData.filter((p) => p.status.trim() === filter);

  const handleViewDetails = (program: Program) => {
    router.push(`/dashboard/programas/${program.id}`);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-10"
    >
      {/* HEADER */}
      <motion.div variants={itemVariants} className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Mis Programas
        </h1>
        <p className="text-sm text-muted-foreground">
          Gestiona y consulta el estado de los programas en los que estás
          inscrito.
        </p>
      </motion.div>

      {/* RESUMEN */}
      <motion.div variants={itemVariants}>
        <SummaryCards />
      </motion.div>

      {/* FILTROS */}
      <motion.div variants={itemVariants}>
        <ProgramFilter
          filter={filter}
          onFilterChange={setFilter}
          resultCount={filteredPrograms.length}
        />
      </motion.div>

      {/* LISTA DE PROGRAMAS */}
      <motion.div variants={itemVariants}>
        <ProgramList
          programs={filteredPrograms}
          filter={filter}
          onViewDetails={handleViewDetails}
          onResetFilter={() => setFilter("Todos")}
        />
      </motion.div>
    </motion.div>
  );
}