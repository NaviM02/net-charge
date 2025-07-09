import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ClientsPage from "../pages/ClientsPage";
import ClientDetailPage from "../pages/ClientDetailPage";
import EmployeesPage from "../pages/EmployeesPage";
import PaymentsPage from "../pages/PaymentsPage";
import AssignClientsPage from "../pages/AssignClientsPage";
import AdminDashboard from "../pages/AdminDashboardPage";
import AddClientPage from "../pages/AddClientPage";
import AddPaymentPage from "../pages/AddPaymentPage";
//import ProtectedRoute from "./ProtectedRoute";
//import AdminRoute from "./AdminRoute";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/clientes/:id" element={<ClientDetailPage />} />
        <Route path="/clientes/nuevo" element={<AddClientPage />} />
        <Route path="/pagos" element={<PaymentsPage />}/>
        <Route path="/pagos/:id" element={<PaymentsPage />}/>
        <Route path="/pagos/nuevo" element={<AddPaymentPage />}/>
        <Route path="/empleados" element={<EmployeesPage />} />
        <Route path="/empleados/:id/asignar-clientes" element={<AssignClientsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />  
    </Routes>
  );
}