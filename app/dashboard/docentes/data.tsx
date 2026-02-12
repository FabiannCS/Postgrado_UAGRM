// app/dashboard/docentes/data.ts

export interface TeacherCV {
  education: string[];
  skills: string[];
}

export interface Teacher {
  id: number;
  program: string;
  programColor: "blue" | "red";
  module: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  initials: string;
  cv: TeacherCV;
}

export const teachersData: Teacher[] = [
  {
    id: 1,
    program: "Maestría en Administración (MBA)",
    programColor: "blue",
    module: "Gestión Estratégica Empresarial",
    name: "Dr. Roberto Méndez",
    email: "r.mendez@uagrm.edu.bo",
    phone: "+591 700-12345",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    initials: "RM",
    cv: {
      education: [
        "Doctorado en Ciencias Económicas - Universidad de Buenos Aires",
        "Magister en Finanzas Corporativas - UAGRM",
        "Licenciatura en Ingeniería Comercial - UAGRM"
      ],
      skills: ["Planeación Estratégica", "Liderazgo", "Balanced Scorecard", "Gestión de Crisis"]
    }
  },
  {
    id: 2,
    program: "Diplomado en Marketing Digital",
    programColor: "red",
    module: "Estrategias de SEO y SEM",
    name: "Msc. Laura Paredes",
    email: "l.paredes@uagrm.edu.bo",
    phone: "+591 600-98765",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    initials: "LP",
    cv: {
      education: [
        "Máster en Marketing Digital - Esade Business School (España)",
        "Diplomado en Educación Superior - UAGRM",
        "Licenciatura en Marketing y Publicidad - UCB"
      ],
      skills: ["Google Analytics", "SEO Técnico", "Content Marketing", "Facebook Ads"]
    }
  },
  {
    id: 3,
    program: "Maestría en Administración (MBA)",
    programColor: "blue",
    module: "Finanzas Corporativas Avanzadas",
    name: "Dr. Carlos Ruiz",
    email: "c.ruiz@uagrm.edu.bo",
    phone: "+591 777-55555",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    initials: "CR",
    cv: {
      education: [
        "PhD en Finanzas - Universidad de Chile",
        "MBA Executive - INCAE",
        "Auditor Financiero - UAGRM"
      ],
      skills: ["Valoración de Empresas", "Riesgo Financiero", "Mercado de Valores", "Fusiones y Adquisiciones"]
    }
  }
];