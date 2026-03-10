"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    BookOpen,
    CheckCircle2,
    Calculator,
    Search,
    AlertCircle,
    Clock,
    SearchX
} from "lucide-react";

import { historicoData } from "./data";

// Animaciones estandarizadas
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function HistoricoPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // Cálculos para las tarjetas de resumen
    const approvedModules = historicoData.filter(m => m.status === "Aprobado");
    const averageScore = approvedModules.length > 0
        ? Math.round(approvedModules.reduce((acc, curr) => acc + curr.score, 0) / approvedModules.length)
        : 0;
    const currentModules = historicoData.filter(m => m.status === "Cursando").length;

    // Filtrado + ordenado: Cursando siempre al final
    const statusOrder: Record<string, number> = { "Aprobado": 0, "Reprobado": 1, "Pendiente": 2, "Cursando": 3 };
    const filteredData = historicoData
        .filter(record =>
            record.moduleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.programName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.sigla.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99));

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6 pb-10"
        >
            {/* HEADER DE LA PÁGINA */}
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Histórico Académico</h1>
                <p className="text-sm text-muted-foreground">Consulta tus calificaciones y estado de todos los módulos inscritos.</p>
            </div>

            {/* TARJETAS DE RESUMEN */}
            <div className="grid gap-4 md:grid-cols-3">
                <motion.div variants={itemVariants}>
                    <Card className="border-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-[18px] font-medium">Promedio General</CardTitle>
                            <Calculator className="h-4 w-4 text-uagrm-blue" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-uagrm-blue">{averageScore}</div>
                            <p className="text-xs text-muted-foreground mt-1">De materias aprobadas</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="border-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-[18px] font-medium">Materias Aprobadas</CardTitle>
                            <CheckCircle2 className="h-4 w-4 text-uagrm-blue" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-uagrm-blue">{approvedModules.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">Créditos superados exitosamente</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="border-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-[18px] font-medium">Cursando Actualmente</CardTitle>
                            <BookOpen className="h-4 w-4 text-uagrm-blue" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-uagrm-blue">{currentModules}</div>
                            <p className="text-xs text-muted-foreground mt-1">Módulos en periodo activo</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* LISTA DE CALIFICACIONES */}
            <motion.div variants={itemVariants}>
                <Card className="shadow-sm border-2">
                    <CardHeader className="pb-4 border-b border-border bg-muted/20">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl font-bold">Registro de Notas</CardTitle>
                            </div>
                            {/* Buscador */}
                            <div className="relative w-full sm:w-72">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Buscar materia o programa..."
                                    className="pl-9 bg-background border-muted-foreground/20 focus:border-uagrm-blue"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6">
                        <div className="space-y-3">
                            <AnimatePresence mode="popLayout">
                                {filteredData.length > 0 ? (
                                    filteredData.map((record) => (
                                        <motion.div
                                            key={record.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-2 border-border rounded-xl hover:border-uagrm-blue/40 hover:shadow-md transition-all bg-card"
                                        >
                                            {/* LADO IZQUIERDO: ICONO + INFO */}
                                            <div className="flex items-start gap-4">

                                                {/* Icono de Estado */}
                                                <div className={`p-2.5 rounded-full shrink-0 mt-1 sm:mt-0 ${record.status === 'Aprobado' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                                    record.status === 'Reprobado' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                                                        'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                                    }`}>
                                                    {record.status === 'Aprobado' }
                                                    {record.status === 'Reprobado' && <AlertCircle className="h-5 w-5" />}
                                                    {record.status === 'Cursando' && <Clock className="h-5 w-5" />}
                                                </div>

                                                {/* Información de la Materia */}
                                                <div className="space-y-1.5">
                                                    <h4 className="font-bold text-foreground text-sm sm:text-base group-hover:text-uagrm-blue transition-colors leading-tight">
                                                        {record.moduleName}
                                                    </h4>

                                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="outline" className="font-mono text-[10px] py-0 h-5 bg-background shrink-0">
                                                                {record.sigla}
                                                            </Badge>
                                                            <span className="flex items-center gap-1 shrink-0">
                                                                <Clock className="h-3 w-3" /> {record.period}
                                                            </span>
                                                        </div>
                                                        {/* Nombre del programa en su propia línea en móvil */}
                                                        <span className="w-full sm:w-auto font-medium wrap-break-word text-muted-foreground" title={record.programName}>
                                                            {record.programName}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* LADO DERECHO: BADGE + NOTA */}
                                            <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-border">
                                                <Badge variant="secondary" className={`text-[10px] uppercase tracking-wider font-bold mb-1 border ${record.status === 'Aprobado' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50' :
                                                    record.status === 'Reprobado' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50' :
                                                        'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50'
                                                    }`}>
                                                    {record.status}
                                                </Badge>

                                                <div className={`text-xl sm:text-2xl font-black ${record.status === 'Aprobado' ? 'text-emerald-600 dark:text-emerald-500' :
                                                    record.status === 'Reprobado' ? 'text-red-600 dark:text-red-500' : 'text-muted-foreground'
                                                    }`}>
                                                    {record.score > 0 ? `${record.score} pts` : '-'}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    /* ESTADO VACÍO (Si la búsqueda no arroja resultados) */
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="py-12 flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-xl bg-muted/20"
                                    >
                                        <div className="bg-muted p-4 rounded-full mb-4">
                                            <SearchX className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground">No hay resultados</h3>
                                        <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                                            No encontramos ninguna materia o programa que coincida con &quot;{searchTerm}&quot;.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
}