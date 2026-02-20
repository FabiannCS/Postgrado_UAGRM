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
  theme?: "uagrm-red" | "uagrm-blue" | "emerald";
  number?: string;
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
    theme: "uagrm-blue"
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
    theme: "uagrm-red"
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
    theme: "uagrm-blue"
  }
];

// 1. Módulos que pertenecen a un programa específico
// app/dashboard/programas/data.ts

export const programModules = [
  // --- MÓDULOS DEL PROGRAMA 1 (MBA) ---
  {
    id: 101, programId: 1, name: "Gestión Estratégica", sigla: "ADM-501", estado: "Aprobado", nota: 90,
    credits: 4, hours: 64, period: "2024-I", teacher: "Dr. Roberto Silva", modality: "Presencial",
    horas: "Mar a Mie: 19:00 - 22:00",
    description: "Análisis del entorno competitivo y formulación de estrategias a nivel corporativo.",
    resources: [{ title: "Sílabo y Plan de Clases", type: "pdf" }, { title: "Proyecto Final Evaluado", type: "file" }]
  },
  {
    id: 102, programId: 1, name: "Marketing Corporativo", sigla: "MKT-502", estado: "Aprobado", nota: 85,
    credits: 4, hours: 64, period: "2024-I", teacher: "Msc. Carla Montaño", modality: "Virtual",
    horas: "Sab a Jue de 19:00 a 22:00",
    description: "Desarrollo de estrategias de marketing integral y posicionamiento de marca.",
    resources: [{ title: "Material de Lectura", type: "pdf" }]
  },
  {
    id: 103, programId: 1, name: "Finanzas I", sigla: "FIN-503", estado: "Cursando", nota: 0,
    credits: 5, hours: 80, period: "2024-II", teacher: "Dr. Carlos Ruiz", modality: "Presencial",
    horas: "Lun a Vie de 19:00 a 22:00",
    description: "Análisis de estados financieros, flujos de caja y matemáticas financieras.",
    resources: [{ title: "Unidad 1: Introducción", type: "pdf" }, { title: "Grabación Clase 1", type: "video" }]
  },
  {
    id: 104, programId: 1, name: "Taller de Grado", sigla: "TES-600", estado: "Pendiente", nota: 0,
    credits: 10, hours: 160, period: "2025-II", teacher: "Por asignar", modality: "Presencial",
    horas: "Sábados de 08:00 a 12:00",
    description: "Desarrollo del trabajo final de grado bajo tutoría especializada.",
    resources: []
  },

  // --- MÓDULOS DEL PROGRAMA 2 (Diplomado DMD) ---
  {
    id: 201, programId: 2, name: "SEO Avanzado", sigla: "SEO-101", estado: "Pendiente", nota: 0,
    credits: 3, hours: 48, period: "2026-II", teacher: "Lic. Pedro Gomez", modality: "Virtual",
    description: "Técnicas avanzadas de posicionamiento en motores de búsqueda.",
    resources: []
  },
  {
    id: 202, programId: 2, name: "Social Media Ads", sigla: "SMA-102", estado: "Pendiente", nota: 0,
    credits: 3, hours: 48, period: "2026-II", teacher: "Msc. Laura Paredes", modality: "Virtual",
    description: "Creación y optimización de campañas en Facebook, Instagram y LinkedIn.",
    resources: []
  },

  // --- MÓDULOS DEL PROGRAMA 3 (Especialidad EFC) ---
  {
    id: 301, programId: 3, name: "Análisis Bursátil", sigla: "BUR-300", estado: "Aprobado", nota: 95,
    credits: 5, hours: 80, period: "2024-I", teacher: "Dr. Carlos Ruiz", modality: "Presencial",
    description: "Estudio de los mercados de valores y análisis técnico de acciones.",
    resources: [{ title: "Certificado de Aprobación", type: "pdf" }]
  },
];

// 2. Docentes que enseñan en ese programa
export const programTeachers = [
  { programId: 1, name: "Dr. Roberto Silva", materia: "Gestión Estratégica", email: "r.silva@uagrm.edu.bo", number: "78090020" },
  { programId: 1, name: "Msc. Carla Montaño", materia: "Marketing Corporativo", email: "c.montano@uagrm.edu.bo", number: "78090020" },

  { programId: 2, name: "Lic. Pedro Gomez", materia: "SEO Avanzado", email: "p.gomez@uagrm.edu.bo", number: "78090020" },
  { programId: 2, name: "Ing. Juan Antonio", materia: "Bases de datos", email: "juan_antonio@uagrm.edu.bo", number: "78090020" }
];