import { useEffect, useState } from "react";
import type { User } from "../types/User";

const fakeUsers: User[] = [
    {
      id: 1,
      name: "Administrador",
      username: "admin",
      phone: "11111111",
      password: "admin123",
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

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(fakeUsers);
      setLoading(false);
    }, 100); // Simula carga
  }, []);

  const addUser = (user: User) => {
    users.push(user);
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  const getUser = (id: number): User | undefined => {
    return users.find((u) => u.id === id);
  };

  return { users, loading, addUser, updateUser, getUser };
}
