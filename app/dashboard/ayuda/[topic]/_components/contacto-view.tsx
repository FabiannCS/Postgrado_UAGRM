"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Phone, Mail } from "lucide-react";
import { contactoContent } from "../../data";

export function ContactoView() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-900 dark:bg-black border-slate-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-uagrm-blue rounded-full opacity-10 blur-3xl pointer-events-none" />
        <CardContent className="p-6 sm:p-8 space-y-6 relative z-10">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Canales de Comunicación</h3>
            <p className="text-slate-400 text-sm">
              Ponte en contacto con el equipo de Postgrado por cualquiera de
              estos medios.
            </p>
          </div>

          <div className="space-y-3">
            {contactoContent.channels.map((channel, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="bg-uagrm-blue/20 p-2 rounded-full">
                  {channel.type === "email" ? (
                    <Mail className="h-4 w-4 text-blue-300" />
                  ) : channel.type === "phone" ? (
                    <Phone className="h-4 w-4 text-green-400" />
                  ) : (
                    <Clock className="h-4 w-4 text-amber-400" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-400">{channel.label}</p>
                  <p className="text-sm font-medium">{channel.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="bg-white/10" />

          <p className="text-xs text-slate-400">{contactoContent.socialNote}</p>
        </CardContent>
      </Card>
    </div>
  );
}
