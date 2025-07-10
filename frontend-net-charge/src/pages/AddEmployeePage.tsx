import { Card, TextInput, Button, Title } from "@tremor/react";
import type { FormEvent } from "react";
import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/User";

export default function AddEmployeePage() {
  const { addUser } = useUsers();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newEmployee : User = {
      id: Date.now(),
      name: formData.get("name")?.toString() ?? "",
      username: formData.get("username")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
      
    };

    addUser(newEmployee);
    event.currentTarget.reset();
  };

  return (
    <Card className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-2xl">
      <Title className="text-lg font-semibold text-gray-800 mb-4">Crear nuevo empleado</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4.5">
        <TextInput 
            name="name" 
            placeholder="Nombre del empleado" 
            className="pl-4 rounded-lg"
            required 
        />
        <TextInput 
            name="username" 
            placeholder="Usuario"
            className="pl-4 rounded-lg" 
            required 
        />
        <TextInput 
            name="phone" 
            placeholder="Teléfono" 
            type="tel" 
            className="pl-4 rounded-lg"
            required 
        />
        <TextInput 
            name="password" 
            placeholder="Constrasenia" 
            type="password" 
            className="pl-4 rounded-lg"
            required 
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg">
          Crear empleado
        </Button>
      </form>
    </Card>
  );
}