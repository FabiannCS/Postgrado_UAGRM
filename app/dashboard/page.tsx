"use client";

import NextImage from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Award, Mail, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

// Datos de ejemplo
const stats = [
    {
        label: "Aprobados",
        value: 2,
        icon: CheckCircle,
        color: "text-green-700 dark:text-green-400", // Icono y texto fuerte
        bg: "bg-green-100 dark:bg-green-900/20",      // Fondo más visible (antes era 50)
        border: "border-green-200 dark:border-green-900" // Borde sutil
    },
    {
        label: "Reprobados",
        value: 1,
        icon: XCircle,
        color: "text-red-700 dark:text-red-400",
        bg: "bg-red-100 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-900"
    },
    {
        label: "Cursando",
        value: 2,
        icon: Clock,
        color: "text-blue-700 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-900"
    },
    {
        label: "Promedio",
        value: "87.50",
        icon: Award,
        color: "text-purple-700 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-900"
    },
];

const grades = [
    { code: "MBA-101", module: "Gestión Estratégica", period: "2024-I", credits: 4, grade: 85, status: "Aprobado" },
    { code: "MBA-102", module: "Marketing Avanzado", period: "2024-I", credits: 3, grade: 90, status: "Aprobado" },
    { code: "MBA-103", module: "Finanzas Corporativas", period: "2024-II", credits: 4, grade: 55, status: "Reprobado" },
    { code: "MBA-201", module: "Análisis de Datos", period: "2025-I", credits: 3, grade: "-", status: "Cursando" },
    { code: "MBA-202", module: "Liderazgo Organizacional", period: "2025-I", credits: 3, grade: "-", status: "Cursando" },
];



export default function DashboardPage() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
        >

            {/* Título con animación suave */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Mis Notas</h1>
                <p className="text-sm text-muted-foreground">Resumen de tu avance académico y calificaciones.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* COLUMNA IZQUIERDA: Perfil (Solo PC) */}
                <motion.div
                    variants={itemVariants}
                    className="hidden lg:block lg:col-span-4 xl:col-span-3"
                >
                    <Card className="border-none shadow-lg bg-card text-card-foreground overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Fondo con Gradiente UAGRM */}
                        <div className="h-28 bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 w-full relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        </div>

                        <CardContent className="bg-card flex flex-col items-center -mt-14 text-center space-y-3 pb-8 px-6">
                            <div className="relative h-28 w-28 rounded-full overflow-hidden border-[5px] border-card shadow-lg bg-card ring-1 ring-border">
                                <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-3xl">
                                    <NextImage
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Foto de perfil"
                                        width={112}
                                        height={112}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-foreground">María González</h2>
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2 bg-muted py-1.5 px-3 rounded-full mx-auto w-fit border border-border">
                                    <Mail className="w-3 h-3" />
                                    <span>cuellarfabian2002@gmail.com</span>
                                </div>
                                <div className="flex items-center justify-center text-xs mt-2 text-muted-foreground bg-muted py-1.5 px-3 rounded-full mx-auto w-fit border border-border">
                                    <span>Registro: 221110009</span>
                                </div>

                                <Badge variant="secondary" className="mt-6 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-4 py-1">
                                    Estudiante Activo
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* COLUMNA DERECHA: Contenido Principal */}
                <div className="lg:col-span-8 xl:col-span-9 space-y-6">

                    {/* Tarjetas de Estadísticas (Stats) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }}>
                                {/* AQUÍ ESTÁ EL CAMBIO: Quitamos las opacidades para que se vea el color real */}
                                <Card className={`bg-card border shadow-sm transition-all duration-300 hover:shadow-md cursor-default ${stat.bg} ${stat.border}`}>
                                    <CardContent className="p-5 flex flex-col items-center justify-center text-center space-y-3">
                                        {/* El círculo del icono ahora es blanco para contrastar con el fondo de color */}
                                        <div className={`p-3 rounded-full bg-white shadow-sm ring-inset ${stat.border}`}>
                                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                        </div>
                                        <div>
                                            <div className={`text-3xl font-bold tracking-tight ${stat.color}`}>{stat.value}</div>
                                            {/* El texto de la etiqueta ahora es un gris oscuro/color para mejor lectura */}
                                            <div className={`text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1 ${stat.color} opacity-80`}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tabla de Notas */}
                    <motion.div variants={itemVariants}>
                        <Card className="border shadow-sm overflow-hidden bg-card ring-1 ring-border">
                            <CardHeader className="bg-card border-b border-border px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                                        <BookOpen className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base font-bold text-foreground">Historial de Módulos</CardTitle>
                                        <p className="text-xs text-muted-foreground">Periodo Académico 2024-2025</p>
                                    </div>
                                </div>
                                <Badge variant="outline" className="text-muted-foreground font-medium border-border bg-muted">
                                    Maestría en Administración (MBA)
                                </Badge>
                            </CardHeader>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold">Código</th>
                                            <th className="px-6 py-3 font-semibold">Módulo</th>
                                            <th className="px-6 py-3 font-semibold">Periodo</th>
                                            <th className="px-6 py-3 font-semibold text-center">Créditos</th>
                                            <th className="px-6 py-3 font-semibold text-center">Nota</th>
                                            <th className="px-6 py-3 font-semibold text-right">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {grades.map((item, index) => (
                                            <motion.tr
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.05 }} // Pequeño efecto cascada en filas
                                                className="bg-card hover:bg-muted/50 transition-colors group cursor-default"
                                            >
                                                <td className="px-6 py-4 font-medium text-muted-foreground group-hover:text-blue-700 transition-colors">{item.code}</td>
                                                <td className="px-6 py-4 text-muted-foreground font-medium">{item.module}</td>
                                                <td className="px-6 py-4 text-muted-foreground text-xs">
                                                    <span className="bg-muted px-2 py-1 rounded text-foreground">{item.period}</span>
                                                </td>
                                                <td className="px-6 py-4 text-muted-foreground text-center">{item.credits}</td>
                                                <td className={`px-6 py-4 font-bold text-center text-base 
                                                    ${item.status === 'Aprobado' ? "text-green-700 dark:text-green-400" : ""}
                                                    ${item.status === 'Reprobado' ? "text-red-700 dark:text-red-400" : ""}
                                                    ${item.status === 'Cursando' ? "text-blue-700 dark:text-blue-400" : ""}
                                                    `}>
                                                    {item.grade}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Badge className={`
                                                font-normal border shadow-none
                                                ${item.status === 'Aprobado' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-30 border-green-200 dark:border-green-800' : ''}
                                                ${item.status === 'Reprobado' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800' : ''}
                                                ${item.status === 'Cursando' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800' : ''}
                                            `}>
                                                        {item.status}
                                                    </Badge>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination dummy footer */}
                            <div className="bg-muted/30 px-6 py-3 border-t border-border flex justify-end">
                                <button className="text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center hover:underline">
                                    Ver historial completo <ChevronRight className="h-3 w-3 ml-1" />
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}