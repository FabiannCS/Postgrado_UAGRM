"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, User, Mail, GraduationCap } from "lucide-react";
import { Program } from "../../data";

export function TabInfo({ program }: { program: Program }) {
  return (
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
                 <div className="flex justify-between border-b pb-2">
                     <span className="text-sm text-muted-foreground">Inicio</span>
                     <span className="text-sm font-medium">{program.startDate}</span>
                 </div>
                 <div className="flex justify-between pt-2">
                     <span className="text-sm text-muted-foreground">Finalización</span>
                     <span className="text-sm font-medium">{program.endDate}</span>
                 </div>
             </CardContent>
        </Card>

        <Card>
             <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                    <User className="h-4 w-4 text-uagrm-blue" /> Coordinación
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                 <div className="space-y-1">
                     <p className="font-medium">{program.coordinator}</p>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" /> {program.coordinatorEmail}
                     </div>
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
  );
}