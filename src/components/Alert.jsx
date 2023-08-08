import React from 'react';

const Alert = (props) => {
  const handleClick = () => {
    alert('React is a great UI library');
  };

  return (
    <>
      <div>
        <button className='btn btn-primary btn-sm' onClick={handleClick}>
          Click me Please
        </button>
      </div>
    </>
  );
};

export default Alert;
