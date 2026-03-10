"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Video, BookOpen, Clock } from "lucide-react";

// Importamos la data y componentes
import { scheduleData } from "./data";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function HorariosPage() {
  const { currentModule, upcomingSessions, nextModule } = scheduleData;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-10"
    >
      {/* HEADER DE LA PÁGINA */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Mi Horario</h1>
      </div>

      {/* AGENDA DE PRÓXIMAS CLASES (Línea de tiempo) */}
      <motion.div variants={itemVariants} className="space-y-4 pt-2">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
            <CalendarDays className="h-5 w-5 text-uagrm-blue" />
            Próximas Clases
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-uagrm-blue border-uagrm-blue font-bold uppercase tracking-wider text-[10px] bg-uagrm-blue/5">
                Módulo Actual
              </Badge>
              <span className="font-semibold text-foreground">{currentModule.name}</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> Días y Horas: {currentModule.scheduleRule}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className={`flex flex-col sm:flex-row gap-4 p-4 rounded-xl border transition-all ${session.isToday
                ? "bg-blue-50/50 border-uagrm-blue/40 shadow-sm dark:bg-blue-900/10"
                : "bg-card hover:border-border/80 border-border/40"
                }`}
            >
              {/* Fecha Izquierda */}
              <div className="sm:w-1/4 flex flex-col justify-center border-l-2 pl-3 border-uagrm-blue shrink-0">
                {session.isToday && (
                  <span className="text-[10px] font-bold text-uagrm-blue uppercase mb-1">¡Clase Hoy!</span>
                )}
                <span className={`font-bold ${session.isToday ? 'text-uagrm-blue' : 'text-foreground'}`}>
                  {session.date.split(',')[0]}
                </span>
                <span className="text-sm font-semibold text-muted-foreground">{session.date.split(',')[1]}</span>
              </div>

              {/* Detalles Derecha */}
              <div className="sm:w-3/4 flex flex-col justify-center space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-sm text-foreground">{session.type}</span>
                  <Badge variant="secondary" className="font-mono text-xs h-5 bg-background">
                    {session.time}
                  </Badge>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-medium ${session.isVirtual ? 'text-amber-600 dark:text-amber-500' : 'text-emerald-600 dark:text-emerald-500'
                  }`}>
                  {session.isVirtual ? <Video className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
                  {session.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* TARJETA DE PRÓXIMO MÓDULO - DEBAJO DEL HORARIO */}
      <motion.div variants={itemVariants}>
        <Card className="bg-slate-900 text-white border-none relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
            <BookOpen className="h-32 w-32" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-200 font-medium uppercase tracking-wider">
              Siguiente Módulo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div>
              <p className="font-bold text-lg leading-tight mb-1">{nextModule.name}</p>
              <p className="text-sm text-blue-100 flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> Inicia: {nextModule.startDate}
              </p>
            </div>
            <div className="pt-3 border-t border-white/20">
              <p className="text-xs text-blue-200">Docente asignado:</p>
              <p className="text-sm font-semibold">{nextModule.teacher}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}