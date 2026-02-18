// app/dashboard/readmision/data.ts

import { FileText, UserCheck, Banknote } from "lucide-react";

// FECHAS DE HABILITACIÓN DEL SISTEMA
export const systemDates = {
    startDate: "01 de Marzo, 2026",
    endDate: "30 de Marzo, 2026",
    isOpen: true // Cambiar a false para simular sistema cerrado
};

// INFORMACIÓN EXACTA DE TU ARCHIVO ORIGINAL
export const requirements = [
    "Carta de solicitud dirigida al Director de Postgrado explicando los motivos de la interrupción.",
    "Historial Académico actualizado (Kardex).",
    "Fotocopia de Cédula de Identidad vigente.",
    "No tener deudas pendientes con la universidad."
];

export const processSteps = [
    {
        icon: FileText,
        title: "1. Solicitud",
        desc: "Llenar el formulario digital y adjuntar documentos."
    },
    {
        icon: Banknote,
        title: "2. Pago",
        desc: "Cancelar el arancel de readmisión (Bs. 350)."
    },
    {
        icon: UserCheck,
        title: "3. Validación",
        desc: "Aprobación por Consejo Académico (48-72 hrs)."
    }
];

export const contactInfo = {
    email: "admisiones.postgrado@uagrm.edu.bo",
    phone: "+591 3 333-4444",
    schedule: "08:00 - 16:00"
};