import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";
import { programsData } from "../data";

// Configuración visual de cada card de resumen
const summaryCards = [
  {
    label: "Programas Totales",
    icon: GraduationCap,
    key: "total" as const,
    color: "text-foreground",
    bg: "bg-muted/50",
    iconColor: "text-muted-foreground",
  },
  {
    label: "En Curso",
    icon: BookOpen,
    key: "active" as const,
    color: "text-uagrm-blue",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-uagrm-blue",
  },
  {
    label: "Completados",
    icon: Trophy,
    key: "completed" as const,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600",
  },
];

export function SummaryCards() {
  const summary = {
    total: programsData.length,
    active: programsData.filter((p) => p.status === "Activo").length,
    completed: programsData.filter((p) => p.status === "Completado").length,
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {summaryCards.map((card) => (
        <Card key={card.key} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.label}
            </CardTitle>
            <div className={`p-1.5 rounded-lg ${card.bg}`}>
              <card.icon className={`h-4 w-4 ${card.iconColor}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${card.color}`}>
              {summary[card.key]}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
