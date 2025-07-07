import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ClientsPage from "../pages/ClientsPage";
import ClientDetailPage from "../pages/ClientDetailPage";
import EmployeesPage from "../pages/EmployeesPage";
import AssignClientsPage from "../pages/AssignClientsPage";
import AdminDashboard from "../pages/AdminDashboardPage";
//import ProtectedRoute from "./ProtectedRoute";
//import AdminRoute from "./AdminRoute";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/clientes/:id" element={<ClientDetailPage />} />
        <Route path="/empleados" element={<EmployeesPage />} />
        <Route path="/empleados/:id/asignar-clientes" element={<AssignClientsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />  
    </Routes>
  );
}