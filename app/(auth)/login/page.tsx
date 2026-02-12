"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, Lock, User, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4 dark:bg-background">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                // CAMBIO AQUÍ: grid-cols-1 para móvil, md:grid-cols-2 para tablet/PC
                className="w-full max-w-4xl bg-card rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[550px] border border-border"
            >

                {/* SECCIÓN 1: LADO IZQUIERDO (Visual / Branding UAGRM) 
            CAMBIO: order-2 (abajo en móvil), md:order-1 (izquierda en PC)
        */}
                <div className="relative flex flex-col justify-between p-8 md:p-10 text-white bg-uagrm-blue dark:bg-slate-900 overflow-hidden order-2 md:order-1 min-h-[200px]">

                    {/* Imagen de Fondo */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
                            alt="Estudiantes Postgrado"
                            fill
                            className="object-cover opacity-30 grayscale"
                            priority
                        />
                    </div>

                    {/* Overlay Gradiente */}
                    <div className="absolute inset-0 z-0 bg-uagrm-blue/90 mix-blend-multiply" />

                    {/* Contenido (Solo visible completamente en pantallas medianas hacia arriba para no saturar el móvil) */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <div className="bg-white/10 p-2 md:p-2.5 rounded-lg backdrop-blur-md border border-white/10 shadow-inner">
                                    <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                </div>
                                <span className="font-semibold tracking-wide text-sm md:text-xl uppercase opacity-90 text-blue-100">Postgrado UAGRM</span>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 tracking-tight drop-shadow-lg">
                                Portal <br /> para estudiantes.
                            </h1>
                            <p className="hidden md:block text-blue-50/90 font-light text-sm leading-relaxed max-w-xs border-l-2 border-red-500 pl-4">
                                Plataforma oficial de gestión académica. Consulta notas, horarios y trámites.
                            </p>
                        </div>

                        <div className="hidden md:flex relative z-10 text-xs text-blue-200/60 mt-8 justify-between items-end">
                            <div>
                                <p className="font-semibold text-white/90">Universidad Autónoma</p>
                                <p>Gabriel René Moreno</p>
                            </div>
                            <div className="h-1 w-12 bg-uagrm-red/90 rounded-full shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN 2: LADO DERECHO (Formulario) 
            CAMBIO: order-1 (arriba en móvil), md:order-2 (derecha en PC)
        */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-card relative order-1 md:order-2">

                    <div className="mb-6 md:mb-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-foreground text-center">Bienvenido</h2>
                        <p className="text-sm text-muted-foreground mt-2 text-center">Ingresa tus credenciales institucionales.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">

                        <div className="space-y-2">
                            <Label htmlFor="identifier" className="text-foreground font-medium">Registro o Correo</Label>
                            <div className="relative group">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="identifier"
                                    type="text"
                                    placeholder="Ej: 219004589"
                                    className="pl-10 h-11 bg-muted/50 border-input focus:bg-background focus:border-primary focus:ring-primary/20 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-foreground font-medium">Contraseña</Label>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10 h-11 bg-muted/50 border-input focus:bg-background focus:border-primary focus:ring-primary/20 transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <Link href="#" className="text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 mt-4 bg-primary hover:bg-primary/90 dark:bg-uagrm-blue dark:hover:bg-uagrm-blue/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Validando...
                                </>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Ingresar al Portal <ArrowRight className="h-4 w-4" />
                                </span>
                            )}
                        </Button>
                    </form>

                    <p className="text-center text-xs text-muted-foreground mt-8">
                        © 2026 UAGRM - Dirección de Postgrado
                    </p>
                </div>

            </motion.div>
        </div>
    );
}