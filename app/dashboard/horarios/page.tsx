"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  Building2, 
  Phone,
  Download,
  Clock,
  MapPin,
  ListFilter // Icono para el filtro
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";

// DATOS DEL HORARIO
const weeklySchedule = [
  { 
    day: "Lunes", 
    classes: [
      { 
        program: "MBA", 
        programColor: "blue", 
        subject: "Gestión Estratégica", 
        time: "19:00 - 22:00", 
        room: "Aula 301", 
        modality: "Presencial"
      },
      {
        program: "DMD", 
        programColor: "red", 
        subject: "Marketing Digital", 
        time: "19:00 - 22:00", 
        room: "Aula 302", 
        modality: "Presencial"
      },
      {
        program: "DMD", 
        programColor: "red", 
        subject: "Taller de Marca Personal", 
        time: "18:30 - 22:30", 
        room: "Virtual", 
        modality: "Virtual"
      }
    ]
  },
  { 
    day: "Martes", 
    classes: [
      { 
        program: "DMD", 
        programColor: "red", 
        subject: "Estrategias SEO", 
        time: "18:30 - 21:30", 
        room: "Lab. Cómputo 2", 
        modality: "Presencial"
      }
    ]
  },
  { 
    day: "Miércoles", 
    classes: [
      { 
        program: "MBA",
        programColor: "blue",
        subject: "Gestión Estratégica", 
        time: "19:00 - 22:00", 
        room: "Virtual", 
        modality: "Virtual"
      }
    ]
  },
  { 
    day: "Jueves", 
    classes: [
      { 
        program: "DMD",
        programColor: "red",
        subject: "Estrategias SEO", 
        time: "18:30 - 21:30", 
        room: "Lab. Cómputo 2", 
        modality: "Presencial"
      },
      {
        program: "DMD", 
        programColor: "red", 
        subject: "Taller de Marca Personal", 
        time: "18:30 - 22:30", 
        room: "Aula 301", 
        modality: "Presencial"
      }
    ]
  },
  { 
    day: "Viernes", 
    classes: [] // Día libre
  },
  { 
    day: "Sábado", 
    classes: [
      { 
        program: "MBA",
        programColor: "blue",
        subject: "Taller de Habilidades Directivas", 
        time: "08:00 - 13:00", 
        room: "Auditorio Principal", 
        modality: "Seminario"
      }
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function HorariosPage() {
  // 1. ESTADO DEL FILTRO
  const [filter, setFilter] = useState("Todos");

  // 2. OBTENER LISTA ÚNICA DE PROGRAMAS (Dinámicamente)
  // Recorremos todos los días, extraemos los programas de las clases, y creamos un Set único.
  const allPrograms = weeklySchedule.flatMap(day => day.classes.map(cls => cls.program));
  const uniquePrograms = ["Todos", ...Array.from(new Set(allPrograms))];

  // 3. LÓGICA DE FILTRADO
  // Creamos un nuevo array de horario donde filtramos las clases DENTRO de cada día
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

      {/* GRILLA DE HORARIO (Lunes a Sábado) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSchedule.map((dayItem, index) => (
                <motion.div 
                    key={index} // Usamos index porque los días son fijos
                    variants={itemVariants} 
                    layout // Animación suave al cambiar tamaño
                    className="flex flex-col h-full"
                >
                    {/* Cabecera del día */}
                    <div className="bg-slate-800 dark:bg-slate-900 text-white text-center py-2 rounded-t-lg text-sm font-bold uppercase tracking-wider shadow-sm border-b border-slate-700">
                        {dayItem.day}
                    </div>
                    
                    {/* Cuerpo del horario */}
                    <Card className={`rounded-t-none border-t-0 flex-1 ${dayItem.classes.length === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                        <CardContent className="p-3 flex flex-col items-center justify-start text-center h-full min-h-[160px]">
                            
                            {dayItem.classes.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-muted-foreground/50">
                                    <span className="text-sm italic">Sin actividad</span>
                                </div>
                            ) : (
                                <div className="w-full space-y-3">
                                    {dayItem.classes.map((cls, idx) => (
                                        <motion.div 
                                            key={`${cls.subject}-${idx}`} 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="w-full text-left group"
                                        >
                                            {idx > 0 && <Separator className="my-3" />}
                                            
                                            <div className="flex flex-col gap-1.5">
                                                {/* BADGE DEL PROGRAMA */}
                                                <div className="flex justify-between items-start">
                                                    <Badge variant="secondary" className={`
                                                        text-[10px] font-bold px-1.5 h-5 border
                                                        ${cls.programColor === 'blue' 
                                                            ? 'bg-blue-50 text-uagrm-blue border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' 
                                                            : 'bg-red-50 text-uagrm-red border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'}
                                                    `}>
                                                        {cls.program}
                                                    </Badge>
                                                    <span className="text-[10px] font-mono font-medium text-muted-foreground bg-muted px-1 rounded">
                                                        {cls.time}
                                                    </span>
                                                </div>

                                                {/* NOMBRE DE LA MATERIA */}
                                                <h3 className="font-bold text-foreground text-xs leading-snug line-clamp-2 group-hover:text-uagrm-blue transition-colors">
                                                    {cls.subject}
                                                </h3>
                                                
                                                {/* AULA Y MODALIDAD */}
                                                <div className="flex items-center gap-1.5 mt-1">
                                                    <MapPin className="h-3 w-3 text-muted-foreground" />
                                                    <span className="text-[10px] text-muted-foreground font-medium truncate">
                                                        {cls.room}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </motion.div>
            ))}
          </AnimatePresence>
      </div>

      {/* HORARIO ADMINISTRATIVO */}
      <motion.div variants={itemVariants} className="pt-2">
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg relative overflow-hidden border border-slate-800">
            
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-uagrm-blue rounded-full opacity-20 blur-3xl"></div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                    <Building2 className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                    <h3 className="text-lg font-bold">Atención Administrativa</h3>
                    <p className="text-blue-200/80 text-sm">Dirección de Postgrado - UAGRM</p>
                </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1 relative z-10 text-center md:text-right">
                <div className="flex items-center gap-2 text-lg font-semibold">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span>Lun a Vie: 08:00 - 16:00</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Phone className="h-3 w-3" />
                    <span>Contacto: 3-333-4444 int 123</span>
                </div>
            </div>

        </div>
      </motion.div>

    </motion.div>
  );
}