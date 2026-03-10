"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";

interface ModuleData {
    id?: number;
    program: string;
    name: string;
    code: string;
    teacher: string;
    startDate: string;
    endDate: string;
    scheduleRule: string;
    modality: string;
    credits?: number;
}

export function ActiveModuleCard({ module }: { module: ModuleData }) {
    return (
        <Card className="border-l-4 border-l-uagrm-blue shadow-md relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-uagrm-blue/5 rounded-full blur-2xl"></div>

            <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-uagrm-blue border-uagrm-blue font-bold uppercase tracking-wider text-[10px]">
                        Módulo Actual
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 border-none">
                        {module.modality}
                    </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                    {module.name}
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                    {module.program} • {module.code}
                </p>
            </CardHeader>

            <CardContent className="space-y-5 mt-4 relative z-10">
                {/* Fechas y Horarios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/30 p-4 rounded-xl border border-border/50">
                    <div className="space-y-1">
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium uppercase">
                            <CalendarDays className="h-3.5 w-3.5" /> Periodo del Módulo
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                            {module.startDate} al {module.endDate}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium uppercase">
                            <Clock className="h-3.5 w-3.5" /> Días y Horas
                        </p>
                        <p className="text-sm font-semibold text-uagrm-blue dark:text-blue-400">
                            {module.scheduleRule}
                        </p>
                    </div>
                </div>

                {/* Docente */}
                <div className="flex items-center gap-3">
                    <div className="bg-muted p-2.5 rounded-full text-foreground shrink-0 border">
                        <User className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase">Docente Titular</p>
                        <p className="text-sm font-bold text-foreground">{module.teacher}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}