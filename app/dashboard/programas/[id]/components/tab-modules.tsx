"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Nuevo: Para los botones de filtro
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    Clock,
    Circle,
    BookOpen,
    CalendarDays,
    SearchX,
    Clock3
} from "lucide-react";

interface Module {
    id?: string | number;
    name: string;
    sigla: string;
    credits: number;
    hours: number;
    period: string;
    teacher: string;
    nota: number;
    estado: "Aprobado" | "Inscritos" | "Pendiente" | string;
    description?: string;
    horas?: string;
    modality?: string;
    duracion?: string;
}
export function TabModules({ modules }: { modules: Module[] }) {
    const [selectedModule, setSelectedModule] = useState<Module | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 1. ESTADO DEL FILTRO
    const [filter, setFilter] = useState("Todos");

    // Opciones de filtrado (Coinciden con el campo 'estado' de data.ts)
    const filterOptions = ["Todos", "Aprobado", "Inscritos", "Pendiente"];

    // 2. LÓGICA DE FILTRADO
    const filteredModules = filter === "Todos"
        ? modules
        : modules.filter(m => m.estado === filter);

    const handleModuleClick = (mod: Module) => {
        setSelectedModule(mod);
        setIsModalOpen(true);
    };

    if (modules.length === 0) {
        return <div className="text-center py-10 text-muted-foreground">No hay módulos registrados.</div>;
    }

    return (
        <>
            <Card>
                {/* CABECERA CON TÍTULO Y FILTROS */}
                <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-uagrm-blue" />
                                Plan de Estudios Completo
                            </CardTitle>
                            <CardDescription className="mt-1">
                                Selecciona un módulo para ver más detalles y material de apoyo.
                            </CardDescription>
                        </div>

                        {/* BOTONES DE FILTRO PEQUEÑOS */}
                        <div className="flex flex-wrap items-center gap-2">
                            {filterOptions.map((option) => (
                                <Button
                                    key={option}
                                    variant={filter === option ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setFilter(option)}
                                    className={`rounded-full transition-all text-xs h-8 ${filter === option
                                        ? "bg-uagrm-blue hover:bg-uagrm-blue/90 text-white border-transparent"
                                        : "border-border text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="space-y-3">
                        <AnimatePresence mode="popLayout">
                            {filteredModules.length > 0 ? (
                                filteredModules.map((mod, i) => (
                                    <motion.div
                                        key={mod.id || i}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => handleModuleClick(mod)}
                                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 hover:border-uagrm-blue/50 transition-all cursor-pointer group shadow-sm hover:shadow-md bg-card"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                {mod.estado === "Aprobado" && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                                                {mod.estado === "Inscritos" && <Clock className="h-5 w-5 text-blue-500" />}
                                                {mod.estado === "Pendiente" && <Circle className="h-5 w-5 text-slate-300" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground group-hover:text-uagrm-blue transition-colors">
                                                    {mod.name}
                                                </h4>
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                                    <span className="font-mono">{mod.sigla}</span>
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
                                            text-[10px] h-5 font-semibold
                                            ${mod.estado === 'Aprobado' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' : ''}
                                            ${mod.estado === 'Cursando' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' : ''}
                                        `}>
                                                {mod.estado}
                                            </Badge>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                /* ESTADO VACÍO SI EL FILTRO NO TIENE RESULTADOS */
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="py-10 flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-lg bg-muted/20"
                                >
                                    <SearchX className="h-8 w-8 text-muted-foreground mb-3 opacity-50" />
                                    <p className="text-sm text-muted-foreground">
                                        No hay módulos &quot;{filter}&quot;.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                                                <span>Estado: {selectedModule.estado}</span>
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
                                                {selectedModule.duracion && (
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">Duración:</span>
                                                        <span className="font-medium">{selectedModule.duracion}</span>
                                                    </div>
                                                )}
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
                                </div>
                            </ScrollArea>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}