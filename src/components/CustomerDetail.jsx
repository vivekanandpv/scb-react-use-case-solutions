import React from 'react';

const CustomerDetail = (props) => {
  return (
    <>
      <h4>Customer Details</h4>
      <hr />
      <p>ID: {props.customer ? props.customer?.id : '--'}</p>
      <p>First Name: {props.customer ? props.customer?.firstName : '--'}</p>
      <p>Last Name: {props.customer ? props.customer?.lastName : '--'}</p>
      <p>Email: {props.customer ? props.customer?.email : '--'}</p>
    </>
  );
};

export default CustomerDetail;
