"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  User, 
  Mail, 
  CheckCircle2, 
  Trophy, 
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Program } from "../data";

interface ProgramDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
}

export function ProgramDetailsModal({ isOpen, onClose, program }: ProgramDetailsModalProps) {
  if (!program) return null;

  // Función auxiliar para color del estado
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo": return "bg-blue-600";
      case "Completado": return "bg-emerald-600";
      case "Por Iniciar": return "bg-amber-500";
      default: return "bg-slate-500";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden bg-background">
        
        {/* HEADER */}
        <div className={`p-6 text-white ${getStatusColor(program.status)}`}>
            <DialogHeader>
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-2">
                            {program.type}
                        </Badge>
                        <DialogTitle className="text-xl font-bold leading-tight">
                            {program.name}
                        </DialogTitle>
                        <DialogDescription className="text-white/80 mt-1 flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Periodo: {program.period}
                        </DialogDescription>
                    </div>
                    <div className="bg-white/10 p-3 rounded-full hidden sm:block">
                        <Trophy className="h-8 w-8 text-white" />
                    </div>
                </div>
            </DialogHeader>
        </div>

        <ScrollArea className="max-h-[60vh]">
            <div className="p-6 space-y-8">
                
                {/* 1. Descripción */}
                <div>
                    <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Descripción del Programa
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {program.description}
                    </p>
                </div>

                <Separator />

                {/* 2. Fechas y Coordinación */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Cronograma
                        </h3>
                        <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-2">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Inicio:</span>
                                <span className="font-medium">{program.startDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Fin estimado:</span>
                                <span className="font-medium">{program.endDate}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            Coordinación Académica
                        </h3>
                        <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-1">
                            <p className="font-medium">{program.coordinator}</p>
                            <div className="flex items-center gap-2 text-primary text-xs mt-1">
                                <Mail className="h-3 w-3" />
                                {program.coordinatorEmail}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Avance Académico */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            Avance Curricular
                        </h3>
                        <span className="text-sm font-bold text-primary">{program.progress}%</span>
                    </div>
                    
                    <Progress value={program.progress} className="h-3" />
                    
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{program.creditsCompleted} Créditos Aprobados</span>
                        <span>Meta: {program.totalCredits} Créditos</span>
                    </div>

                    {program.status === "Completado" && (
                        <div className="mt-4 flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm border border-emerald-100 dark:border-emerald-800">
                            <CheckCircle2 className="h-5 w-5" />
                            <div>
                                <p className="font-bold">¡Programa Finalizado!</p>
                                <p className="text-xs opacity-90">Todos los requisitos académicos han sido cumplidos.</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}