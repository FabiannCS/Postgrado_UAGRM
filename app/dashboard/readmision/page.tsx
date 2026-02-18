"use client";

import { motion } from "framer-motion";

// Importamos los componentes
import { StatusAlert, UserStatus } from "./components/status-alert";
import { RequirementsList } from "./components/requirements-list";
import { HelpCard } from "./components/help-card";

// --- SIMULACIÓN DE ESTADO ---
// Cambia esto a "Activo" para ver qué pasa si no estás suspendido.
// En el futuro, esto vendrá de la API.
const currentStatus: UserStatus = "Suspendido"; 

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function ReadmisionPage() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 pb-10"
        >
            {/* 1. ENCABEZADO Y ESTADO ACTUAL */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Solicitud de Readmisión</h1>
                    <p className="text-sm text-muted-foreground">
                        Gestiona tu reincorporación a los programas académicos de postgrado.
                    </p>
                </div>
                
                {/* Le pasamos el estado actual al componente */}
                <StatusAlert status={currentStatus} />
            </motion.div>

            {/* LÓGICA VISUAL: 
               Si el usuario está "Activo", quizás no quieras mostrarle los requisitos 
               para no confundirlo. Aquí usamos una condición simple.
            */}
            {currentStatus === "Suspendido" && (
                <motion.div variants={itemVariants}>
                    <RequirementsList />
                </motion.div>
            )}

            {/* 3. CONTACTO Y SOPORTE (Siempre visible) */}
            <motion.div variants={itemVariants}>
                <HelpCard />
            </motion.div>

        </motion.div>
    );
}