"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { itemVariants } from "@/lib/animations";
import { HelpTopic } from "../data";

// Mapa de colores para cada tema
const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    icon: "text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/40",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    icon: "text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-900/40",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    icon: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-100 dark:border-emerald-900/40",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-950/30",
    icon: "text-violet-600 dark:text-violet-400",
    border: "border-violet-100 dark:border-violet-900/40",
  },
};

interface HelpTopicCardProps {
  topic: HelpTopic;
}

export function HelpTopicCard({ topic }: HelpTopicCardProps) {
  const colors = colorMap[topic.color] ?? colorMap.blue;
  const Icon = topic.icon;

  return (
    <motion.div variants={itemVariants}>
      <Link href={`/dashboard/ayuda/${topic.id}`}>
        <Card
          className={`group relative overflow-hidden p-6 cursor-pointer transition-all duration-300
            hover:shadow-lg hover:-translate-y-1 border ${colors.border}
            bg-card hover:${colors.bg}`}
        >
          {/* Decorative circle */}
          <div
            className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.07] ${colors.icon
              .replace("text-", "bg-")
              .replace("dark:", "")}`}
          />

          <div className="relative z-10 space-y-4">
            {/* Icon */}
            <div
              className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${colors.bg} ${colors.icon} transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className="h-6 w-6" />
            </div>

            {/* Text */}
            <div className="space-y-1">
              <h3 className="font-bold text-foreground group-hover:text-uagrm-blue transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>

            {/* Arrow hint */}
            <div className="flex items-center text-xs font-medium text-muted-foreground group-hover:text-uagrm-blue transition-all">
              <span>Ver más</span>
              <svg
                className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
