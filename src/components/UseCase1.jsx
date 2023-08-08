import React from 'react';
import HelloWorld from './HelloWorld';
import HelloMessage from './HelloMessage';
import Counter from './Counter';
import Alert from './Alert';

const UseCase1 = (props) => {
  return (
    <>
      <div
        className='card p-4'
        style={{
          marginLeft: '100px',
          marginRight: '100px',
          marginTop: '50px',
        }}
      >
        <h3>UseCase 1 - Components, Props and States</h3>
        <HelloWorld />
        <h4>Single Prop</h4>
        <HelloMessage name='Euler' />
        <h4>Multiple Props</h4>
        <HelloMessage name='Ramanujam' message='I got this in my dreams' />
        <h4>State and Virtual DOM</h4>
        <Counter />
        <h4>Interactive Component - Event Handling</h4>
        <Alert />
      </div>
    </>
  );
};

export default UseCase1;
