"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import { itemVariants } from "@/lib/animations";
import { WeeklyScheduleItem } from "../data";

interface DayScheduleCardProps {
    dayItem: WeeklyScheduleItem;
    className?: string;
}

export function DayScheduleCard({ dayItem, className }: DayScheduleCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            layout
            className={`flex flex-col h-full ${className}`}
        >
            {/* Cabecera del día */}
            <div className="bg-slate-800 dark:bg-slate-900 text-white text-center py-2 rounded-t-lg text-sm font-bold uppercase tracking-wider shadow-sm border-b border-slate-700">
                {dayItem.day}
            </div>

            {/* Cuerpo del horario */}
            <Card className={`rounded-t-none border-t-0 flex-1 ${dayItem.classes.length === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                <CardContent className="p-3 flex flex-col items-center justify-start text-center h-full min-h-[160px]">

                    {dayItem.classes.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground/50">
                            <span className="text-sm italic">Sin actividad</span>
                        </div>
                    ) : (
                        <div className="w-full space-y-3">
                            {dayItem.classes.map((cls, idx) => (
                                <motion.div
                                    key={`${cls.subject}-${idx}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full text-left group"
                                >
                                    {idx > 0 && <Separator className="my-3" />}

                                    <div className="flex flex-col gap-1.5">
                                        {/* BADGE DEL PROGRAMA */}
                                        <div className="flex justify-between items-start">
                                            <Badge variant="secondary" className={`
                        text-[10px] font-bold px-1.5 h-5 border
                        ${cls.programColor === 'blue'
                                                    ? 'bg-blue-50 text-uagrm-blue border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800'
                                                    : 'bg-red-50 text-uagrm-red border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'}
                      `}>
                                                {cls.program}
                                            </Badge>
                                            <span className="text-[10px] font-mono font-medium text-muted-foreground bg-muted px-1 rounded">
                                                {cls.time}
                                            </span>
                                        </div>

                                        {/* NOMBRE DE LA MATERIA */}
                                        <h3 className="font-bold text-foreground text-xs leading-snug line-clamp-2 group-hover:text-uagrm-blue transition-colors">
                                            {cls.subject}
                                        </h3>

                                        {/* AULA Y MODALIDAD */}
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <MapPin className="h-3 w-3 text-muted-foreground" />
                                            <span className="text-[10px] text-muted-foreground font-medium truncate">
                                                {cls.room}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                </CardContent>
            </Card>
        </motion.div>
    );
}
