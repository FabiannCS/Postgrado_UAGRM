"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";
import { StudentData } from "../data";

interface ProfileHeaderProps {
    studentName: string;
    studentData: StudentData;
}

export function ProfileHeader({ studentName, studentData }: ProfileHeaderProps) {
    return (
        <Card className="overflow-hidden border-t-4 border-t-uagrm-blue h-full">
            <div className="h-32 bg-slate-100 dark:bg-slate-900 relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            <CardContent className="text-center -mt-16 relative z-10">
                <div className="inline-block p-1.5 rounded-full bg-background shadow-lg mb-4">
                    <Avatar className="h-32 w-32 border-2 border-muted">
                        <AvatarImage src="https://github.com/shadcn.png" alt={studentName} />
                        <AvatarFallback className="text-4xl bg-uagrm-blue text-white">
                            {studentName.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </div>

                <h2 className="text-xl font-bold text-foreground">{studentName}</h2>
                <p className="text-md text-muted-foreground mb-4 font-semibold">{studentData.career}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <Badge variant="secondary" className="bg-blue-50 text-uagrm-blue dark:bg-blue-900/30 dark:text-blue-300 text-md">
                        {studentData.level}
                    </Badge>
                </div>

                <Separator className="my-6" />

                <div className="text-left space-y-4">
                    <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        Estado del perfil 
                    </h3>
                    <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 p-3 rounded-lg flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-green-700 dark:text-green-400 font-medium">Matrícula Activa</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}