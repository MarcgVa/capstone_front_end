
import { useState, useEffect } from 'react'
import { useGetListOfInvoicesForUserQuery } from '../slices/billSlice';
import { setDateLocale } from '../utils/lib';
import { FadeLoader } from 'react-spinners';

export default function InvoiceTable({ id }) {
  const { status, isSuccess, isLoading, data } = useGetListOfInvoicesForUserQuery(id);
  const [invoices, setInvoices] = useState();


  useEffect(() => {
    if (status === 'fulfilled') {
      setInvoices(data);
    }
  },[status])


  if (isLoading) { 
    return (
      <div className="spinner-container flex-col h-[100svh] w-full">
        <FadeLoader color="#ffa500" />
      </div>
    );
  }

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
              <tr key={invoice.id}>
                <td>{invoice.item}</td>
                <td>
                  <span>{setDateLocale(invoice.startDate)}</span>-
                  <span>
                    {setDateLocale(invoice.endDate)}
                  </span>
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
