import { Link } from "react-router-dom";
import { ListOfPayments } from "../components/ListOfPayments";
import { usePayments } from "../hooks/usePayments";

export default function PaymentsPage() {
  const { payments } = usePayments();

  return (
    <div className="page pt-6 pl-18 pr-18">
      <h1 className="text-3xl font-bold text-gray-800">
        Lista de pagos
      </h1>
      <div className="flex items-center">
        <Link 
          to="/pagos/nuevo"
          className=""
        >
          Agregar Pago
        </Link>
        <form className="flex items-center gap-3 mb-6 ml-auto w-fit">
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
        <ListOfPayments payments={ payments } />
      </main>
    </div>
  );
}