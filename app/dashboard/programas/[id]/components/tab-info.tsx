"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
    Calendar,
    User,
    Mail,
    GraduationCap,
    ExternalLink,
    Phone,
    MapPin,
    Clock
} from "lucide-react";
import { Program } from "../../data";

export function TabInfo({ program }: { program: Program }) {
    // Estado para controlar el modal del Coordinador
    const [isCoordinatorModalOpen, setIsCoordinatorModalOpen] = useState(false);

    // SIMULACIÓN DE DATOS EXTRAS (Luego esto vendrá de tu API o de data.ts)
    const coordinatorDetails = {
        phone: "+591 700-12345",
        office: "Edificio de Postgrado, Piso 2 - Oficina 214",
        hours: "Lunes, Miércoles y Viernes • 15:00 - 18:30",
        bio: "Profesional con amplia experiencia en gestión académica y educación superior. Encargado de velar por el correcto desarrollo del programa y apoyar a los estudiantes en sus requerimientos académicos."
    };

    // Obtener las iniciales para el Avatar
    const getInitials = (name: string) => {
        const parts = name.replace("Dr. ", "").replace("Msc. ", "").replace("Lic. ", "").split(" ");
        if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`;
        return name.charAt(0);
    };

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Descripción General</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-uagrm-blue" /> Cronograma
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between border-b border-border pb-2">
                            <span className="text-sm text-muted-foreground">Inicio</span>
                            <span className="text-sm font-medium">{program.startDate}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span className="text-sm text-muted-foreground">Finalización</span>
                            <span className="text-sm font-medium">{program.endDate}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* TARJETA DE COORDINACIÓN INTERACTIVA */}
                <Card
                    onClick={() => setIsCoordinatorModalOpen(true)}
                    className="cursor-pointer hover:shadow-md hover:border-uagrm-blue/50 transition-all group"
                >
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-uagrm-blue group-hover:text-blue-600 transition-colors" />
                                Coordinación Académica
                            </div>
                            {/* Icono que aparece al pasar el mouse */}
                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border-2 border-muted group-hover:border-blue-100 transition-colors">
                                <AvatarFallback className="bg-blue-50 text-uagrm-blue font-bold">
                                    {getInitials(program.coordinator)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <p className="font-bold text-foreground group-hover:text-uagrm-blue transition-colors">
                                    {program.coordinator}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Mail className="h-3 w-3" />
                                    <span className="truncate max-w-[150px] sm:max-w-[200px]">
                                        {program.coordinatorEmail}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-xs font-medium text-uagrm-blue/80 opacity-0 group-hover:opacity-100 transition-opacity">
                            Clic para ver información de contacto
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-uagrm-blue" /> Avance Académico
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span>Créditos: {program.creditsCompleted} / {program.totalCredits}</span>
                            <span className="font-bold">{program.progress}%</span>
                        </div>
                        <Progress value={program.progress} className="h-3" />
                    </CardContent>
                </Card>
            </div>

            {/* MODAL DE INFORMACIÓN DEL COORDINADOR */}
            <Dialog open={isCoordinatorModalOpen} onOpenChange={setIsCoordinatorModalOpen}>
                <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-background max-h-[90vh] flex flex-col">

                    {/* Cabecera compacta */}
                    <div className="bg-uagrm-blue px-6 pt-5 pb-4 text-white text-center shrink-0">
                        <div className="flex justify-center mb-3">
                            <Avatar className="h-14 w-14 border-4 border-white shadow-lg">
                                <AvatarFallback className="text-lg font-bold bg-slate-100 text-uagrm-blue">
                                    {getInitials(program.coordinator)}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <DialogTitle className="text-lg font-bold text-white mb-0.5">
                            {program.coordinator}
                        </DialogTitle>
                        <DialogDescription className="text-blue-100 text-xs font-medium">
                            Coordinador de Programa
                        </DialogDescription>
                    </div>

                    {/* Contenido con scroll para pantallas pequeñas */}
                    <div className="overflow-y-auto p-5 space-y-4">

                        {/* Bio breve */}
                        <div className="text-xs text-muted-foreground text-center italic px-2">
                            &quot;{coordinatorDetails.bio}&quot;
                        </div>

                        <Separator />

                        {/* Datos de contacto */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full text-uagrm-blue dark:text-blue-400 shrink-0">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Correo Institucional</p>
                                    <p className="text-sm font-semibold truncate text-foreground">{program.coordinatorEmail}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-full text-green-600 dark:text-green-400 shrink-0">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Teléfono de Contacto</p>
                                    <p className="text-sm font-semibold text-foreground">{coordinatorDetails.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-full text-amber-600 dark:text-amber-400 shrink-0">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Oficina</p>
                                    <p className="text-sm font-semibold text-foreground">{coordinatorDetails.office}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-full text-purple-600 dark:text-purple-400 shrink-0">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Horario de Atención</p>
                                    <p className="text-sm font-semibold text-foreground">{coordinatorDetails.hours}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}