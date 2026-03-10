// app/dashboard/historico/data.ts

export interface HistoricoRecord {
    id: string;
    programName: string;
    programType: "Maestría" | "Diplomado" | "Especialidad";
    sigla: string;
    moduleName: string;
    period: string;
    status: "Aprobado" | "Reprobado" | "Cursando" | "Pendiente";
    score: number;
}

export const historicoData: HistoricoRecord[] = [
    { id: "1", programName: "Maestría en Administración de Empresas", programType: "Maestría", sigla: "ADM-501", moduleName: "Gestión Estratégica", period: "2024-I", status: "Aprobado", score: 90 },
    { id: "2", programName: "Maestría en Administración de Empresas", programType: "Maestría", sigla: "MKT-502", moduleName: "Marketing Corporativo", period: "2024-I", status: "Aprobado", score: 85 },
    { id: "3", programName: "Maestría en Administración de Empresas", programType: "Maestría", sigla: "FIN-503", moduleName: "Finanzas I", period: "2024-II", status: "Cursando", score: 0 },
    { id: "4", programName: "Especialidad en Finanzas Corporativas", programType: "Especialidad", sigla: "BUR-300", moduleName: "Análisis Bursátil", period: "2024-I", status: "Aprobado", score: 95 },
    { id: "5", programName: "Especialidad en Finanzas Corporativas", programType: "Especialidad", sigla: "ECO-301", moduleName: "Econometría Financiera", period: "2024-I", status: "Reprobado", score: 45 },
    { id: "6", programName: "Especialidad en Finanzas Corporativas", programType: "Especialidad", sigla: "ECO-301", moduleName: "Econometría Financiera (Mesa)", period: "2024-II", status: "Aprobado", score: 70 },
];