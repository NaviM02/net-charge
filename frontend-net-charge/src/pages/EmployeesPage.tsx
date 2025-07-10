import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { ListOfEmployees } from "../components/ListOfEmployees";

export default function EmployeesPage() {
  const { users } = useUsers();


  return (
    <div className="page pt-6 pl-18 pr-18">
      <h1 className="text-3xl font-bold text-gray-800">
        Lista de empleados
      </h1>
      <div className="flex items-center my-4">
        <Link 
          to="/empleados/nuevo"
          className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
        >
          Agregar empleado
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
        <form className="flex items-center gap-3 ml-auto w-fit">
          <input placeholder="Nombre del cliente"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
          <button type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Buscar
          </button>
        </form>
      </div>
      
      <main>
        <ListOfEmployees employees={ users } />
      </main>
    </div>
  );
}