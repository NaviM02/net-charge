import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import type { Client } from "../types/Client";
import { Link } from 'react-router-dom';

interface Props {
    clients: Client[]
}

export function ListOfClients({ clients }: Props) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell>
              ID
            </TableHeaderCell>
            <TableHeaderCell>
              Nombre
            </TableHeaderCell>
            <TableHeaderCell>
              Dirección
            </TableHeaderCell>
            <TableHeaderCell>
              Teléfono
            </TableHeaderCell>
            <TableHeaderCell>
              Fecha de instalacion
            </TableHeaderCell>
            <TableHeaderCell>
              Costo del plan
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
          {clients.map((client) => (
          <TableRow key={client.id} className="hover:bg-gray-50 transition-colors">
            <TableCell className='text-center py-1.5'>{client.id}</TableCell>
            <TableCell className='text-center'>{client.name}</TableCell>
            <TableCell className='text-center'>{client.address}</TableCell>
            <TableCell className='text-center'>{client.phone}</TableCell>
            <TableCell className='text-center'>{client.installationDate.toLocaleDateString()}</TableCell>
            <TableCell className='text-center'>Q {client.planCost}</TableCell>
            <TableCell className='text-center'>{client.state}</TableCell>
            <TableCell className='text-center'>
              <Link 
                to={`/clientes/${client.id}`} 
                className="inline-block p-1 text-blue-600 hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </Link>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}