"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { adminContent } from "../../data";

export function AtencionAdminView() {
  return (
    <div className="space-y-6">
      {/* Banner card */}
      <Card className="bg-slate-900 dark:bg-black text-white border-none relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-uagrm-blue rounded-full opacity-20 blur-3xl" />
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <Building2 className="h-6 w-6 text-blue-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{adminContent.title}</h3>
              <p className="text-blue-200/80 text-sm">
                {adminContent.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-center md:text-right">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>{adminContent.schedule}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Phone className="h-3 w-3" />
              <span>Contacto: {adminContent.phone}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notas */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-uagrm-blue" />
            Información Importante
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Ten en cuenta estas indicaciones antes de acudir a la oficina.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {adminContent.notes.map((note, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-3.5 rounded-lg border border-border bg-muted/30 hover:bg-muted/60 transition-colors"
              >
                <span className="shrink-0 h-7 w-7 rounded-full bg-uagrm-blue/10 text-uagrm-blue flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ubicación */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MapPin className="h-4 w-4 text-uagrm-blue" />
            Ubicación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Mapa embebido */}
          <div className="rounded-lg overflow-hidden border border-border h-48 bg-muted relative">
            <iframe
              title="Ubicación Postgrado UAGRM"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.5!2d-63.1818!3d-17.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ3JzAwLjAiUyA2M8KwMTAnNTQuNSJX!5e0!3m2!1ses!2sbo!4v1!5m2!1ses!2sbo"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Dirección con icono */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
            <div className="bg-uagrm-blue/10 p-2 rounded-full shrink-0 mt-0.5">
              <Building2 className="h-4 w-4 text-uagrm-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Dirección</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {adminContent.location}
              </p>
            </div>
          </div>

          {/* Botón de dirección */}
          <a
            href="https://maps.google.com/?q=UAGRM+Postgrado+Santa+Cruz+Bolivia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full"
          >
            <Button variant="outline" className="w-full gap-2">
              <MapPin className="h-4 w-4" />
              Cómo llegar
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
