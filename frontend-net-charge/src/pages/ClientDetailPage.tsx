import { useState } from "react";
import { useParams } from "react-router-dom";
import { useClients } from "../hooks/useClients";
import { ClientInfo } from "../components/ClientInfo";
import { ListOfPayments } from "../components/ListOfPayments";
import { usePayments } from "../hooks/usePayments";
import AddPaymentPage from "./AddPaymentPage";

export default function ClientDetailPage() {
  const { id } = useParams();
  const { getClient, updateClient } = useClients();
  const { getPaymentsByClient } = usePayments();
const [showForm, setShowForm] = useState(false);
  // VALIDAR QUE ID ES NUMERO
  

  const client = getClient(Number(id));
  if (!client) return <p>Cliente no encontrado.</p>;

  return (
    <div className="page pt-6 pl-16 pr-14">
      <h1 className="text-3xl font-bold text-gray-800">
          Información del cliente
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8">
        <div className="md:col-span-3">
          <ClientInfo client={client} onSave={updateClient} />
        </div>
        <div className="md:col-span-9">
          <div className="flex flex-row items-center pb-6">
            <h1 className="text-xl font-bold text-gray-800">PAGOS</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="ml-auto flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
            >
              {showForm ? "Ocultar formulario" : "Agregar nuevo pago"}
              {!showForm && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              )}
            </button>

            {showForm && <AddPaymentPage clientId={client.id} amount={client.planCost} />}
          </div>

          <div className="h-[400px] overflow-y-auto pr-2">
            <ListOfPayments payments={getPaymentsByClient(Number(id))} />
          </div>
        </div>
      </section>
    </div>
  );
}