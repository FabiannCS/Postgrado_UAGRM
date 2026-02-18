"use client";

import { motion } from "framer-motion";
import { Building2, Clock, Phone } from "lucide-react";
import { itemVariants } from "@/lib/animations";

export function AdminHoursCard() {
    return (
        <motion.div variants={itemVariants} className="pt-2">
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg relative overflow-hidden border border-slate-800">

                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-uagrm-blue rounded-full opacity-20 blur-3xl"></div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                        <Building2 className="h-6 w-6 text-blue-200" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Atención Administrativa</h3>
                        <p className="text-blue-200/80 text-sm">Dirección de Postgrado - UAGRM</p>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1 relative z-10 text-center md:text-right">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <span>Lun a Vie: 08:00 - 16:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Phone className="h-3 w-3" />
                        <span>Contacto: 3-333-4444 int 123</span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
