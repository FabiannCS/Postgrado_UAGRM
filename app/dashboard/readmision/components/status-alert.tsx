"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { systemDates } from "../data";

// Definimos los tipos de estado posibles
export type UserStatus = "Activo" | "Suspendido" | "En Proceso";

interface StatusAlertProps {
  status: UserStatus;
}

export function StatusAlert({ status }: StatusAlertProps) {

  // CASO 1: ESTUDIANTE ACTIVO (No necesita readmisión)
  if (status === "Activo") {
    return (
        <Card className="border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-900/10 shadow-sm">
            <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400 mt-1">
                    <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-foreground">Matrícula Activa</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                        Tu situación académica es regular. No es necesario realizar ningún trámite de readmisión.
                        Puedes inscribir materias normalmente en el próximo periodo.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
  }

  // CASO 2: ESTUDIANTE SUSPENDIDO (Requiere readmisión)
  return (
    <Card className="border-l-4 border-l-uagrm-red overflow-hidden shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-uagrm-red dark:text-red-400">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                  <h2 className="text-xl font-bold text-foreground">Suspensión Académica Temporal</h2>
                  <Badge variant="outline" className="text-uagrm-red border-uagrm-red mt-1">
                      Acción Requerida
                  </Badge>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu matrícula se encuentra inactiva debido a la ausencia de registro de materias por más de dos periodos consecutivos.
            </p>

            {/* AQUI MOSTRAMOS LAS FECHAS DE HABILITACIÓN QUE PEDISTE */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-blue-900/10 px-3 py-1.5 rounded-md border border-blue-100 dark:border-blue-900/30">
                <Calendar className="h-4 w-4 text-uagrm-blue dark:text-blue-400" />
                <span className="text-uagrm-blue dark:text-blue-400 font-medium">Periodo habilitado:</span>
                <span className="font-bold text-foreground">
                    {systemDates.startDate} al {systemDates.endDate}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-3">
             {systemDates.isOpen ? (
                 <>
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 p-4 rounded-lg text-amber-800 dark:text-amber-400 text-xs max-w-xs">
                        <strong>Atención:</strong> Asegúrate de tener tu documentación lista antes de iniciar.
                    </div>
                    <Button className="w-full bg-uagrm-red hover:bg-red-700 text-white shadow-md">
                        Iniciar Trámite <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                 </>
             ) : (
                <Button disabled className="w-full">
                    Sistema Cerrado
                </Button>
             )}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}