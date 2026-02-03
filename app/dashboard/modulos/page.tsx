"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  CalendarClock,
  MapPin,
  Users,
  BookOpen,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Datos de ejemplo (Incluyendo el que pediste exacto)
const modules = [
  {
    id: 1,
    name: "Análisis de Datos",
    code: "MBA-201",
    credits: 3,
    status: "Activo",
    teacher: "Dr. Carlos Rodríguez",
    teacherAvatar: "/avatars/teacher1.png", // Fallback a iniciales si no hay img
    schedule: "Lunes y Miércoles 18:00 - 21:00",
    room: "Aula 301 - Pabellón B",
    enrolled: 25,
    maxStudents: 30,
    progress: 60,
    color: "bg-blue-600", // Color distintivo para la materia
  },
  {
    id: 2,
    name: "Liderazgo Organizacional",
    code: "MBA-202",
    credits: 3,
    status: "Activo",
    teacher: "Msc. Ana María Suárez",
    teacherAvatar: "",
    schedule: "Martes y Jueves 19:00 - 22:00",
    room: "Aula Virtual (Zoom)",
    enrolled: 28,
    maxStudents: 30,
    progress: 35,
    color: "bg-purple-600",
  },
  {
    id: 3,
    name: "Marketing Estratégico",
    code: "MBA-203",
    credits: 4,
    status: "Por Iniciar",
    teacher: "Ing. Roberto Mendez",
    teacherAvatar: "",
    schedule: "Viernes 18:00 - 22:00",
    room: "Aula 105 - Pabellón A",
    enrolled: 15,
    maxStudents: 30,
    progress: 0,
    color: "bg-emerald-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ModulosPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Encabezado de Sección */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Módulos Inscritos</h1>
          <p className="text-sm text-muted-foreground">Gestión Académica - Periodo 2025-I</p>
        </div>
        <Button variant="outline" className="gap-2">
          <BookOpen className="h-4 w-4" />
          Descargar Boleta de Inscripción
        </Button>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {modules.map((module) => (
          <motion.div key={module.id} variants={itemVariants}>
            <Card className="overflow-hidden border-border dark:bg-card shadow-sm hover:shadow-md transition-all duration-300 group">

              {/* Header de la Tarjeta (Color + Info Principal) */}
              <div className="relative">
                <div className={`h-2 w-full ${module.color}`}></div>
                <CardHeader className="pb-3 pt-5 px-5 flex flex-row items-start justify-between space-y-0">
                  <div className="space-y-1.5">
                    <Badge
                      variant="secondary"
                      className={`
                                    mb-2 font-medium border
                                    ${module.status === 'Activo' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' : ''}
                                    ${module.status === 'Por Iniciar' ? 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700' : ''}
                                `}
                    >
                      {module.status}
                    </Badge>
                    <h3 className="font-bold text-lg leading-tight text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {module.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {module.code} • {module.credits} Créditos
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </CardHeader>
              </div>

              <Separator className="bg-border" />

              {/* Contenido (Docente, Horario, Aula) */}
              <CardContent className="p-5 space-y-5">

                {/* Docente */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={module.teacherAvatar} />
                    <AvatarFallback className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs">
                      {module.teacher.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">Docente</span>
                    <span className="text-sm font-medium text-foreground">{module.teacher}</span>
                  </div>
                </div>

                {/* Detalles (Grid interno) */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900/30 p-2.5 rounded-lg border border-border">
                    <CalendarClock className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">Horario</span>
                      <span className="text-sm text-muted-foreground">{module.schedule}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900/30 p-2.5 rounded-lg border border-border">
                    <MapPin className="h-4 w-4 text-red-500 dark:text-red-400 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">Aula</span>
                      <span className="text-sm text-muted-foreground">{module.room}</span>
                    </div>
                  </div>
                </div>

              </CardContent>

              {/* Footer (Estudiantes y Progreso) */}
              <CardFooter className="bg-slate-50/50 dark:bg-slate-900/20 p-5 pt-3 flex flex-col gap-3 border-t border-border">

                {/* Info de estudiantes */}
                <div className="flex w-full items-center justify-between text-sm text-muted-foreground mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span><strong className="text-foreground">{module.enrolled}</strong>/{module.maxStudents} Estudiantes</span>
                  </div>
                  <span className="font-semibold text-blue-700 dark:text-blue-400">{module.progress}% Completado</span>
                </div>

                {/* Barra de Progreso */}
                <Progress value={module.progress} className="h-2 bg-secondary" indicatorClassName={module.color} />

              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}