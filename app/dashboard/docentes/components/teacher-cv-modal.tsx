"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Briefcase, BookOpen, Layers } from "lucide-react";
import { Teacher } from "../data";

interface TeacherCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: Teacher | null;
}

export function TeacherCvModal({ isOpen, onClose, teacher }: TeacherCvModalProps) {
  if (!teacher) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden bg-background">
        <div className={`p-6 text-white ${
            teacher.programColor === 'blue' ? 'bg-uagrm-blue' : 'bg-uagrm-red'
        }`}>
          <DialogHeader className="flex flex-row items-center gap-4 space-y-0">
            <Avatar className="h-16 w-16 border-2 border-white/50 shadow-sm">
              <AvatarImage src={teacher.image} />
              <AvatarFallback>{teacher.initials}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-xl font-bold text-white">{teacher.name}</DialogTitle>
              <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
                 <GraduationCap className="h-4 w-4" />
                 Docente de Postgrado
              </p>
            </div>
          </DialogHeader>
        </div>

        <ScrollArea className="max-h-[60vh]">
          <div className="p-6 space-y-8">
            
            {/* 1. Módulo Actual */}
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
                 <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-uagrm-blue" />
                    Módulo Actual
                 </h4>
                 <p className="text-foreground font-medium">{teacher.module}</p>
                 <p className="text-xs text-muted-foreground mt-1">{teacher.program}</p>
            </div>

            {/* 2. Formación Académica */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-bold text-lg border-b border-border pb-2">
                <Briefcase className="h-5 w-5 text-uagrm-blue dark:text-blue-400" />
                <h3>Formación Académica</h3>
              </div>
              <ul className="space-y-3 pl-2">
                {teacher.cv.education.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-uagrm-red mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Habilidades (Tags) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-bold text-lg border-b border-border pb-2">
                <Layers className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <h3>Áreas de Especialización</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {teacher.cv.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1 bg-muted text-foreground hover:bg-uagrm-blue/10 dark:hover:bg-blue-900/30 hover:text-uagrm-blue dark:hover:text-blue-400 border-border">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}