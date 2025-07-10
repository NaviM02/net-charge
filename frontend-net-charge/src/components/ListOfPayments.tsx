import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import type { Payment } from "../types/Payment";
import { Link } from 'react-router-dom';

interface Props {
     payments: Payment[];
}

const monthNames = [
  '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export function ListOfPayments({ payments }: Props) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell>
              ID
            </TableHeaderCell>
            <TableHeaderCell>
              Cliente
            </TableHeaderCell>
            <TableHeaderCell>
              Mes
            </TableHeaderCell>
            <TableHeaderCell>
              Anio
            </TableHeaderCell>
            <TableHeaderCell>
              Fecha limite
            </TableHeaderCell>
            <TableHeaderCell>
              Fecha de pago:
            </TableHeaderCell>
            <TableHeaderCell>
              Hora de pago:
            </TableHeaderCell>
            <TableHeaderCell>
              Cantidad
            </TableHeaderCell>
            <TableHeaderCell>
              Estado
            </TableHeaderCell>
            <TableHeaderCell>
              Acciones
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => {
            const paidDate = payment.paidAt ? new Date(payment.paidAt) : null;
            return (
            <TableRow key={payment.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className='text-center py-1.5'>{payment.id}</TableCell>
              <TableCell className='text-center'>{payment.clientId}</TableCell>
              <TableCell className='text-center'>{monthNames[payment.month]}</TableCell>
              <TableCell className='text-center'>{payment.year}</TableCell>
              <TableCell className='text-center'>{payment.dueDate.toLocaleDateString()}</TableCell>
              <TableCell className='text-center'>{paidDate ? paidDate.toLocaleDateString() : '—'}</TableCell>
              <TableCell className='text-center'>{paidDate ? paidDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '—'}</TableCell>
              <TableCell className="text-center">Q {payment.amount}</TableCell>
              <TableCell className="text-center font-semibold">
                <span
                  className={
                  payment.state === 'pendiente' ? 'text-yellow-600' :
                  payment.state === 'pagado' ? 'text-green-600' :
                  payment.state === 'atrasado' ? 'text-red-600' :
                  ''
                  }
                >
                  {payment.state}
                </span>
              </TableCell>
              <TableCell className='text-center'>
              <Link 
                to={`/clientes/${payment.id}`} 
                className="inline-block p-1 text-green-700 hover:text-blue-600"
              >   
                {payment.state === "pagado" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  )
                }
                

              </Link>
              </TableCell>
            </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}