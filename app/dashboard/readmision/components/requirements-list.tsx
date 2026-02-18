"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { requirements, processSteps } from "../data"; // Importamos los datos exactos

export function RequirementsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* REQUISITOS (Texto original) */}
      <Card className="h-full border-t-4 border-t-uagrm-blue">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle2 className="h-5 w-5 text-uagrm-blue" />
            Requisitos Documentales
          </CardTitle>
          <CardDescription>
            Documentación necesaria en formato digital (PDF).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {requirements.map((req, index) => (
              <li key={index} className="flex gap-3 text-sm group">
                <div className="mt-0.5 h-5 w-5 rounded-full border border-border flex items-center justify-center bg-muted group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-uagrm-blue" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{req}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* PROCESO (Iconos y pasos originales) */}
      <Card className="h-full border-t-4 border-t-uagrm-blue">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <HelpCircle className="h-5 w-5 text-uagrm-blue" />
            Proceso de Readmisión
          </CardTitle>
          <CardDescription>
            Pasos a seguir para completar el trámite.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <div className="relative border-l border-border ml-3 space-y-8 pb-2">
              {processSteps.map((step, i) => (
                  <div key={i} className="relative pl-8">
                      {/* Icono Flotante */}
                      <span className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center z-10">
                          <step.icon className="h-3 w-3 text-muted-foreground" />
                      </span>
                      <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                  </div>
              ))}
           </div>
        </CardContent>
      </Card>

    </div>
  );
}