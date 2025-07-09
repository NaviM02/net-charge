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
                    className="inline-block p-1 text-blue-600 hover:text-blue-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
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