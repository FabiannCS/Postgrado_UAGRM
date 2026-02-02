"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  AlertTriangle, 
  Calendar, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ReadmisionPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-10"
    >
      
      {/* 1. ENCABEZADO Y ESTADO ACTUAL */}
      <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Solicitud de Readmisión</h1>
            <p className="text-sm text-slate-500">Gestiona tu reingreso a los programas de postgrado.</p>
        </div>

        {/* Tarjeta de Alerta de Estado */}
        <motion.div variants={itemVariants}>
            <Card className="border-l-4 border-l-amber-500 shadow-sm bg-amber-50/30 border-t-slate-200 border-r-slate-200 border-b-slate-200">
                <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
                        <AlertTriangle className="h-8 w-8" />
                    </div>
                    <div className="space-y-2 flex-1">
                        <h3 className="text-lg font-bold text-slate-800">Estado de Abandono Registrado</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-8 text-sm">
                            <div>
                                <span className="text-slate-500 block text-xs uppercase font-semibold">Programa</span>
                                <span className="font-medium text-slate-900">Maestría en Administración de Empresas</span>
                            </div>
                            <div>
                                <span className="text-slate-500 block text-xs uppercase font-semibold">Fecha de abandono</span>
                                <span className="font-medium text-slate-900">15 de Agosto, 2024</span>
                            </div>
                            <div>
                                <span className="text-slate-500 block text-xs uppercase font-semibold">Motivo registrado</span>
                                <span className="font-medium text-slate-900">Motivos laborales</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
      </div>

      {/* 2. PERIODOS DISPONIBLES */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-700" />
            <h2 className="text-xl font-bold text-slate-900">Periodos Disponibles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Periodo CERRADO */}
            <motion.div variants={itemVariants} className="opacity-70 grayscale-[0.5]">
                <Card className="h-full bg-slate-50 border-slate-200">
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-center mb-2">
                            <Badge variant="outline" className="text-slate-500 border-slate-300">2025-I</Badge>
                            <Badge variant="secondary" className="bg-slate-200 text-slate-600 hover:bg-slate-200">Cerrado</Badge>
                        </div>
                        <CardTitle className="text-slate-700">Periodo Pasado</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-slate-200 pb-1">
                                <span className="text-slate-500">Inicio</span>
                                <span className="font-medium text-slate-700">01 Ene, 2025</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 pb-1">
                                <span className="text-slate-500">Fin</span>
                                <span className="font-medium text-slate-700">28 Feb, 2025</span>
                            </div>
                        </div>
                        <Button disabled className="w-full bg-slate-200 text-slate-500">
                            Periodo Cerrado
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Periodo ACTIVO (PRÓXIMO) - Destacado */}
            <motion.div variants={itemVariants} className="relative transform md:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-xl"></div>
                <Card className="h-full shadow-lg border-blue-200 bg-white ring-1 ring-blue-100">
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">2025-II</Badge>
                            <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100 animate-pulse">Próximo</Badge>
                        </div>
                        <CardTitle className="text-blue-900 text-xl">Inscripciones Abiertas</CardTitle>
                        <CardDescription>Postula para el reingreso ahora.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                         <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm border border-blue-100">
                            <div className="flex justify-between items-center">
                                <span className="text-blue-600 font-medium">Inicio</span>
                                <span className="font-bold text-slate-800">01 Jun, 2025</span>
                            </div>
                            <Separator className="bg-blue-200" />
                            <div className="flex justify-between items-center">
                                <span className="text-blue-600 font-medium">Fin</span>
                                <span className="font-bold text-slate-800">31 Jul, 2025</span>
                            </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 h-11 text-base">
                            Solicitar Readmisión <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Periodo FUTURO */}
            <motion.div variants={itemVariants}>
                <Card className="h-full border-slate-200 bg-white">
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-center mb-2">
                            <Badge variant="outline" className="text-slate-600 border-slate-300">2026-I</Badge>
                            <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-50">Futuro</Badge>
                        </div>
                        <CardTitle className="text-slate-800">Próximamente</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-slate-100 pb-1">
                                <span className="text-slate-500">Inicio</span>
                                <span className="font-medium text-slate-700">01 Ene, 2026</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-1">
                                <span className="text-slate-500">Fin</span>
                                <span className="font-medium text-slate-700">28 Feb, 2026</span>
                            </div>
                        </div>
                        <Button variant="outline" disabled className="w-full text-slate-400 border-slate-200">
                            Disponible Próximamente
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

        </div>
      </div>

      {/* 3. REQUISITOS Y PROCESO (GRID 2 COLUMNAS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        
        {/* Columna Izquierda: Requisitos */}
        <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-slate-500" />
                Requisitos para Readmisión
            </h2>
            <Card className="border-slate-200">
                <CardContent className="p-6">
                    <ul className="space-y-4">
                        {[
                            "Carta de solicitud dirigida al Coordinador",
                            "Copia de documento de identidad vigente",
                            "Certificado de notas del periodo anterior",
                            "Comprobante de pago de tasa de readmisión",
                            "Declaración jurada de motivos de abandono"
                        ].map((req, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 bg-blue-50 p-1 rounded-full">
                                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                </div>
                                <span className="text-sm text-slate-600 leading-tight">{req}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>

        {/* Columna Derecha: Proceso */}
        <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-slate-500" />
                Proceso de Trámite
            </h2>
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-6 pb-2">
                {[
                    { title: "Revisar Periodos", desc: "Verifica las fechas límite disponibles." },
                    { title: "Preparar Documentación", desc: "Reúne todos los requisitos en PDF." },
                    { title: "Enviar Solicitud", desc: "Carga los documentos en el sistema." },
                    { title: "Evaluación", desc: "Espera 5-10 días hábiles la respuesta." },
                    { title: "Pago y Formalización", desc: "Si es aprobado, abona la matrícula." }
                ].map((step, i) => (
                    <div key={i} className="ml-6 relative">
                        {/* Círculo del paso */}
                        <div className="absolute -left-[31px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-slate-300 text-xs font-bold text-slate-500 shadow-sm">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                            <p className="text-xs text-slate-500">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

      </div>

      {/* 4. FOOTER DE AYUDA */}
      <motion.div variants={itemVariants}>
        <Card className="bg-slate-900 text-white border-none shadow-lg overflow-hidden relative">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
             <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <HelpCircle className="h-8 w-8 text-blue-200" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">¿Necesitas Ayuda con el trámite?</h3>
                        <p className="text-slate-300 text-sm max-w-md">
                            Contacta a la Oficina de Admisiones para resolver dudas específicas sobre tu caso de readmisión.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-3 w-full md:w-auto">
                    
                    {/* EMAIL */}
                    <a href="mailto:admisiones.postgrado@universidad.edu" className="flex items-center gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <Mail className="h-4 w-4 text-blue-300 shrink-0" />
                        <span className="truncate">admisiones.postgrado@universidad.edu</span>
                    </a>

                    {/* TELÉFONO + HORARIO (Responsive Arreglado) */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        
                        {/* Fila superior: Icono + Número */}
                        <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-green-300 shrink-0" />
                            <span className="whitespace-nowrap">+1 (555) 123-4567</span>
                        </div>
                        
                        {/* Separador: Oculto en Móvil (hidden), Visible en PC (sm:block) */}
                        <Separator orientation="vertical" className="hidden sm:block h-4 bg-white/20" />
                        
                        {/* Horario: Abajo en Móvil (con padding para alinear), al lado en PC */}
                        <span className="text-xs text-slate-400 pl-7 sm:pl-0">
                            Horario: 08:00 - 17:00
                        </span>
                    </div>

                </div>
             </CardContent>
        </Card>
      </motion.div>

    </motion.div>
  );
}