"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    CheckCircle2,
    Clock,
    Circle,
    BookOpen,
    CalendarDays,
    FileText,
    Download,
    Video,
    Clock3
} from "lucide-react";

export interface ModuleResource {
    title: string;
    type: string;
}

export interface ModuleData {
    id: number;
    programId: number;
    name: string;
    sigla: string;
    estado: string;
    nota: number;
    credits: number;
    hours: number;
    period: string;
    teacher: string;
    description: string;
    resources: ModuleResource[];
    modality: string;
    horas: string;
}

export function TabModules({ modules }: { modules: ModuleData[] }) {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para abrir el modal al hacer clic
    const handleModuleClick = (mod: ModuleData) => {
        setSelectedModule(mod);
        setIsModalOpen(true);
    };

    if (modules.length === 0) {
        return <div className="text-center py-10 text-muted-foreground">No hay módulos registrados aún.</div>;
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-bold text-[18px]">
                        <BookOpen className="h-5 w-5 text-uagrm-blue" />
                        Plan de Estudios Completo
                    </CardTitle>
                    <CardDescription>
                        Selecciona un módulo para ver más detalles, docentes asignados y material de apoyo.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {modules.map((mod, i) => (
                            <div
                                key={mod.id || i}
                                onClick={() => handleModuleClick(mod)}
                                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 hover:border-uagrm-blue/50 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        {mod.estado === "Aprobado" && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                                        {mod.estado === "Cursando" && <Clock className="h-5 w-5 text-blue-500" />}
                                        {mod.estado === "Pendiente" && <Circle className="h-5 w-5 text-slate-300" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground group-hover:text-uagrm-blue transition-colors">
                                            {mod.name}
                                        </h4>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                            <span className="font-mono font-bold">{mod.sigla}</span>
                                            <span>•</span>
                                            <span>{mod.credits} Créditos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end gap-1.5">
                                    {mod.nota > 0 ? (
                                        <span className={`font-bold text-sm ${mod.nota >= 51 ? 'text-emerald-600' : 'text-uagrm-red'}`}>
                                            {mod.nota} pts.
                                        </span>
                                    ) : (
                                        <span className="text-xs text-muted-foreground italic">Sin nota</span>
                                    )}
                                    <Badge variant="secondary" className={`
                                    text-[12px] h-5 font-semibold
                                    ${mod.estado === 'Aprobado' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' : ''}
                                    ${mod.estado === 'Cursando' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' : ''}
                                `}>
                                        {mod.estado}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* MODAL DE DETALLES DEL MÓDULO */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden bg-background">
                    {selectedModule && (
                        <>
                            <div className={`p-6 text-white ${selectedModule.estado === 'Aprobado' ? 'bg-emerald-600' :
                                selectedModule.estado === 'Cursando' ? 'bg-uagrm-blue' : 'bg-slate-600'
                                }`}>
                                <DialogHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-2 font-mono">
                                                {selectedModule.sigla}
                                            </Badge>
                                            <DialogTitle className="text-xl font-bold leading-tight">
                                                {selectedModule.name}
                                            </DialogTitle>
                                            <DialogDescription className="text-white/80 mt-1 flex items-center gap-2">
                                                <span className="font-bold">Estado: {selectedModule.estado}</span>
                                                {selectedModule.nota > 0 && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="font-bold">Nota: {selectedModule.nota} / 100</span>
                                                    </>
                                                )}
                                            </DialogDescription>
                                        </div>
                                    </div>
                                </DialogHeader>
                            </div>

                            <ScrollArea className="max-h-[60vh]">
                                <div className="p-6 space-y-8">

                                    {/* DESCRIPCIÓN */}
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground mb-2">Descripción del Módulo</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {selectedModule.description || "Sin descripción disponible."}
                                        </p>
                                    </div>

                                    <Separator />

                                    {/* DATOS ACADÉMICOS */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                                <Clock3 className="h-4 w-4 text-muted-foreground" />
                                                Carga Horaria
                                            </h4>
                                            <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Créditos:</span>
                                                    <span className="font-medium">{selectedModule.credits}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Horas Totales:</span>
                                                    <span className="font-medium">{selectedModule.hours} hrs</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                                Programación
                                            </h4>
                                            <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Periodo:</span>
                                                    <span className="font-medium">{selectedModule.period}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Docente:</span>
                                                    <span className="font-medium text-uagrm-blue">{selectedModule.teacher}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Modalidad:</span>
                                                    <span className="font-medium">{selectedModule.modality}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3 sm:col-span-2">
                                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                                <Clock3 className="h-4 w-4 text-muted-foreground" />
                                                Horario de clase
                                            </h4>
                                            <div className="bg-muted/50 p-3 rounded-lg text-sm">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                                    <span className="text-muted-foreground whitespace-nowrap">Horas:</span>
                                                    <span className="font-medium text-right">{selectedModule.horas}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* MATERIAL Y RECURSOS (Solo si hay) */}
                                    {selectedModule.resources && selectedModule.resources.length > 0 && (
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                                <Download className="h-4 w-4 text-uagrm-blue" />
                                                Material y Recursos
                                            </h4>
                                            <div className="grid gap-2">
                                                {selectedModule.resources.map((res: ModuleResource, idx: number) => (
                                                    <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`p-2 rounded-lg ${res.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                                                }`}>
                                                                {res.type === 'video' ? <Video className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                                                            </div>
                                                            <span className="text-sm font-medium text-foreground group-hover:text-uagrm-blue transition-colors">
                                                                {res.title}
                                                            </span>
                                                        </div>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                                            <Download className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}