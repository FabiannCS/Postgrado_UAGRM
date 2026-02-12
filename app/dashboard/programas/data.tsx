// app/dashboard/programas/data.ts

export type ProgramStatus = "Activo" | "Completado" | "Por Iniciar";

export interface Program {
  id: number;
  type: "Maestría" | "Diplomado" | "Especialidad";
  name: string;
  code: string;
  status: ProgramStatus;
  description: string;
  startDate: string;
  endDate: string;
  period: string;
  progress: number;
  creditsCompleted: number;
  totalCredits: number;
  coordinator: string;
  coordinatorEmail: string;
  // Campo visual original
  theme?: "orange" | "blue" | "emerald"; 
}

export const programsData: Program[] = [
  {
    id: 1,
    type: "Maestría",
    name: "Maestría en Administración de Empresas",
    code: "MBA",
    status: "Activo",
    description: "Programa enfocado en el desarrollo de habilidades directivas y estratégicas para la gestión empresarial moderna.",
    startDate: "15 de Marzo 2024",
    endDate: "15 de Diciembre 2025",
    period: "2026-I",
    progress: 45,
    creditsCompleted: 27,
    totalCredits: 60,
    coordinator: "Dr. Roberto Silva",
    coordinatorEmail: "mba@uagrm.edu.bo",
    theme: "blue"
  },
  {
    id: 2,
    type: "Diplomado",
    name: "Diplomado en Marketing Digital",
    code: "DMD",
    status: "Por Iniciar",
    description: "Especialización intensiva en herramientas digitales, SEO, SEM y estrategias de social media marketing.",
    startDate: "20 de Abril 2026",
    endDate: "20 de Agosto 2026",
    period: "2026-II",
    progress: 0,
    creditsCompleted: 0,
    totalCredits: 20,
    coordinator: "Msc. Laura Paredes",
    coordinatorEmail: "dmd@uagrm.edu.bo",
    theme: "orange"
  },
  {
    id: 3,
    type: "Especialidad",
    name: "Especialidad en Finanzas Corporativas",
    code: "EFC",
    status: "Completado",
    description: "Formación avanzada en análisis financiero, valoración de empresas y mercados de capitales.",
    startDate: "10 de Enero 2024",
    endDate: "10 de Diciembre 2025",
    period: "2024-I",
    progress: 100,
    creditsCompleted: 45,
    totalCredits: 45,
    coordinator: "Dr. Carlos Ruiz",
    coordinatorEmail: "efc@uagrm.edu.bo",
    theme: "blue"
  }
];