"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Calendar, 
  User, 
  Mail, 
  CheckCircle2,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Datos proporcionados
const summary = {
  total: 3,
  active: 2,
  completed: 1
};

const programs = [
  {
    id: 1,
    type: "Maestría",
    name: "Maestría en Administración de Empresas",
    code: "MBA",
    status: "Activo",
    description: "Programa enfocado en el desarrollo de habilidades directivas y estratégicas para la gestión empresarial moderna.",
    startDate: "Marzo 2024",
    endDate: "Diciembre 2025",
    period: "2025-I",
    progress: 45,
    creditsCompleted: 27,
    totalCredits: 60,
    coordinator: "Dr. Roberto Silva",
    coordinatorEmail: "mba@universidad.edu",
    theme: "blue" // Color del tema
  },
  {
    id: 2,
    type: "Especialización",
    name: "Especialización en Marketing Digital",
    code: "EMD",
    status: "Completado",
    description: "Especialización en estrategias digitales, redes sociales y comercio electrónico.",
    startDate: "Enero 2023",
    endDate: "Diciembre 2023",
    period: "Finalizado",
    progress: 100,
    creditsCompleted: 30,
    totalCredits: 30,
    coordinator: "Dra. Laura Fernández",
    coordinatorEmail: "marketing@universidad.edu",
    theme: "green"
  },
  {
    id: 3,
    type: "Diplomado",
    name: "Diplomado en Gestión de Proyectos",
    code: "DGP",
    status: "Activo",
    description: "Diplomado enfocado en metodologías ágiles y gestión efectiva de proyectos empresariales.",
    startDate: "Febrero 2025",
    endDate: "Agosto 2025",
    period: "2025-I",
    progress: 25,
    creditsCompleted: 5,
    totalCredits: 20,
    coordinator: "Mg. Pedro Sánchez",
    coordinatorEmail: "proyectos@universidad.edu",
    theme: "orange"
  }
];

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ProgramasPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      
      {/* 1. ENCABEZADO Y RESUMEN ACADÉMICO */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Mis Programas de Formación</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card Total */}
            <motion.div variants={itemVariants}>
                <Card className="bg-white border-slate-200 shadow-sm">
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-3 bg-slate-100 rounded-full text-slate-600">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total de Programas</p>
                            <h2 className="text-2xl font-bold text-slate-900">{summary.total}</h2>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            
            {/* Card Activos */}
            <motion.div variants={itemVariants}>
                <Card className="bg-white border-slate-200 shadow-sm">
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Programas Activos</p>
                            <h2 className="text-2xl font-bold text-blue-700">{summary.active}</h2>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Card Completados */}
            <motion.div variants={itemVariants}>
                <Card className="bg-white border-slate-200 shadow-sm">
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-3 bg-green-50 rounded-full text-green-600">
                            <Trophy className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Completados</p>
                            <h2 className="text-2xl font-bold text-green-700">{summary.completed}</h2>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>

      {/* 2. LISTA DE PROGRAMAS (GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {programs.map((prog) => (
            <motion.div key={prog.id} variants={itemVariants}>
                <Card className="overflow-hidden border-slate-200 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    
                    {/* Header del Programa */}
                    <div className="relative">
                        {/* Línea superior de color */}
                        
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="outline" className={`
                                    border font-medium uppercase tracking-wider text-[10px]
                                    ${prog.theme === 'blue' ? 'border-blue-200 text-blue-700 bg-blue-50' : 
                                      prog.theme === 'green' ? 'border-emerald-200 text-emerald-700 bg-emerald-50' : 
                                      'border-orange-200 text-orange-700 bg-orange-50'}
                                `}>
                                    {prog.type} • {prog.code}
                                </Badge>
                                <div className="flex gap-2">
                                    <Badge className={`
                                        ${prog.status === 'Activo' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'}
                                    `}>
                                        {prog.status}
                                    </Badge>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                {prog.name}
                            </h3>
                            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                {prog.description}
                            </p>
                        </CardHeader>
                    </div>

                    {/* Cuerpo de Detalles */}
                    <CardContent className="space-y-6 flex-1">
                        
                        {/* Fechas Grid */}
                        <div className="grid grid-cols-2 gap-4 bg-slate-100 p-4 rounded-lg border border-slate-100 text-sm">
                            <div className="space-y-1">
                                <span className="text-xs text-slate-400 font-medium uppercase">Inicio</span>
                                <div className="flex items-center gap-2 font-medium text-slate-700">
                                    <Calendar className="h-3.5 w-3.5 text-slate-500" />
                                    {prog.startDate}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-slate-400 font-medium uppercase">Finalización</span>
                                <div className="flex items-center gap-2 font-medium text-slate-700">
                                    <Calendar className="h-3.5 w-3.5 text-slate-500" />
                                    {prog.endDate}
                                </div>
                            </div>
                            <div className="col-span-2 pt-2 border-t border-slate-500 mt-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium uppercase">Periodo Actual</span>
                                    <Badge variant="secondary" className="bg-white border-slate-400 text-slate-700 font-bold">
                                        {prog.period}
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Coordinador */}
                        <div className="flex items-center gap-3 pl-1">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-00 border border-slate-300">
                                <User className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-slate-400 uppercase">Coordinador</span>
                                <span className="text-sm font-medium text-slate-800">{prog.coordinator}</span>
                                <div className="flex items-center gap-1 text-xs text-blue-600 mt-0.5 hover:underline cursor-pointer">
                                    <Mail className="h-3 w-3" />
                                    {prog.coordinatorEmail}
                                </div>
                            </div>
                        </div>

                    </CardContent>

                    <Separator />

                    {/* Footer de Progreso */}
                    <CardFooter className="bg-slate-50/50 p-5 pt-4 flex flex-col gap-2">
                        <div className="flex justify-between items-end w-full mb-1">
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 font-medium">Progreso del Programa</span>
                                <span className="text-sm font-bold text-slate-800">
                                    {prog.creditsCompleted} <span className="text-slate-400 font-normal">de</span> {prog.totalCredits} <span className="text-slate-400 font-normal">créditos</span>
                                </span>
                            </div>
                            <span className={`text-lg font-bold ${
                                prog.progress === 100 ? 'text-emerald-600' : 'text-blue-700'
                            }`}>
                                {prog.progress}%
                            </span>
                        </div>
                        <Progress 
                            value={prog.progress} 
                            className="h-2.5 bg-slate-200" 
                            indicatorClassName={
                                prog.progress === 100 ? 'bg-emerald-500' : 
                                prog.theme === 'orange' ? 'bg-orange-500' : 'bg-blue-600'
                            }
                        />
                        {prog.progress === 100 && (
                            <div className="flex items-center justify-center gap-1.5 mt-2 text-xs font-medium text-emerald-700 bg-emerald-50 py-1.5 rounded border border-emerald-100 w-full">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Programa Completado Satisfactoriamente
                            </div>
                        )}
                    </CardFooter>

                </Card>
            </motion.div>
        ))}
      </div>
    </motion.div>
  );
}