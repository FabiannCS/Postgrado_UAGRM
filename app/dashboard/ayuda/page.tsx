"use client";

import { motion } from "framer-motion";
import { LifeBuoy } from "lucide-react";
import { containerVariants } from "@/lib/animations";
import { helpTopics } from "./data";
import { HelpTopicCard } from "./components/help-topic-card";

export default function AyudaPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-10"
    >
      {/* HEADER */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <LifeBuoy className="h-6 w-6 text-uagrm-blue" />
          Centro de Ayuda
        </h1>
        <p className="text-sm text-muted-foreground">
          Encuentra información sobre trámites, horarios y servicios del
          Postgrado.
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {helpTopics.map((topic) => (
          <HelpTopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </motion.div>
  );
}
