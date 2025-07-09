import { useParams } from "react-router-dom";
import { useClients } from "../hooks/useClients";
import { ClientInfo } from "../components/ClientInfo";
import { ListOfPayments } from "../components/ListOfPayments";
import { usePayments } from "../hooks/usePayments";

export default function ClientDetailPage() {
  const { id } = useParams();
  const { getClient, updateClient } = useClients();
  const { getPaymentsByClient } = usePayments();

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
          <h1 className="text-xl font-bold text-gray-800 pb-6">PAGOS</h1>
          <div className="h-[400px] overflow-y-auto pr-2">
            <ListOfPayments payments={getPaymentsByClient(Number(id))} />
          </div>
        </div>
      </section>
    </div>
  );
}