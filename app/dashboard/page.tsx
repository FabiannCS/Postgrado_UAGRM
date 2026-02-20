"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Importamos los datos y componentes segmentados
import { studentData } from "./data";
import { ProfileHeader } from "./components/profile-header";
import { ProfileInfo } from "./components/profile-info";
import { ProfileSecurity } from "./components/profile-security";

// Animaciones estandarizadas
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function DashboardPage() {
    const [studentName, setStudentName] = useState("Cargando...");

    // Recuperar nombre del localStorage
    useEffect(() => {
        const storedName = localStorage.getItem("studentName");
        if (storedName) {
            setStudentName(storedName);
        } else {
            setStudentName("Fabian Cuellar Salvatierra");
        }
    }, []);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
        >

            {/* HEADER TÍTULO */}
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Mi Perfil</h1>
                <p className="text-sm text-muted-foreground">Gestiona tu información personal y seguridad de la cuenta.</p>
            </div>

            <div className="space-y-6">
                {/* FILA 1: PERFIL + INFO (Misma altura) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {/* COLUMNA IZQUIERDA */}
                    <motion.div variants={itemVariants} className="lg:col-span-1 h-full">
                        <ProfileHeader studentName={studentName} studentData={studentData} />
                    </motion.div>

                    {/* COLUMNA DERECHA (INFO) */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 h-full">
                        <ProfileInfo studentData={studentData} />
                    </motion.div>
                </div>

                {/* FILA 2: SEGURIDAD (Offset a la derecha) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="hidden lg:block lg:col-span-1"></div> {/* Espaciador */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <ProfileSecurity />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}