import { useState, useEffect } from "react";
import type { Client } from "../types/Client"; // Importas desde types

const data: Client[] = [
    {
      id: 1,
      name: "Juan Pérez",
      address: "Xela",
      phone: "52520825",
      installationDate: new Date("2024-01-15"),
      planCost: 150,
      state: "activo",
      dueDay: 2,
    },
    {
      id: 2,
      name: "Jose Chan",
      address: "Toto",
      phone: "56248130",
      installationDate: new Date("2024-01-16"),
      planCost: 150,
      state: "activo",
      dueDay: 3,
    },
    {
      id: 3,
      name: "Emilio Tzul",
      address: "Paxtoca",
      phone: "38190520",
      installationDate: new Date("2024-01-17"),
      planCost: 200,
      state: "activo",
      dueDay: 2,
    },
  ];

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        setClients(data);
        setLoading(false);
      } catch (e) {
        setError("Error al cargar clientes");
        setLoading(false);
      }
    }, 100);
  }, []);

  const getClient = (id: number): Client | undefined => {
    const client = clients.find((c) => c.id === id);
    return client;
  };

  const updateClient = (updateClient: Client) => {
    setClients((prev) =>
      prev.map((c) => (c.id === updateClient.id ? updateClient : c))
    );
  };
  const addClient = (client: Client) => {
    clients.push(client);
  };

  return { clients, loading, error, getClient, updateClient, addClient };
}
