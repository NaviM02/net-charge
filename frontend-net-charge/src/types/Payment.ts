export type payState = "pendiente" | "pagado" | "atrasado";

export interface Payment {
  id: number;
  clientId: number;
  month: number;      // 1 = enero, ..., 12 = diciembre
  year: number;
  dueDate: Date;
  paidAt?: Date;
  amount: number;
  state: payState;
}