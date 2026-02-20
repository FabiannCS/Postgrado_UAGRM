// app/dashboard/data.ts

export interface StudentData {
  ci: string;
  birthDate: string;
  email: string;
  personalEmail: string;
  phone: string;
  address: string;
  registration: string;
  career: string;
  level: string;
  sex: string;
  estadoCivil: string;
  pais: string;
  departamento: string;
  tituloBachiller: string;
}

export const studentData: StudentData = {
  ci: "1234567 SC",
  birthDate: "15/05/1998",
  email: "fabian.admin@uagrm.edu.bo",
  personalEmail: "fabian@gmail.com",
  phone: "+591 700-12345",
  address: "Av. Bush, Calle 5 #32",
  registration: "219004589", 
  career: "Ingeniería de Sistemas",
  level: "Postgrado",
  sex: "Masculino",
  estadoCivil: "Soltero",
  pais: "Bolivia",
  departamento: "Santa Cruz",
  tituloBachiller: "138037"
};