"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut, GraduationCap, User, Mail, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-uagrm-blue px-4 backdrop-blur-md md:px-6 border-white/10 shadow-sm text-white">

        {/* LADO IZQUIERDO */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-white rounded-lg p-1 shadow-sm">
            <NextImage
              src="/Autonomous_University_Gabriel_Rene_Moreno_Logo.svg.png"
              alt="Logo UAGRM"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none text-white md:text-base">Portal Postgrado</span>
            <span className="text-[10px] text-blue-200 font-medium">U.A.G.R.M.</span>
          </div>
        </div>

        {/* LADO DERECHO */}
        <div className="flex items-center gap-3">
          {/* 2. EL BOTÓN DE MODO OSCURO */}
          <ModeToggle />

          <div className="hidden md:flex flex-col items-end mr-1">
            <span className="text-sm font-medium text-white">María González</span>
            <span className="text-[10px] text-blue-200">Reg: 219004589</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-border hover:ring-primary/20 p-0">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@usuario" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">MG</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
              </DropdownMenuLabel>

              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={(e) => {
                  e.preventDefault();
                  setIsProfileOpen(true);
                }}
              >
                <User className="mr-2 h-4 w-4 text-slate-500" />
                <span>Mi Perfil</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="text-uagrm-red focus:text-uagrm-red focus:bg-red-50 dark:focus:bg-red-950 cursor-pointer">
                <Link href="/login" className="flex items-center w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* --- MODAL DE PERFIL RESPONSIVE --- */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        {/* AQUÍ ESTÁ EL CAMBIO CLAVE: w-[90vw] para móvil */}
        <DialogContent className="w-[90vw] sm:w-full sm:max-w-[425px] p-0 overflow-hidden rounded-xl bg-background border-border">

          {/* Header Visual */}
          <div className="bg-primary/95 dark:bg-primary/20 p-6 text-center relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <GraduationCap className="h-24 w-24 text-white dark:text-primary" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="h-24 w-24 rounded-full border-4 border-background shadow-lg bg-background overflow-hidden mb-3">
                <NextImage
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <DialogTitle className="text-white dark:text-primary-foreground text-xl font-bold">María González</DialogTitle>
              <DialogDescription className="text-blue-100 dark:text-primary-foreground/80">
                Estudiante de Postgrado
              </DialogDescription>
              <Badge className="mt-2 bg-uagrm-blue dark:bg-uagrm-blue/80 hover:bg-uagrm-blue/90 text-white border-none">
                Activo
              </Badge>
            </div>

          </div>

          {/* Contenido */}
          <div className="p-6 space-y-6">

            <div className="grid gap-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-muted p-2 rounded-full shrink-0">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Correo Institucional</p>
                  <p className="text-foreground font-medium truncate">cuellarfabian2002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="bg-muted p-2 rounded-full shrink-0">
                  <Hash className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase">Registro Universitario</p>
                  <p className="text-foreground font-medium">219004589</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="bg-muted p-2 rounded-full shrink-0">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase">Programa Actual</p>
                  <p className="text-foreground font-medium">Maestría en Administración (MBA)</p>
                </div>
              </div>
            </div>

            <Separator className="bg-border" />

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-3 rounded-lg border border-border text-center">
                <span className="block text-xs text-muted-foreground uppercase font-semibold mb-1">Promedio</span>
                <span className="text-xl font-bold text-uagrm-blue dark:text-blue-400">87.50</span>
              </div>
              <div className="bg-card p-3 rounded-lg border border-border text-center">
                <span className="block text-xs text-muted-foreground uppercase font-semibold mb-1">Avance</span>
                <span className="text-xl font-bold text-green-600 dark:text-green-500">65%</span>
              </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}