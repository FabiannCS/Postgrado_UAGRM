"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";
import { helpTopics } from "../data";
import {
  AtencionAdminView,
  AdmisionView,
  ContactoView,
  FaqView,
} from "./_components";

// ─── Mapa de vistas ───

const topicViews: Record<string, React.ReactNode> = {
  "atencion-administrativa": <AtencionAdminView />,
  admision: <AdmisionView />,
  contacto: <ContactoView />,
  faq: <FaqView />,
};

// ─── Página dinámica ───

export default function AyudaTopicPage() {
  const params = useParams();
  const topicId = params.topic as string;

  const topic = helpTopics.find((t) => t.id === topicId);
  const content = topicViews[topicId];

  if (!topic || !content) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-lg font-semibold text-foreground">
          Tema no encontrado
        </p>
        <Link href="/dashboard/ayuda">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Ayuda
          </Button>
        </Link>
      </div>
    );
  }

  const Icon = topic.icon;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-10"
    >
      {/* HEADER CON NAVEGACIÓN */}
      <motion.div variants={itemVariants} className="space-y-4">
        <Link
          href="/dashboard/ayuda"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-uagrm-blue transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Volver a Ayuda
        </Link>

        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="px-3 py-1.5 border-uagrm-blue/30 bg-uagrm-blue/5"
          >
            <Icon className="h-4 w-4 text-uagrm-blue mr-1.5" />
            <span className="text-uagrm-blue font-semibold text-xs">
              {topic.title}
            </span>
          </Badge>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {topic.title}
        </h1>
        <p className="text-sm text-muted-foreground">{topic.description}</p>
      </motion.div>

      {/* CONTENIDO DINÁMICO */}
      <motion.div variants={itemVariants}>{content}</motion.div>
    </motion.div>
  );
}
