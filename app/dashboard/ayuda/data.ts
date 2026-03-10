// app/dashboard/ayuda/data.ts

import {
  Building2,
  ClipboardList,
  Phone,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

export interface HelpTopic {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // tailwind color class base, e.g. "blue"
}

export const helpTopics: HelpTopic[] = [
  {
    id: "atencion-administrativa",
    title: "Atención Administrativa",
    description:
      "Horarios de atención, ubicación y contacto de la Dirección de Postgrado.",
    icon: Building2,
    color: "blue",
  },
  {
    id: "admision",
    title: "Admisión y Readmisión",
    description:
      "Requisitos, documentación y proceso para admisión o readmisión al postgrado.",
    icon: ClipboardList,
    color: "amber",
  },
  {
    id: "contacto",
    title: "Contacto",
    description:
      "Canales de comunicación, correo electrónico y teléfonos de atención.",
    icon: Phone,
    color: "emerald",
  },
  {
    id: "faq",
    title: "Preguntas Frecuentes",
    description:
      "Respuestas a las dudas más comunes sobre programas, trámites y servicios.",
    icon: HelpCircle,
    color: "violet",
  },
];

// ─── Contenido detallado por tópico ───

export const adminContent = {
  title: "Atención Administrativa",
  subtitle: "Dirección de Postgrado - UAGRM",
  schedule: "Lun a Vie: 08:00 - 16:00",
  phone: "3-333-4444 int 123",
  location: "Campus Universitario, Edificio de Postgrado, 2do piso",
  notes: [
    "La atención al público se realiza en horario continuo, sin corte al mediodía.",
    "Para trámites urgentes fuera de horario, comunicarse al número de emergencias.",
    "Los días sábados se atiende únicamente con cita previa.",
  ],
};

export const admisionContent = {
  title: "Admisión y Readmisión",
  sections: [
    {
      heading: "Requisitos de Admisión",
      items: [
        "Título profesional a nivel Licenciatura (fotocopia legalizada).",
        "Certificado de notas original de la carrera de Licenciatura.",
        "Fotocopia de Cédula de Identidad vigente.",
        "Fotografía digital 3x3 fondo rojo.",
        "Formulario de inscripción llenado (disponible en secretaría).",
        "Comprobante de pago de matrícula.",
      ],
    },
    {
      heading: "Requisitos de Readmisión",
      items: [
        "Carta de solicitud dirigida al Director de Postgrado explicando los motivos de la interrupción.",
        "Historial Académico actualizado (Kardex).",
        "Fotocopia de Cédula de Identidad vigente.",
        "No tener deudas pendientes con la universidad.",
      ],
    },
    {
      heading: "Proceso de Readmisión",
      steps: [
        {
          title: "1. Solicitud",
          desc: "Llenar el formulario digital y adjuntar documentos.",
        },
        {
          title: "2. Pago",
          desc: "Cancelar el arancel de readmisión (Bs. 350).",
        },
        {
          title: "3. Validación",
          desc: "Aprobación por Consejo Académico (48-72 hrs).",
        },
      ],
    },
  ],
};

export const contactoContent = {
  title: "Contacto",
  channels: [
    {
      label: "Correo Electrónico",
      value: "admisiones.postgrado@uagrm.edu.bo",
      type: "email" as const,
    },
    {
      label: "Teléfono",
      value: "+591 3 333-4444",
      type: "phone" as const,
    },
    {
      label: "Horario de Atención",
      value: "Lunes a Viernes, 08:00 - 16:00",
      type: "schedule" as const,
    },
  ],
  socialNote:
    "Para consultas generales también puedes escribirnos por las redes sociales oficiales de la UAGRM.",
};

export const faqContent = {
  title: "Preguntas Frecuentes",
  items: [
    {
      question: "¿Cuánto dura un programa de postgrado?",
      answer:
        "La duración varía según el programa. Las especialidades duran entre 1 y 2 años, las maestrías entre 2 y 3 años, y los doctorados entre 3 y 5 años.",
    },
    {
      question: "¿Puedo cursar un postgrado si estudié en otra universidad?",
      answer:
        "Sí, se aceptan profesionales de cualquier universidad reconocida. Debes presentar tu título legalizado y cumplir con los requisitos de admisión.",
    },
    {
      question: "¿Las clases son presenciales o virtuales?",
      answer:
        "Depende del programa. Algunos módulos son presenciales, otros virtuales y algunos en modalidad semipresencial. Consulta el plan de cada programa.",
    },
    {
      question: "¿Qué pasa si dejo de asistir a clases?",
      answer:
        "Si no registras materias por más de dos periodos consecutivos, tu matrícula se suspende y deberás realizar un trámite de readmisión.",
    },
    {
      question: "¿Cómo puedo pagar la matrícula?",
      answer:
        "El pago se realiza en las cajas de la universidad o mediante transferencia bancaria. Consulta los montos actualizados en secretaría.",
    },
    {
      question: "¿Ofrecen becas o descuentos?",
      answer:
        "La universidad cuenta con programas de becas para estudiantes destacados. Consulta en la Dirección de Postgrado para conocer los requisitos y convocatorias vigentes.",
    },
  ],
};
