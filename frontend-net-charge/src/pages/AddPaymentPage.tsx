import { Card, TextInput, Button, Title } from "@tremor/react";
import type { FormEvent } from "react";
import { usePayments } from "../hooks/usePayments";
import type { Payment } from "../types/Payment";

interface AddPaymentFormProps {
  clientId?: number;
  amount?: number;
}

export default function AddPaymentPage({ clientId, amount }: AddPaymentFormProps) {
  const { addPayment } = usePayments();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newPayment : Payment = {
      id: Date.now(),
      clientId: clientId ?? Number(formData.get("clientId")),
      month: Number(formData.get("month")),
      year: Number(formData.get("year")),
      dueDate: new Date(formData.get("dueDate")?.toString() ?? ""),
      amount: amount ?? Number(formData.get("amount")),
      state: "pendiente",
    };

    addPayment(newPayment);
    event.currentTarget.reset();
  };

  return (
    <Card className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-2xl">
      <Title className="text-lg font-semibold text-gray-800 mb-4">Crear nuevo pago</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        {!clientId && (
          <TextInput
            name="clientId"
            placeholder="ID del cliente"
            className="pl-4 rounded-lg"
            required
          />
        )}
        <label className="text font-semibold text-gray-800">Mes</label>
        <select
            name="month"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
            required
        >
            <option value="">Seleccione un mes</option>
            {[
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ].map((month, index) => (
                <option key={index + 1} value={index + 1}>
                {month}
                </option>
            ))}
        </select>
        <TextInput 
            name="year" 
            placeholder="Año" 
            type="number"
            className="pl-4 rounded-lg"
            required 
        />
        <label className="text font-semibold text-gray-800  ">Fecha de pago</label>
        <input
          name="dueDate"
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <TextInput 
            name="amount" 
            placeholder="Costo del plan" 
            type="number" 
            defaultValue={amount !== undefined && amount !== null ? amount.toString() : ""} 
            className="pl-4 rounded-lg"
            required 
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg">
          Crear Pago
        </Button>
      </form>
    </Card>
  );
}