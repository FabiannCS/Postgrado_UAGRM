"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail } from "lucide-react";
import { contactInfo } from "../data";

export function HelpCard() {
  return (
    <Card className="bg-slate-900 dark:bg-black border-slate-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-uagrm-blue rounded-full opacity-10 blur-3xl pointer-events-none"></div>

        <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center md:text-left space-y-2">
                <h3 className="text-xl font-bold">¿Necesitas ayuda con el trámite?</h3>
                <p className="text-slate-400 text-sm max-w-md">
                    El equipo de admisiones está disponible para guiarte en tu proceso de retorno a la universidad.
                </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group">
                    <div className="bg-uagrm-blue/20 p-2 rounded-full text-blue-300 group-hover:text-blue-200 group-hover:bg-uagrm-blue/30 transition-colors">
                        <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium truncate">{contactInfo.email}</span>
                </a>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-medium">{contactInfo.phone}</span>
                    </div>
                    <Separator orientation="vertical" className="hidden sm:block h-4 bg-white/20" />
                    <span className="text-xs text-slate-400 pl-7 sm:pl-0">
                        Horario: {contactInfo.schedule}
                    </span>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}