"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircleQuestion } from "lucide-react";
import { itemVariants } from "@/lib/animations";
import { faqContent } from "../../data";

export function FaqView() {
  return (
    <div className="space-y-4">
      {faqContent.items.map((item, i) => (
        <motion.div key={i} variants={itemVariants}>
          <Card className="group hover:border-uagrm-blue/30 transition-colors">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 bg-violet-100 dark:bg-violet-900/30 p-1.5 rounded-full shrink-0">
                  <MessageCircleQuestion className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">
                  {item.question}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                {item.answer}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
