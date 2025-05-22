
import { useState, useEffect } from 'react'
import { useGetListOfInvoicesForUserQuery } from '../slices/billSlice';

export default function InvoiceTable({ id }) {
  const { status, isSuccess, data } = useGetListOfInvoicesForUserQuery(id);
  const [invoices, setInvoices] = useState();


  useEffect(() => {
    if (status === 'fulfilled') {
      setInvoices(data);
    }
  },[status])

  return (
    <>
      <table className='table w-full justify-center text-center text-zinc-300'>
        <thead>
          <tr className='text-amber-500'>
            <th>Item</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{
          isSuccess &&
          invoices?.map((invoice) => {
            return (
              <tr key={invoice?.id}>
                <td>{invoice?.item}</td>
                <td>
                  <span>{new Date(invoice?.startDate).toLocaleDateString()}</span>
                  -
                  <span>{new Date(invoice?.endDate).toLocaleDateString()}</span>
                </td>
                <td>
                  <span>${invoice.amount}</span>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </>
  );
}
