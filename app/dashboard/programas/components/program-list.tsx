"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import { Program, ProgramStatus } from "../data";
import { ProgramCard } from "./program-card";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

interface ProgramListProps {
  programs: Program[];
  filter: ProgramStatus | "Todos";
  onViewDetails: (program: Program) => void;
  onResetFilter: () => void;
}

export function ProgramList({
  programs,
  filter,
  onViewDetails,
  onResetFilter,
}: ProgramListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {programs.length > 0 ? (
          programs.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
            >
              <ProgramCard program={program} onViewDetails={onViewDetails} />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-12 flex flex-col items-center justify-center text-center p-8 bg-muted/30 border border-dashed rounded-lg"
          >
            <div className="bg-muted p-4 rounded-full mb-4">
              <SearchX className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              No se encontraron programas
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              No tienes programas registrados con el estado &quot;{filter}
              &quot;.
            </p>
            <Button
              variant="link"
              onClick={onResetFilter}
              className="mt-4 text-uagrm-blue"
            >
              Ver todos los programas
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
