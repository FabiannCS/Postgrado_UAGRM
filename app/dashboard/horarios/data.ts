// app/dashboard/horarios/data.ts

export const scheduleData = {
    // El módulo que el estudiante está cursando AHORA
    currentModule: {
        id: 1,
        program: "Maestría en Administración de Empresas",
        name: "Finanzas Corporativas Avanzadas",
        code: "FIN-503",
        teacher: "Dr. Carlos Ruiz",
        startDate: "04 de Marzo, 2026",
        endDate: "28 de Marzo, 2026",
        scheduleRule: "Martes y Jueves • 19:00 - 22:00",
        modality: "Híbrido", // Presencial y Virtual
        credits: 4,
    },
    
    // Las clases exactas más próximas (Agenda)
    upcomingSessions: [
        {
            id: 101,
            date: "Martes, 10 de Marzo",
            time: "19:00 - 22:00",
            type: "Clase Teórica",
            location: "Aula 214 - Edificio Postgrado",
            isVirtual: false,
            isToday: true, // Para resaltarlo
        },
        {
            id: 102,
            date: "Jueves, 12 de Marzo",
            time: "19:00 - 22:00",
            type: "Análisis de Casos",
            location: "Sala Virtual (Zoom)",
            isVirtual: true,
            isToday: false,
        },
        {
            id: 103,
            date: "Martes, 17 de Marzo",
            time: "19:00 - 22:00",
            type: "Evaluación Parcial",
            location: "Aula 214 - Edificio Postgrado",
            isVirtual: false,
            isToday: false,
        }
    ],

    // El módulo que viene el próximo mes
    nextModule: {
        name: "Gestión del Talento Humano",
        startDate: "02 de Abril, 2026",
        teacher: "Msc. Laura Paredes"
    }
};