"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText, BookOpen } from "lucide-react";
import { Teacher } from "../data";

interface TeacherCardProps {
  teacher: Teacher;
  onViewCV: (teacher: Teacher) => void;
}

export function TeacherCard({ teacher, onViewCV }: TeacherCardProps) {
  return (
    <Card className="overflow-hidden border hover:shadow-md transition-all duration-300 h-full flex flex-col group">
      
      {/* HEADER CON COLOR INSTITUCIONAL */}
      <div className={`h-24 w-full relative ${
        teacher.programColor === 'blue' ? 'bg-uagrm-blue' : 'bg-uagrm-red'
      }`}>
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Badge del Programa */}
        <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white text-[10px] font-bold border-none shadow-sm">
                {teacher.program}
            </Badge>
        </div>
      </div>

      <CardContent className="pt-0 flex-1 relative">
        {/* AVATAR FLOTANTE */}
        <div className="flex justify-center -mt-12 mb-4">
          <Avatar className="h-24 w-24 border-4 border-background shadow-md">
            <AvatarImage src={teacher.image} alt={teacher.name} className="object-cover" />
            <AvatarFallback className="text-xl font-bold bg-muted text-muted-foreground">
              {teacher.initials}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* INFO PRINCIPAL */}
        <div className="text-center space-y-1 mb-6">
          <h3 className="text-lg font-bold text-foreground leading-tight">{teacher.name}</h3>
          <div className="flex items-center justify-center gap-2 text-sm text-uagrm-blue dark:text-blue-400 font-medium">
            <BookOpen className="h-4 w-4" />
            {teacher.module}
          </div>
        </div>

        {/* DATOS DE CONTACTO */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full text-blue-600 dark:text-blue-400">
              <Mail className="h-4 w-4" />
            </div>
            <span className="truncate text-muted-foreground">{teacher.email}</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm">
            <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-full text-green-600 dark:text-green-400">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-muted-foreground">{teacher.phone}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-6 px-6 border-t border-border mt-auto">
        <Button 
            variant="outline" 
            className="w-full gap-2 border-uagrm-blue text-uagrm-blue hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/20"
            onClick={() => onViewCV(teacher)}
        >
          <FileText className="h-4 w-4" />
          Ver Hoja de Vida
        </Button>
      </CardFooter>
    </Card>
  );
}