// app/dashboard/modulos/data.ts

export interface Resource {
  type: "pdf" | "video" | "file";
  title: string;
  date: string;
}

export interface Module {
  id: number;
  program: string;
  name: string;
  code: string;
  group: string;
  modality: string;
  teacher: string;
  email?: string;
  startDate: string;
  endDate: string;
  schedule: string;
  classroom?: string;
  location?: string;
  status: string;
  progress: number;
  color: "blue" | "red";
  resources: Resource[];
}

export const modulesData: Module[] = [
  {
    id: 1,
    program: "Maestría (MBA)",
    name: "Gestión Estratégica Empresarial",
    code: "MBA-201",
    group: "Grupo A",
    modality: "Virtual",
    teacher: "Dr. Roberto Méndez",
    email: "r.mendez@uagrm.edu.bo",
    startDate: "15 de Marzo, 2026",
    endDate: "30 de Abril, 2026",
    schedule: "Lunes y Miércoles • 19:00 - 22:00",
    classroom: "Sala Virtual 1 (Zoom)", 
    location: "Campus Virtual",
    status: "En Curso",
    progress: 35,
    color: "blue",
    resources: [
        { type: "pdf", title: "Sílabo de la Materia", date: "15/03/2026" },
        { type: "pdf", title: "Unidad 1: Introducción a la Estrategia", date: "16/03/2026" },
        { type: "video", title: "Grabación Clase Inaugural", date: "15/03/2026" },
        { type: "file", title: "Caso de Estudio: Tesla", date: "20/03/2026" },
    ]
  },
  {
    id: 2,
    program: "Diplomado en Marketing Digital",
    name: "Estrategias de SEO y SEM",
    code: "DMD-102",
    group: "Grupo B",
    modality: "Presencial",
    teacher: "Msc. Laura Paredes",
    email: "l.paredes@uagrm.edu.bo",
    startDate: "18 de Marzo, 2026",
    endDate: "20 de Abril, 2026",
    schedule: "Martes y Jueves • 18:30 - 21:30",
    classroom: "Laboratorio de Cómputo 3",
    location: "Módulo 214 - Planta Baja",
    status: "Por Iniciar",
    progress: 0,
    color: "red",
    resources: [
        { type: "pdf", title: "Guía de Instalación de Herramientas", date: "10/03/2026" },
    ]
  },
  {
     id: 3,
     program: "Maestría (MBA)",
     name: "Finanzas Corporativas Avanzadas",
     code: "MBA-202",
     group: "Grupo A",
     modality: "Virtual",
     teacher: "Dr. Carlos Ruiz",
     email: "c.ruiz@uagrm.edu.bo",
     startDate: "01 de Mayo, 2026",
     endDate: "15 de Junio, 2026",
     schedule: "Lunes y Miércoles • 19:00 - 22:00",
     classroom: "Sala Virtual 2",
     location: "Campus Virtual",
     status: "Inscrito",
     progress: 0,
     color: "blue",
     resources: []
  }
];