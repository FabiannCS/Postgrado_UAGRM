"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Clock, User, MapPin, FileText, ArrowRight } from "lucide-react";
import { Module } from "../data";

interface ModuleCardProps {
  module: Module;
  onViewDetails: (module: Module) => void;
}

export function ModuleCard({ module, onViewDetails }: ModuleCardProps) {
  return (
    <Card className="overflow-hidden border-l-4 border-l-uagrm-blue hover:shadow-lg transition-all duration-300 bg-card h-full flex flex-col">
        <CardHeader className="pb-3">
            <div className="mb-2">
                    <Badge variant="secondary" className={`
                    text-[10px] font-bold uppercase tracking-wide border
                    ${module.color === 'blue' 
                        ? 'bg-blue-50 text-uagrm-blue border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' 
                        : 'bg-red-50 text-uagrm-red border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'}
                `}>
                    {module.program}
                </Badge>
            </div>

            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                        {module.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mt-1">
                        Código: {module.code} • {module.group}
                    </p>
                </div>
                
                <Badge className={`
                    ${module.status === 'En Curso' ? 'bg-green-600 hover:bg-green-700' : 
                        module.status === 'Por Iniciar' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-uagrm-blue'}
                `}>
                    {module.status}
                </Badge>
            </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                <div className="bg-background p-2 rounded-full border border-border">
                    <User className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                    <span className="text-xs text-muted-foreground uppercase font-bold block">Docente</span>
                    <span className="text-sm font-semibold text-foreground">{module.teacher}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" /> Fecha de Inicio y Fin
                    </span>
                    <p className="text-sm font-bold text-uagrm-blue dark:text-blue-400">
                        {module.startDate}
                    </p>
                    <p className="text-sm font-bold text-uagrm-blue dark:text-blue-400">
                        {module.endDate}
                    </p>
                </div>
                <div className="space-y-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Horario
                    </span>
                    <p className="text-sm font-medium text-foreground">
                        {module.schedule}
                    </p>
                </div>
                <div className="col-span-1 sm:col-span-2 space-y-1 border-t border-border pt-2 mt-1">
                    <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-uagrm-red" /> Aula / Ubicación
                    </span>
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                        {module.classroom} 
                        <Badge variant="outline" className="text-[10px] h-5 ml-2 text-muted-foreground">
                            {module.modality}
                        </Badge>
                    </p>
                </div>
            </div>

            {module.status === 'En Curso' && (
                <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground font-medium">Avance del módulo</span>
                        <span className="text-foreground font-bold">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                </div>
            )}
        </CardContent>

        <CardFooter className="pt-2 border-t border-border bg-muted/20">
            <Button 
                variant="ghost" 
                className="w-full justify-between text-uagrm-blue dark:text-blue-400 hover:text-uagrm-blue hover:bg-blue-50 dark:hover:bg-blue-900/20"
                onClick={() => onViewDetails(module)}
            >
                <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Ver Material y Recursos
                </span>
                <ArrowRight className="h-4 w-4" />
            </Button>
        </CardFooter>
    </Card>
  );
}