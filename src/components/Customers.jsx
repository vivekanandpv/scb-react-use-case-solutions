import React from 'react';

const Customers = (props) => {
  return (
    <>
      <h4>Customers List</h4>
      <table className='table table-bordered table-sm table-hover'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.customers?.map((u) => {
            return (
              <tr key={u.id} onClick={() => props.onSelect(u)}>
                <td>{u.id}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Customers;
