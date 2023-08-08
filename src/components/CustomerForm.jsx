import React from 'react';

const CustomerForm = (props) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const resetForm = () => {
    setFirstName((_) => '');
    setLastName((_) => '');
    setEmail((_) => '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
    };

    props?.onSave(formData);

    resetForm();
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'firstName': {
        setFirstName((_) => e.target.value);
        return;
      }
      case 'lastName': {
        setLastName((_) => e.target.value);
        return;
      }
      case 'email': {
        setEmail((_) => e.target.value);
      }
      default:
        return;
    }
  };

  return (
    <>
      <h4>Add Customer</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='firstName'
            value={firstName}
            onChange={handleInput}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='lastName'
            value={lastName}
            onChange={handleInput}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={handleInput}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default CustomerForm;
