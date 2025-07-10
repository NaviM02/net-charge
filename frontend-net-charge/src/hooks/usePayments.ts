import { useState, useEffect } from "react";
import type { Payment } from "../types/Payment";

const fakePayments: Payment[] = [
  {
    id: 1,
    clientId: 1,
    month: 1,
    year: 2024,
    dueDate: new Date("2024-01-02"),
    paidAt: new Date("2024-01-02T10:00:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 2,
    clientId: 1,
    month: 2,
    year: 2024,
    dueDate: new Date("2024-02-02"),
    paidAt: new Date("2024-02-01T14:00:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 3,
    clientId: 1,
    month: 3,
    year: 2024,
    dueDate: new Date("2024-03-02"),
    paidAt: new Date("2024-03-05T09:30:00"),
    amount: 150,
    state: "atrasado",
  },
  {
    id: 4,
    clientId: 1,
    month: 4,
    year: 2024,
    dueDate: new Date("2024-04-02"),
    paidAt: new Date("2024-04-02T11:15:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 5,
    clientId: 1,
    month: 5,
    year: 2024,
    dueDate: new Date("2024-05-02"),
    paidAt: new Date("2024-05-02T12:45:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 6,
    clientId: 1,
    month: 6,
    year: 2024,
    dueDate: new Date("2024-06-02"),
    paidAt: new Date("2024-06-02T13:30:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 7,
    clientId: 1,
    month: 7,
    year: 2024,
    dueDate: new Date("2024-07-02"),
    amount: 150,
    state: "pendiente",
  },

  // Cliente 2 - solo ha pagado enero y febrero, marzo atrasado, resto pendiente
  {
    id: 8,
    clientId: 2,
    month: 1,
    year: 2024,
    dueDate: new Date("2024-01-03"),
    paidAt: new Date("2024-01-03T09:00:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 9,
    clientId: 2,
    month: 2,
    year: 2024,
    dueDate: new Date("2024-02-03"),
    paidAt: new Date("2024-02-03T10:30:00"),
    amount: 150,
    state: "pagado",
  },
  {
    id: 10,
    clientId: 2,
    month: 3,
    year: 2024,
    dueDate: new Date("2024-03-03"),
    paidAt: new Date("2024-03-10T16:30:00"),
    amount: 150,
    state: "atrasado",
  },
  {
    id: 11,
    clientId: 2,
    month: 4,
    year: 2024,
    dueDate: new Date("2024-04-03"),
    amount: 150,
    state: "pendiente",
  },
  {
    id: 12,
    clientId: 2,
    month: 5,
    year: 2024,
    dueDate: new Date("2024-05-03"),
    amount: 150,
    state: "pendiente",
  },
  {
    id: 13,
    clientId: 2,
    month: 6,
    year: 2024,
    dueDate: new Date("2024-06-03"),
    amount: 150,
    state: "pendiente",
  },
  {
    id: 14,
    clientId: 2,
    month: 7,
    year: 2024,
    dueDate: new Date("2024-07-03"),
    amount: 150,
    state: "pendiente",
  },

  // Cliente 3 - pagó todo enero a julio sin atrasos
  {
    id: 15,
    clientId: 3,
    month: 1,
    year: 2024,
    dueDate: new Date("2024-01-02"),
    paidAt: new Date("2024-01-02T09:30:00"),
    amount: 200,
    state: "pagado",
  },
  {
    id: 16,
    clientId: 3,
    month: 2,
    year: 2024,
    dueDate: new Date("2024-02-02"),
    paidAt: new Date("2024-02-02T09:45:00"),
    amount: 200,
    state: "pagado",
  },
  {
    id: 17,
    clientId: 3,
    month: 3,
    year: 2024,
    dueDate: new Date("2024-03-02"),
    paidAt: new Date("2024-03-02T09:15:00"),
    amount: 200,
    state: "pagado",
  },
  {
    id: 18,
    clientId: 3,
    month: 4,
    year: 2024,
    dueDate: new Date("2024-04-02"),
    paidAt: new Date("2024-04-02T10:10:00"),
    amount: 200,
    state: "pagado",
  },
  {
    id: 19,
    clientId: 3,
    month: 5,
    year: 2024,
    dueDate: new Date("2024-05-02"),
    paidAt: new Date("2024-05-02T11:00:00"),
    amount: 200,
    state: "pagado",
  },
  {
    id: 20,
    clientId: 3,
    month: 6,
    year: 2024,
    dueDate: new Date("2024-06-02"),
    paidAt: new Date("2024-06-02T13:00:00"),
    amount: 200,
    state: "pagado",
  },
  {
    id: 21,
    clientId: 3,
    month: 7,
    year: 2024,
    dueDate: new Date("2024-07-02"),
    paidAt: new Date("2024-07-02T08:30:00"),
    amount: 200,
    state: "pagado",
  },
];

export function usePayments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPayments(fakePayments);
      setLoading(false);
    }, 200);
  }, []);

  const getPaymentsByClient = (clientId: number) =>
    payments.filter((p) => p.clientId === clientId);

  const markAsPaid = (clientId: number, month: number, year: number) => {
    setPayments((prev) =>
      prev.map((p) =>
        p.clientId === clientId && p.month === month && p.year === year
          ? { ...p, state: "pagado", paidAt: new Date() }
          : p
      )
    );
  };
  const addPayment = (payment: Payment) => {
    payments.push(payment);
  }

  return {
    payments,
    loading,
    getPaymentsByClient,
    markAsPaid,
    addPayment
  };
}