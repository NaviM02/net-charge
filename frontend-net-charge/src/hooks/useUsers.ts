import { useEffect, useState } from "react";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const fakeUsers: User[] = [
          {
            id: 1,
            name: "Administrador",
            username: "admin",
            phone: "11111111",
            password: "admin123", // En producción, esto nunca se maneja en texto plano.
          },
          {
            id: 2,
            name: "Luis López",
            username: "llopez",
            phone: "22222222",
            password: "password123",
          },
          {
            id: 3,
            name: "Carmen Díaz",
            username: "cdiaz",
            phone: "33333333",
            password: "pass456",
          },
        ];

        setUsers(fakeUsers);
        setLoading(false);
      } catch (e) {
        setError("Error al cargar los usuarios");
        setLoading(false);
      }
    }, 100); // Simula carga
  }, []);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  const getUser = (id: number): User | undefined => {
    return users.find((u) => u.id === id);
  };

  return { users, loading, error, addUser, updateUser, getUser };
}