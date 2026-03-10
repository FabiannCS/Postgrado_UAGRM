"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Building2,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  FileText,
  Banknote,
  UserCheck,
  ChevronRight,
  MessageCircleQuestion,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  helpTopics,
  adminContent,
  admisionContent,
  contactoContent,
  faqContent,
} from "../data";

// ─── Sub-componentes de contenido por topic ───

function AtencionAdminView() {
  return (
    <div className="space-y-6">
      {/* Banner card */}
      <Card className="bg-slate-900 dark:bg-black text-white border-none relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-uagrm-blue rounded-full opacity-20 blur-3xl" />
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <Building2 className="h-6 w-6 text-blue-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{adminContent.title}</h3>
              <p className="text-blue-200/80 text-sm">
                {adminContent.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-center md:text-right">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>{adminContent.schedule}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Phone className="h-3 w-3" />
              <span>Contacto: {adminContent.phone}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ubicación */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MapPin className="h-4 w-4 text-uagrm-blue" />
            Ubicación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {adminContent.location}
          </p>
        </CardContent>
      </Card>

      {/* Notas */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Información Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {adminContent.notes.map((note, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <div className="mt-0.5 h-5 w-5 rounded-full border border-border flex items-center justify-center bg-muted shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-uagrm-blue" />
                </div>
                <span className="text-muted-foreground">{note}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function AdmisionView() {
  const stepIcons = [FileText, Banknote, UserCheck];

  return (
    <div className="space-y-6">
      {admisionContent.sections.map((section, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <Card
            className={
              section.heading.includes("Proceso")
                ? "border-t-4 border-t-uagrm-blue"
                : ""
            }
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                {section.heading.includes("Proceso") ? (
                  <ChevronRight className="h-4 w-4 text-uagrm-blue" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-uagrm-blue" />
                )}
                {section.heading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Items list */}
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm group">
                      <div className="mt-0.5 h-5 w-5 rounded-full border border-border flex items-center justify-center bg-muted group-hover:bg-blue-50 group-hover:border-blue-200 dark:group-hover:bg-blue-900/20 transition-colors shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-uagrm-blue" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Steps timeline */}
              {section.steps && (
                <div className="relative border-l border-border ml-3 space-y-8 pb-2">
                  {section.steps.map((step, i) => {
                    const StepIcon = stepIcons[i] || FileText;
                    return (
                      <div key={i} className="relative pl-8">
                        <span className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center z-10">
                          <StepIcon className="h-3 w-3 text-muted-foreground" />
                        </span>
                        <h4 className="text-sm font-bold text-foreground">
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function ContactoView() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-900 dark:bg-black border-slate-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-uagrm-blue rounded-full opacity-10 blur-3xl pointer-events-none" />
        <CardContent className="p-6 sm:p-8 space-y-6 relative z-10">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Canales de Comunicación</h3>
            <p className="text-slate-400 text-sm">
              Ponte en contacto con el equipo de Postgrado por cualquiera de
              estos medios.
            </p>
          </div>

          <div className="space-y-3">
            {contactoContent.channels.map((channel, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="bg-uagrm-blue/20 p-2 rounded-full">
                  {channel.type === "email" ? (
                    <Mail className="h-4 w-4 text-blue-300" />
                  ) : channel.type === "phone" ? (
                    <Phone className="h-4 w-4 text-green-400" />
                  ) : (
                    <Clock className="h-4 w-4 text-amber-400" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400">{channel.label}</p>
                  <p className="text-sm font-medium">{channel.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="bg-white/10" />

          <p className="text-xs text-slate-400">{contactoContent.socialNote}</p>
        </CardContent>
      </Card>
    </div>
  );
}

function FaqView() {
  return (
    <div className="space-y-4">
      {faqContent.items.map((item, i) => (
        <motion.div key={i} variants={itemVariants}>
          <Card className="group hover:border-uagrm-blue/30 transition-colors">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 bg-violet-100 dark:bg-violet-900/30 p-1.5 rounded-full shrink-0">
                  <MessageCircleQuestion className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">
                  {item.question}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                {item.answer}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

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
