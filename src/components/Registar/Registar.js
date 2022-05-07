import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../shared/Firebase/firebase.init'
const Registar = () => {
  const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [errorMsg, setErrorMsg] = useState('');
  
  if (error) {
    setErrorMsg(error.message);
    return <p>error: { errorMsg}</p>
  }
  if (loading) {
    return <div>
      <p>loading...</p>
    </div>
  }
  if (user) {
    window.alert(`user is registared`);
    return <p>succeed</p>
  }

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    createUserWithEmailAndPassword(email, password)
    
  }
    return (
        <div>
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Please Registar</h3>
            <div className='mx-auto w-1/2'>
              <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'text'} name={'name'} placeholder='Name'/>
                <input required className='border p-2' type={'email'} name={'email'} placeholder='Email Address' />
                <input required className='border p-2' type={'password'} name='password' placeholder='Create a strong password' />
                <textarea className='border p-2' resize='horizontal' type={'text'} name={'address'} placeholder='Address'/>
                <input className='border p-2' type={'tel'} name={'phone'} placeholder="Phone Number"/>
                <button className='p-2 bg-blue-500 text-white bg-blue-500 rounded' type={'submit'}>Registar</button>
                {
                  error && <p>{ errorMsg}</p>
                }
              </form>
            </div>
        </div>
    );
};
// onSubmit={(e)=> handleAdd(e)}

export default Registar;