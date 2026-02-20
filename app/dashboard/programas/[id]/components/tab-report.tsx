"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function TabReport({ programName }: { programName: string }) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Reportar Problema Académico</CardTitle>
            <CardDescription>
                Envía una incidencia relacionada específicamente con <strong>{programName}</strong>.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label>Asunto</Label>
                <Input placeholder="Ej: Error en nota de módulo..." />
            </div>
            <div className="space-y-2">
                <Label>Descripción del problema</Label>
                <Textarea placeholder="Describe detalladamente tu situación..." className="min-h-[120px]" />
            </div>
            <Button className="w-full bg-uagrm-red hover:bg-red-700 text-white">
                <Send className="h-4 w-4 mr-2" /> Enviar Reporte
            </Button>
        </CardContent>
    </Card>
  );
}