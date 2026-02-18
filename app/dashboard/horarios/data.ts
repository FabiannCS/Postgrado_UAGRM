export interface ClassSession {
    program: string;
    programColor: 'blue' | 'red';
    subject: string;
    time: string;
    room: string;
    modality: 'Presencial' | 'Virtual' | 'Seminario';
}

export interface WeeklyScheduleItem {
    day: string;
    classes: ClassSession[];
}

export const weeklySchedule: WeeklyScheduleItem[] = [
    {
        day: "Lunes",
        classes: [
            {
                program: "MBA",
                programColor: "blue",
                subject: "Gestión Estratégica",
                time: "19:00 - 22:00",
                room: "Aula 301",
                modality: "Presencial"
            },
            {
                program: "DMD",
                programColor: "red",
                subject: "Marketing Digital",
                time: "19:00 - 22:00",
                room: "Aula 302",
                modality: "Presencial"
            },
            {
                program: "DMD",
                programColor: "red",
                subject: "Taller de Marca Personal",
                time: "18:30 - 22:30",
                room: "Virtual",
                modality: "Virtual"
            }
        ]
    },
    {
        day: "Martes",
        classes: [
            {
                program: "DMD",
                programColor: "red",
                subject: "Estrategias SEO",
                time: "18:30 - 21:30",
                room: "Lab. Cómputo 2",
                modality: "Presencial"
            }
        ]
    },
    {
        day: "Miércoles",
        classes: [
            {
                program: "MBA",
                programColor: "blue",
                subject: "Gestión Estratégica",
                time: "19:00 - 22:00",
                room: "Virtual",
                modality: "Virtual"
            }
        ]
    },
    {
        day: "Jueves",
        classes: [
            {
                program: "DMD",
                programColor: "red",
                subject: "Estrategias SEO",
                time: "18:30 - 21:30",
                room: "Lab. Cómputo 2",
                modality: "Presencial"
            },
            {
                program: "DMD",
                programColor: "red",
                subject: "Taller de Marca Personal",
                time: "18:30 - 22:30",
                room: "Aula 301",
                modality: "Presencial"
            }
        ]
    },
    {
        day: "Viernes",
        classes: [] // Día libre
    },
    {
        day: "Sábado",
        classes: [
            {
                program: "MBA",
                programColor: "blue",
                subject: "Taller de Habilidades Directivas",
                time: "08:00 - 13:00",
                room: "Auditorio Principal",
                modality: "Seminario"
            }
        ]
    },
];
