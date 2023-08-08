import React from 'react';

const HelloMessage = (props) => {
  return (
    <>
      <p>
        Message from {props.name}: {props.message ? props.message : 'Hi, Hello'}
      </p>
    </>
  );
};

export default HelloMessage;
