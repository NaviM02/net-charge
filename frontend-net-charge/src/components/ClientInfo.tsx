import { Card } from "@tremor/react";
import { useState } from "react";
import type { Client } from "../types/Client";
import { Field } from "./Field";

interface Props {
  client: Client;
  onSave: (updatedClient: Client) => void;
}

export function ClientInfo({ client, onSave }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState<Client>(client);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  const updatedValue =
    name === "planCost"
      ? parseFloat(value)
      : name === "installationDate"
      ? new Date(value)
      : value;

    setForm((prev) => ({
        ...prev,
        [name]: updatedValue,
    }));
  };

  const handleSave = () => {
    onSave(form);         // Llama a updateClient desde el componente padre
    setEditMode(false);
  };

  const handleCancel = () => {
    setForm(client);      // Restablece los datos
    setEditMode(false);
  };

  return (
    <Card className="w-full max-w-md">
      <div className="space-y-3">
        <Field label="Nombre" name="name" value={form.name} editMode={editMode} onChange={handleChange} />
        <Field label="Dirección" name="address" value={form.address} editMode={editMode} onChange={handleChange} />
        <Field label="Teléfono" name="phone" value={form.phone} editMode={editMode} onChange={handleChange} />
        <Field label="Fecha de instalación" name="installationDate" value={form.installationDate} editMode={editMode} onChange={handleChange} />
        <Field label="Costo del plan" name="planCost" value={editMode ? form.planCost : `Q ${form.planCost}`} editMode={editMode} onChange={handleChange} />
      </div>

      {editMode && (
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-3 py-1 bg-gray-200 rounded" onClick={handleCancel}>Cancelar</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleSave}>Guardar</button>
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        {!editMode && (
            <div className="flex flex-row gap-6">
                <button 
                    onClick={() => setEditMode(true)} 
                    className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black transition"
                >
                    Editar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
                <button 
                    className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black transition"
                >
                    Eliminar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        )}
      </div>
    </Card>
    
  );
}