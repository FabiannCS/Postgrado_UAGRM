"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { teachersData, Teacher } from "./data";
import { TeacherCard } from "./components/teacher-card";
import { TeacherCvModal } from "./components/teacher-cv-modal";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function DocentesPage() {
  // Estados para manejar el Modal
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const handleViewCV = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Mis Docentes</h1>
        <p className="text-sm text-muted-foreground">Información de contacto y perfil profesional de tus catedráticos actuales.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachersData.map((teacher) => (
          <motion.div key={teacher.id} variants={itemVariants}>
            {/* Usamos el componente Tarjeta refactorizado */}
            <TeacherCard teacher={teacher} onViewCV={handleViewCV} />
          </motion.div>
        ))}
      </div>

      {/* Componente Modal (Solo se renderiza uno para toda la página) */}
      <TeacherCvModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        teacher={selectedTeacher} 
      />
    </motion.div>
  );
}