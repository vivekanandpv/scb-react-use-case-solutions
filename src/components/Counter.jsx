import React from 'react';

const Counter = (props) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setCounter((c) => c + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p>Time elapsed: {counter}</p>
    </>
  );
};

export default Counter;
