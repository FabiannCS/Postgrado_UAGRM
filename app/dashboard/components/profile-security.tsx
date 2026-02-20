"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProfileSecurity() {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  return (
    <Card className="border-l-4 border-l-uagrm-red">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-uagrm-red" />
                Seguridad
            </CardTitle>
            <CardDescription>Gestiona el acceso a tu cuenta académica.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
                <p className="font-medium">Contraseña</p>
                <p className="text-sm text-muted-foreground">Último cambio: Hace 3 meses</p>
            </div>
            
            <Dialog open={isPasswordOpen} onOpenChange={setIsPasswordOpen}>
                <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full sm:w-auto">
                        Cambiar Contraseña
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Cambiar Contraseña</DialogTitle>
                        <DialogDescription>
                            Asegúrate de usar una contraseña segura que incluya números y caracteres especiales.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="current">Contraseña Actual</Label>
                            <Input id="current" type="password" placeholder="••••••••" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="new">Nueva Contraseña</Label>
                            <Input id="new" type="password" placeholder="••••••••" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm">Confirmar Nueva Contraseña</Label>
                            <Input id="confirm" type="password" placeholder="••••••••" />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsPasswordOpen(false)}>Cancelar</Button>
                        <Button className="bg-uagrm-blue hover:bg-blue-800 text-white">
                            <Save className="h-4 w-4 mr-2" />
                            Guardar Cambios
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </CardContent>
    </Card>
  );
}