"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  FileText,
  Banknote,
  UserCheck,
  ChevronRight,
} from "lucide-react";
import { itemVariants } from "@/lib/animations";
import { admisionContent } from "../../data";

const stepIcons = [FileText, Banknote, UserCheck];

export function AdmisionView() {
  return (
    <div className="space-y-6">
      {admisionContent.sections.map((section, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <Card
            className={
              section.heading.includes("Proceso")
                ? "border-t-4 border-t-uagrm-blue"
                : ""
            }
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                {section.heading.includes("Proceso") ? (
                  <ChevronRight className="h-4 w-4 text-uagrm-blue" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-uagrm-blue" />
                )}
                {section.heading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Items list */}
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm group">
                      <div className="mt-0.5 h-5 w-5 rounded-full border border-border flex items-center justify-center bg-muted group-hover:bg-blue-50 group-hover:border-blue-200 dark:group-hover:bg-blue-900/20 transition-colors shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-uagrm-blue" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Steps timeline */}
              {section.steps && (
                <div className="relative border-l border-border ml-3 space-y-8 pb-2">
                  {section.steps.map((step, i) => {
                    const StepIcon = stepIcons[i] || FileText;
                    return (
                      <div key={i} className="relative pl-8">
                        <span className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center z-10">
                          <StepIcon className="h-3 w-3 text-muted-foreground" />
                        </span>
                        <h4 className="text-sm font-bold text-foreground">
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
