import React from 'react';
import Customers from './Customers';
import CustomerForm from './CustomerForm';
import { bankCustomers } from '../bank-customers';
import CustomerDetail from './CustomerDetail';

const UseCase2 = (props) => {
  const [customers, setCustomers] = React.useState(bankCustomers);
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);

  const addCustomers = (nc) =>
    setCustomers((c) => {
      nc.id = c.length + 1;
      return [...c, nc];
    });

  return (
    <>
      <div className='card p-4'>
        <Customers customers={customers} onSelect={setSelectedCustomer} />
        <div className='row'>
          <div className='col'>
            <CustomerForm onSave={addCustomers} />
          </div>
          <div className='col'>
            <CustomerDetail customer={selectedCustomer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCase2;
