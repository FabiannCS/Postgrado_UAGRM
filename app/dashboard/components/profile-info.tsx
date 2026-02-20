

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { User, Mail, Phone, MapPin, CreditCard, Calendar, Edit, SquareChartGantt, GraduationCap, Send, Earth } from "lucide-react";
import { StudentData } from "../data";

interface ProfileInfoProps {
    studentData: StudentData;
}

export function ProfileInfo({ studentData }: ProfileInfoProps) {
    const [isRequestOpen, setIsRequestOpen] = useState(false);
    const [requestReason, setRequestReason] = useState("");

    const handleSendRequest = () => {
        // Aquí iría la lógica para enviar la solicitud a una API
        console.log("Enviando solicitud:", requestReason);
        setIsRequestOpen(false);
        setRequestReason("");
        // Podríamos mostrar un toast de éxito aquí
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-uagrm-blue" />
                    Información Personal
                </CardTitle>
                <CardDescription>Datos registrados en la Dirección de Postgrado.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <CreditCard className="h-3 w-3" /> Registro
                    </Label>
                    <div className="font-medium">{studentData.registration}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <CreditCard className="h-3 w-3" /> Cédula de Identidad
                    </Label>
                    <div className="font-medium">{studentData.ci}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Fecha de Nacimiento
                    </Label>
                    <div className="font-medium">{studentData.birthDate}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <Mail className="h-3 w-3" /> Correo Institucional
                    </Label>
                    <div className="font-medium truncate">{studentData.email}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <Mail className="h-3 w-3" /> Correo Personal
                    </Label>
                    <div className="font-medium truncate">{studentData.personalEmail}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <User className="h-3 w-3" /> Sexo
                    </Label>
                    <div className="font-medium">{studentData.sex}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <SquareChartGantt className="h-3 w-3" /> Estado Civil
                    </Label>
                    <div className="font-medium">{studentData.estadoCivil}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <Earth className="h-3 w-3" /> País
                    </Label>
                    <div className="font-medium">{studentData.pais}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <SquareChartGantt className="h-3 w-3" /> Departamento
                    </Label>
                    <div className="font-medium">{studentData.departamento}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Dirección Domiciliaria
                    </Label>
                    <div className="font-medium">{studentData.address}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" /> Teléfono / Celular
                    </Label>
                    <div className="font-medium">{studentData.phone}</div>
                </div>

                <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground flex items-center gap-1">
                        <GraduationCap className="h-3 w-3" /> Título de Bachiller
                    </Label>
                    <div className="font-medium">{studentData.tituloBachiller}</div>
                </div>

            </CardContent>
            <CardFooter className="bg-muted/30 border-t flex justify-between items-center px-6 py-4 mt-auto">
                <span className="text-xs text-muted-foreground italic">
                    * Para modificar estos datos, contacta al departamento de postgrado.
                </span>

                <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3 mr-2" />
                            Solicitar Edición
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Solicitud de Edición de Datos</DialogTitle>
                            <DialogDescription>
                                Envía una solicitud al Departamento de Admisiones para corregir o actualizar tu información personal.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="reason">Motivo de la solicitud</Label>
                                <textarea
                                    id="reason"
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Ej: Mi dirección ha cambiado, mi nuevo domicilio es..."
                                    value={requestReason}
                                    onChange={(e) => setRequestReason(e.target.value)}
                                />
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md text-sm text-uagrm-blue dark:text-blue-300">
                                <p>ℹ️ Tu solicitud será revisada por un administrativo en un plazo de 24-48 horas.</p>
                            </div>
                        </div>

                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsRequestOpen(false)}>Cancelar</Button>
                            <Button onClick={handleSendRequest} className="bg-uagrm-blue hover:bg-blue-800 text-white">
                                <Send className="h-4 w-4 mr-2" />
                                Enviar Solicitud
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
