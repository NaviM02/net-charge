import { Card, TextInput, Button, Title } from "@tremor/react";
import type { FormEvent } from "react";
import { useClients } from "../hooks/useClients";

export default function AddClientPage() {
  const { addClient } = useClients();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newClient = {
      id: Date.now(),
      name: formData.get("name")?.toString() ?? "",
      address: formData.get("address")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      installationDate: new Date(formData.get("installationDate")?.toString() ?? ""),
      planCost: Number(formData.get("planCost")),
      dueDay: Number(formData.get("dueDay")),
      state: "activo",
    };

    addClient(newClient);
    event.currentTarget.reset();
  };

  return (
    <Card className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-2xl">
      <Title className="text-lg font-semibold text-gray-800 mb-4">Crear nuevo cliente</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4.5">
        <TextInput 
            name="name" 
            placeholder="Nombre del cliente" 
            className="pl-4 rounded-lg"
            required 
        />
        <TextInput 
            name="address" 
            placeholder="Dirección"
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
        <label className="text font-semibold text-gray-800  ">Fecha de instalacion</label>
        <input
          name="installationDate"
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <TextInput 
            name="planCost" 
            placeholder="Costo del plan" 
            type="number" 
            className="pl-4 rounded-lg"
            required 
        />
        <TextInput 
            name="dueDay" 
            placeholder="Día de pago (1-31)" 
            type="number" 
            className="pl-4 rounded-lg"
            required 
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg">
          Crear cliente
        </Button>
      </form>
    </Card>
  );
}