"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, BookOpen, Phone } from "lucide-react";

interface Teacher {
    name: string;
    email: string;
    materia: string;
    number: string;
}

export function TabTeachers({ teachers }: { teachers: Teacher[] }) {
  if (teachers.length === 0) {
    return <div className="text-center py-10 text-muted-foreground">No hay docentes asignados visibles.</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
        {teachers.map((teacher, i) => (
            <Card key={i}>
                <CardContent className="p-4 flex items-center gap-4">
                    <Avatar className="h-12 w-12 border">
                        <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-bold text-sm">{teacher.name}</h4>
                        <p className="text-xs text-uagrm-blue flex items-center gap-1 mt-1">
                            <BookOpen className="h-3 w-3" /> {teacher.materia}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Mail className="h-3 w-3" /> {teacher.email}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Phone className="h-3 w-3" /> {teacher.number}
                        </p>
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
  );
}