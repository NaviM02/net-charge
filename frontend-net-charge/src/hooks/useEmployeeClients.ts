import { useState } from "react";
import { useClients } from "./useClients";
import type { Client } from "../types/Client";

interface EmployeeClientRelation {
  employeeId: number;
  clientId: number;
}

export function useEmployeeClients() {
  const { clients } = useClients();
  const [relations, setRelations] = useState<EmployeeClientRelation[]>([
    { employeeId: 1, clientId: 1 },
    { employeeId: 1, clientId: 2 },
    { employeeId: 2, clientId: 3 },
  ]);

  const getClientsByEmployee = (employeeId: number): Client[] => {
    const ids = relations
      .filter(r => r.employeeId === employeeId)
      .map(r => r.clientId);
    return clients.filter(c => ids.includes(c.id));
  };

  const assignClientToEmployee = (employeeId: number, clientId: number) => {
    setRelations(prev => [...prev, { employeeId, clientId }]);
  };

  return {
    getClientsByEmployee,
    assignClientToEmployee,
    relations
  };
}