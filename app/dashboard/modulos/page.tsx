"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ListFilter, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Importamos nuestros componentes y datos refactorizados
import { modulesData, Module } from "./data";
import { ModuleCard } from "./components/module-card";
import { ModuleDetailsModal } from "./components/module-details-modal";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ModulosPage() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("Todos");

  // Lógica de Filtrado
  const uniquePrograms = ["Todos", ...Array.from(new Set(modulesData.map(m => m.program)))];
  const filteredModules = filter === "Todos" 
    ? modulesData 
    : modulesData.filter(m => m.program === filter);

  // Manejador para abrir el modal
  const handleViewDetails = (module: Module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Mis Módulos</h1>
        <p className="text-sm text-muted-foreground">Gestión de asignaturas inscritas, horarios y material de avance.</p>
      </div>

      {/* BARRA DE FILTROS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center gap-2 pr-2 border-r border-border mr-2">
            <ListFilter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground hidden sm:block">Filtrar por:</span>
        </div>
        
        {uniquePrograms.map((programName) => (
            <Button
                key={programName}
                variant={filter === programName ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(programName)}
                className={`whitespace-nowrap rounded-full transition-all ${
                    filter === programName 
                    ? "bg-uagrm-blue hover:bg-uagrm-blue/90 text-white border-transparent shadow-md" 
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
                {programName}
            </Button>
        ))}
      </div>

      {/* GRILLA DE MÓDULOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
            {filteredModules.map((module) => (
                <motion.div 
                    key={module.id} 
                    variants={itemVariants}
                    layout 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                >
                   {/* Usamos el componente Card refactorizado */}
                   <ModuleCard module={module} onViewDetails={handleViewDetails} />
                </motion.div>
            ))}
            
            {filteredModules.length === 0 && (
                 <div className="col-span-full text-center py-12 text-muted-foreground">
                    <Filter className="h-10 w-10 mx-auto mb-3 opacity-20" />
                    <p>No se encontraron módulos para este programa.</p>
                 </div>
            )}
        </AnimatePresence>
      </div>

      {/* MODAL DE DETALLES (Uno solo para toda la página, mejor rendimiento) */}
      <ModuleDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        module={selectedModule} 
      />

    </motion.div>
  );
}