"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, FileText, GraduationCap, Briefcase, BookOpen, Layers } from "lucide-react";
import { motion } from "framer-motion";

// Datos de los Docentes
const teachers = [
  {
    id: 1,
    name: "Dr. Carlos Rodríguez",
    subject: "Análisis de Datos",
    email: "carlos.rodriguez@universidad.edu",
    phone: "+1 (555) 123-4567",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    initials: "CR",
    color: "bg-blue-600",
    cv: {
      education: [
        "PhD en Ciencias de la Computación - MIT",
        "Maestría en Data Science - Stanford University",
        "Licenciatura en Matemáticas - Universidad Nacional"
      ],
      experience: [
        "Profesor Titular - Universidad (2015 - Presente)",
        "Data Scientist Senior - Tech Corp (2010 - 2015)",
        "Analista de Datos - Finance Inc (2005 - 2010)"
      ],
      publications: [
        "Machine Learning Applications in Business Analytics (2023)",
        "Advanced Statistical Methods for Data Analysis (2021)",
        "Big Data Processing Techniques (2019)"
      ],
      skills: ["Machine Learning", "Big Data", "Statistical Analysis", "Python/R"]
    }
  },
  {
    id: 2,
    name: "Dra. Ana Martínez",
    subject: "Liderazgo Organizacional",
    email: "ana.martinez@universidad.edu",
    phone: "+1 (555) 987-6543",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    initials: "AM",
    color: "bg-purple-600",
    cv: {
      education: [
        "PhD en Psicología Organizacional - Harvard",
        "MBA - London Business School",
        "Licenciatura en Administración - UAGRM"
      ],
      experience: [
        "Consultora Senior - Global HR (2018 - Presente)",
        "Directora de Talento Humano - Corp Latam (2012 - 2018)"
      ],
      publications: [
        "Leadership in the Digital Age (2024)",
        "Emotional Intelligence at Work (2020)"
      ],
      skills: ["Liderazgo", "Gestión de Cambio", "Recursos Humanos", "Coaching"]
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function DocentesPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Mis Docentes</h1>
        <p className="text-sm text-muted-foreground">Información de contacto y perfil profesional.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <motion.div key={teacher.id} variants={itemVariants}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card group">

              {/* Encabezado Visual */}
              <div className={`h-24 ${teacher.color} relative`}>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
              </div>

              <CardContent className="flex flex-col items-center -mt-12 text-center pb-6">
                {/* Avatar */}
                <Avatar className="h-24 w-24 border-4 border-background shadow-md bg-background">
                  <AvatarImage src={teacher.image} />
                  <AvatarFallback className={`text-2xl font-bold text-white ${teacher.color}`}>
                    {teacher.initials}
                  </AvatarFallback>
                </Avatar>

                {/* Info Básica */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {teacher.name}
                  </h3>
                  <Badge variant="secondary" className="font-medium text-foreground bg-muted text-sm">
                    {teacher.subject}
                  </Badge>
                </div>

                {/* Contacto */}
                <div className="mt-6 w-full space-y-3 px-4">
                  <a href={`mailto:${teacher.email}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground border border-transparent hover:border-border">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="truncate">{teacher.email}</span>
                  </a>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground border border-transparent hover:border-border">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>{teacher.phone}</span>
                  </div>
                </div>
              </CardContent>

              <Separator className="bg-border" />

              <CardFooter className="p-4 bg-muted/30">

                {/* MODAL DE CURRÍCULUM */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-slate-900 dark:bg-slate-100 hover:bg-blue-800 dark:hover:bg-blue-200 text-white dark:text-slate-900 shadow-md group-hover:shadow-blue-900/20 dark:group-hover:shadow-blue-100/20 transition-all">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver Currículum Completo
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl max-h-[85vh] p-0 overflow-hidden rounded-xl bg-background border-border">
                    {/* Header del Modal */}
                    <div className={`${teacher.color} p-6 text-white`}>
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{teacher.name}</DialogTitle>
                        <DialogDescription className="text-blue-100 mt-1 opacity-90">
                          {teacher.subject} • Perfil Académico
                        </DialogDescription>
                      </DialogHeader>
                    </div>

                    {/* Cuerpo del Modal con Scroll */}
                    <ScrollArea className="h-full max-h-[60vh] p-6 bg-background">
                      <div className="space-y-8">

                        {/* 1. Formación */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-foreground font-bold text-lg border-b border-border pb-2">
                            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <h3>Formación Académica</h3>
                          </div>
                          <ul className="space-y-2 ml-2">
                            {teacher.cv.education.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 2. Experiencia */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-foreground font-bold text-lg border-b border-border pb-2">
                            <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            <h3>Experiencia Profesional</h3>
                          </div>
                          <ul className="space-y-2 ml-2">
                            {teacher.cv.experience.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 3. Publicaciones */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-foreground font-bold text-lg border-b border-border pb-2">
                            <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <h3>Publicaciones Destacadas</h3>
                          </div>
                          <ul className="space-y-2 ml-2">
                            {teacher.cv.publications.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground italic">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 4. Habilidades (Tags) */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-foreground font-bold text-lg border-b border-border pb-2">
                            <Layers className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            <h3>Áreas de Especialización</h3>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {teacher.cv.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary" className="px-3 py-1 bg-muted text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 border-border">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                      </div>
                    </ScrollArea>

                  </DialogContent>
                </Dialog>

              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}