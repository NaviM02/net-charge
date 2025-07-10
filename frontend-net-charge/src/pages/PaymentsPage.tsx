import { useState } from "react";
import { Link } from "react-router-dom";
import { ListOfPayments } from "../components/ListOfPayments";
import { usePayments } from "../hooks/usePayments";


export default function PaymentsPage() {
  const { payments } = usePayments();
  const [filterState, setFilterState] = useState<string>("todos");

  const filteredPayments = payments.filter(payment => {
    if (filterState === "todos") return true;
    return payment.state === filterState;
  });

  return (
    <div className="page pt-6 pl-18 pr-18">
      <h1 className="text-3xl font-bold text-gray-800">
        Lista de pagos
      </h1>
      <div className="flex items-center my-4">
        <Link 
          to="/pagos/nuevo"
          className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
        >
          Agregar Pago
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>

        <form className="flex items-center gap-3 ml-auto w-fit">
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            className="ml-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="todos">Todos</option>
            <option value="pendiente">Pendientes</option>
            <option value="pagado">Pagados</option>
            <option value="atrasado">Atrasados</option>
          </select>

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
        <ListOfPayments payments={ filteredPayments } />
      </main>
    </div>
  );
}