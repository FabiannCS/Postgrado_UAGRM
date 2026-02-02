"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, CalendarDays, Building2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

// 1. NUEVA ESTRUCTURA DE DATOS: Array de clases dentro de cada día
const weeklySchedule = [
  { 
    day: "Lunes", 
    classes: [
      { subject: "Análisis de Datos", time: "18:00 - 21:00 p.m.", room: "Aula 301", color: "border-blue-200 bg-blue-50 text-blue-700" },
      // EJEMPLO: Si tuvieras otra materia este día, se agrega aquí:
      { subject: "Inglés Técnico", time: "21:00 - 22:30 p.m.", room: "Virtual", color: "border-orange-200 bg-orange-50 text-orange-700" } 
    ]
  },
  { 
    day: "Martes", 
    classes: [
        { subject: "Liderazgo Organizacional", time: "18:00 - 21:00 p.m.", room: "Virtual", color: "border-purple-200 bg-purple-50 text-purple-700" }
    ]
  },
  { 
    day: "Miércoles", 
    classes: [
        { subject: "Análisis de Datos", time: "18:00 - 21:00 p.m.", room: "Aula 301", color: "border-blue-200 bg-blue-50 text-blue-700" }
    ]
  },
  { 
    day: "Jueves", 
    classes: [
        { subject: "Liderazgo Organizacional", time: "18:00 - 21:00 p.m.", room: "Virtual", color: "border-purple-200 bg-purple-50 text-purple-700" }
    ]
  },
  { 
    day: "Viernes", 
    classes: [] // Array vacío significa día libre
  },
];

const moduleDetails = [
  {
    name: "Análisis de Datos",
    schedule: "Lunes y Miércoles • 18:00 - 21:00 p.m.",
    status: "Activo",
    teacher: "Dr. Carlos Rodríguez",
    room: "Aula 301",
    startDate: "15 de Enero, 2025",
    endDate: "30 de Mayo, 2025",
    color: "blue"
  },
  {
    name: "Liderazgo Organizacional",
    schedule: "Martes y Jueves • 18:00 - 21:00 p.m.",
    status: "Activo",
    teacher: "Msc. Ana María Suárez",
    room: "Aula Virtual (Zoom)",
    startDate: "20 de Enero, 2025",
    endDate: "05 de Junio, 2025",
    color: "purple"
  }
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
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-8"
    >
      
      {/* 1. SECCIÓN: VISTA SEMANAL (Calendario Inteligente) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-blue-700" />
            <h2 className="text-xl font-bold text-slate-900">Horario de Clases - 2025-I</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weeklySchedule.map((dayItem, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col h-full">
                    {/* Cabecera del día */}
                    <div className="bg-slate-800 text-white text-center py-2 rounded-t-lg text-sm font-semibold uppercase tracking-wider shadow-sm">
                        {dayItem.day}
                    </div>
                    
                    {/* Cuerpo del horario (Renderiza lista de materias) */}
                    <Card className={`rounded-t-none border-t-0 flex-1 ${dayItem.classes.length === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                        <CardContent className="p-3 flex flex-col items-center justify-center text-center h-full min-h-[140px]">
                            
                            {dayItem.classes.length === 0 ? (
                                <span className="text-slate-400 text-sm italic">Sin actividad</span>
                            ) : (
                                <div className="w-full space-y-3">
                                    {dayItem.classes.map((cls, idx) => (
                                        <div key={idx} className="w-full">
                                            {/* Si hay más de una materia, ponemos un separador visual entre ellas */}
                                            {idx > 0 && <Separator className="my-3 bg-slate-400" />}
                                            
                                            <div className="flex flex-col items-center gap-1">
                                                <Badge variant="outline" className="mb-1 border-slate-200 text-slate-500 font-bold text-[13px]">
                                                    {cls.time}
                                                </Badge>
                                                <h3 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2">
                                                    {cls.subject}
                                                </h3>
                                                <div className={`mt-1 text-[12px] px-2 py-0.5 rounded-full font-medium border ${cls.color}`}>
                                                    {cls.room}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>

      {/* 2. SECCIÓN: DETALLES DE MÓDULOS */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Detalles de Módulos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {moduleDetails.map((module, i) => (
                <motion.div key={i} variants={itemVariants}>
                    <Card className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-start justify-between pb-2">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className={`text-lg font-bold ${module.color === 'blue' ? 'text-blue-900' : 'text-purple-900'}`}>
                                        {module.name}
                                    </h3>
                                    <Badge className={module.status === 'Activo' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}>
                                        {module.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center text-sm text-slate-500">
                                    <Clock className="mr-2 h-4 w-4 text-blue-600" />
                                    {module.schedule}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-6 pt-4">
                             <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Docente</span>
                                    <span className="text-sm font-medium text-slate-700">{module.teacher}</span>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ubicación</span>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-slate-600" />
                                        <span className="text-sm font-medium text-slate-700">{module.room}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-1 h-full ${module.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                                <div>
                                    <span className="text-xs text-slate-500 block mb-1">Fecha de Inicio</span>
                                    <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
                                        <Calendar className="h-4 w-4 text-green-600" />
                                        {module.startDate}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 block mb-1">Fecha de Finalización</span>
                                    <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
                                        <ArrowRight className="h-4 w-4 text-red-400" />
                                        {module.endDate}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>

      {/* 3. NUEVA SECCIÓN: HORARIO ADMINISTRATIVO */}
      <motion.div variants={itemVariants} className="pt-6">
        <div className="bg-slate-900 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg relative overflow-hidden">
            
            {/* Fondo decorativo sutil */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                    <Building2 className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                    <h3 className="text-lg font-bold">Horario de Atención Administrativa</h3>
                    <p className="text-blue-200/80 text-sm">Dirección de Postgrado - UAGRM</p>
                </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1 relative z-10 text-center md:text-right">
                <div className="flex items-center gap-2 text-lg font-semibold">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span>Lunes a Viernes: 08:00 - 17:00</span>
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