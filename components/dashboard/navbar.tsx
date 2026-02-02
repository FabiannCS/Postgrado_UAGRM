"use client";

import Link from "next/link";
import { LogOut, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white/80 px-4 backdrop-blur-md md:px-6">

            {/* 1. LADO IZQUIERDO: Logo y Título */}
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-white shadow-sm">
                    <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold leading-none text-slate-900 md:text-base">Portal de Postgrado</span>
                    <span className="text-[10px] text-slate-500 font-medium">U.A.G.R.M.</span>
                </div>
            </div>

            {/* 2. LADO DERECHO */}
            <div className="flex items-center gap-2">

                {/* --- OPCIÓN A: VISTA MÓVIL (md:hidden) --- 
                Aquí mostramos el NOMBRE + AVATAR porque no hay Card en el cuerpo */}
                <div className="md:hidden flex items-center gap-3">

                    {/* TEXTO DE USUARIO (Visible solo en móvil) */}


                    {/* Avatar con Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-slate-100 hover:ring-blue-100 p-0">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@usuario" />
                                    <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">MG</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Mi Perfil</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50" asChild>
                                <Link href="/login" className="flex items-center w-full cursor-pointer">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Cerrar Sesión</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* --- OPCIÓN B: VISTA ESCRITORIO (hidden md:flex) --- 
            Aquí SOLO mostramos el botón SALIR (Sin nombre, porque ya está en la Card)
        */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 gap-2 font-medium" asChild>
                        <Link href="/login">
                            <LogOut className="h-4 w-4" />
                            <span>Cerrar Sesión</span>
                        </Link>
                    </Button>
                </div>

            </div>
        </header>
    );
}