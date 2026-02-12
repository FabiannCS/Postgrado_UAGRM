"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MapPin, User, Download, Video, FileText } from "lucide-react";
import { Module } from "../data";

interface ModuleDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: Module | null;
}

export function ModuleDetailsModal({ isOpen, onClose, module }: ModuleDetailsModalProps) {
  if (!module) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden bg-background">
        <div className="bg-uagrm-blue p-6 text-white">
            <DialogHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-2">
                            {module.code}
                        </Badge>
                        <DialogTitle className="text-xl font-bold leading-tight">
                            {module.name}
                        </DialogTitle>
                        <DialogDescription className="text-blue-100 mt-1">
                            {module.program}
                        </DialogDescription>
                    </div>
                </div>
            </DialogHeader>
        </div>

        <ScrollArea className="max-h-[60vh]">
            <div className="p-6 space-y-8">
                {/* SECCIÓN 1: DETALLES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-uagrm-red" />
                            Ubicación Detallada
                        </h4>
                        <div className="bg-muted p-3 rounded-lg text-sm space-y-1">
                            <p className="font-semibold text-foreground">{module.classroom}</p>
                            <p className="text-muted-foreground">{module.location}</p>
                            <p className="text-xs text-muted-foreground pt-1 italic">
                                * Se recomienda llegar 10 min antes.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                            <User className="h-4 w-4 text-uagrm-blue" />
                            Contacto Docente
                        </h4>
                        <div className="bg-muted p-3 rounded-lg text-sm space-y-1">
                            <p className="font-semibold text-foreground">{module.teacher}</p>
                            <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                                {module.email}
                            </p>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* SECCIÓN 2: RECURSOS */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <Download className="h-5 w-5 text-uagrm-blue" />
                        Material de Clases
                    </h4>
                    
                    <div className="grid gap-3">
                        {module.resources?.map((res, i) => (
                            <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${
                                        res.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                    }`}>
                                        {res.type === 'video' ? <Video className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground group-hover:text-uagrm-blue transition-colors">
                                            {res.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Subido el: {res.date}
                                        </p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                    <Download className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                        {(!module.resources || module.resources.length === 0) && (
                            <p className="text-sm text-muted-foreground italic text-center py-4">
                                No hay material disponible todavía.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}