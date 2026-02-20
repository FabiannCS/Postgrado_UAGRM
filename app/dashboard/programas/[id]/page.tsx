"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Info, BookOpen, Users, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

import { programsData, programModules, programTeachers } from "../data";

import { TabInfo } from "./components/tab-info";
import { TabModules } from "./components/tab-modules";
import { TabTeachers } from "./components/tab-teachers";
import { TabReport } from "./components/tab-report";

export default function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  
  const { id } = use(params);
  const programId = parseInt(id);
  
  const program = programsData.find(p => p.id === programId);
  const modules = programModules.filter(m => m.programId === programId);
  const teachers = programTeachers.filter(t => t.programId === programId);

  if (!program) {
    return <div className="p-8 text-center text-muted-foreground">Programa no encontrado o no tienes acceso.</div>;
  }

  return (
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6 pb-10"
    >
      {/* HEADER DE NAVEGACIÓN */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ChevronLeft className="h-5 w-5" />
        </Button>
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{program.name}</h1>
            <p className="text-sm text-muted-foreground">{program.code} • {program.period}</p>
        </div>
      </div>

      {/* SISTEMA DE PESTAÑAS */}
      <Tabs defaultValue="info" className="w-full">
        
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto">
          <TabsTrigger value="info" className="gap-2 py-2">
             <Info className="h-4 w-4" /> 
             <span>Información</span>
          </TabsTrigger>
          <TabsTrigger value="modules" className="gap-2 py-2">
             <BookOpen className="h-4 w-4" /> 
             <span>Módulos</span>
          </TabsTrigger>
          <TabsTrigger value="teachers" className="gap-2 py-2">
             <Users className="h-4 w-4" /> 
             <span>Docentes</span>
          </TabsTrigger>
          <TabsTrigger value="report" className="gap-2 py-2">
             <AlertTriangle className="h-4 w-4" /> 
             <span>Reportar</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="mt-0">
            <TabInfo program={program} />
        </TabsContent>

        <TabsContent value="modules" className="mt-0">
            <TabModules modules={modules} />
        </TabsContent>

        <TabsContent value="teachers" className="mt-0">
            <TabTeachers teachers={teachers} />
        </TabsContent>

        <TabsContent value="report" className="mt-0">
            <TabReport programName={program.name} />
        </TabsContent>

      </Tabs>
    </motion.div>
  );
}