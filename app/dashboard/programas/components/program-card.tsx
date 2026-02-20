"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
    GraduationCap,
    Calendar,
    CheckCircle2,
    ArrowRight,
    Clock,
    BookOpen
} from "lucide-react";
import { Program } from "../data";

interface ProgramCardProps {
    program: Program;
    onViewDetails: (program: Program) => void;
}

export function ProgramCard({ program, onViewDetails }: ProgramCardProps) {
    return (
        <Card
            onClick={() => onViewDetails(program)}
            className={`overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer group ${program.theme === 'uagrm-red' ? 'border-l-uagrm-red' :
                    program.status === 'Completado' ? 'border-l-emerald-500' : 'border-l-uagrm-blue'
                }`}
        >
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl shadow-sm ${program.status === 'Completado' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20' :
                            program.theme === 'uagrm-red' ? 'bg-orange-100 text-uagrm-red dark:bg-orange-900/20' :
                                'bg-blue-100 text-uagrm-blue dark:bg-blue-900/20'
                        }`}>
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg leading-tight text-foreground">{program.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="font-mono text-xs">
                                {program.code}
                            </Badge>
                            <Badge className={`${program.status === 'Activo' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300' :
                                    program.status === 'Completado' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300' :
                                        'bg-orange-100 text-uagrm-red hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300'
                                } border-none`}>
                                {program.status}
                            </Badge>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4 flex-1 pt-2">
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {program.description}
                </p>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs">Inicio: <span className="text-foreground font-medium block">{program.startDate}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs">Fin: <span className="text-foreground font-medium block">{program.endDate}</span></span>
                    </div>
                </div>

                <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-muted-foreground">Progreso Académico</span>
                        <span className={`${program.status === 'Completado' ? 'text-emerald-600' :
                                program.theme === 'uagrm-red' ? 'text-uagrm-red' : 'text-uagrm-blue'
                            }`}>
                            {program.progress}%
                        </span>
                    </div>
                    <Progress
                        value={program.progress}
                        className="h-2.5"
                    // Nota: El color del indicador se maneja mejor con clases condicionales en el padre o usando variables CSS si el componente Progress lo permite, 
                    // o simplemente confiando en el color primario si no quieres complicar.
                    // Para este ejemplo, usaremos clases de utilidad estándar.
                    />

                    {program.status === "Completado" && (
                        <div className="flex items-center justify-center gap-2 mt-3 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 py-2 rounded-md border border-emerald-100 dark:border-emerald-800">
                            <CheckCircle2 className="h-4 w-4" />
                            Programa Finalizado
                        </div>
                    )}
                </div>
            </CardContent>

            <CardFooter className="pt-0 pb-4">
                <Button
                    variant="ghost"
                    className="w-full justify-between group hover:bg-muted border border-transparent hover:border-border"
                    onClick={() => onViewDetails(program)}
                >
                    <span className="flex items-center gap-2 text-sm font-medium">
                        <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                        Más Información
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardFooter>
        </Card>
    );
}