export interface Client {
  id: number;
  name: string;
  address: string;
  phone: string;
  installationDate: Date; // formato ISO: "2025-05-20"
  dueDay: number;
  planCost: number;
  state: string
}