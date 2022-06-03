import { css } from '@emotion/react';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import auth from '../../shared/Firebase/firebase.init';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Registar = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || updating || sending) {
    return <div className='flex justify-center items-center'>
      <BeatLoader loading={loading || updating || sending} color={'blue'} style={override} size={10}></BeatLoader>
    </div>
  }

  if (user) {
    console.log(user)
    window.alert(`user is registared`);

    return <p>succeed</p>
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName });
    await sendEmailVerification();
    alert(`sent verification email to ${email}. Haven't get? check spam folder `)
    navigate('/');

  }
  return (
    <div>
      <h3 className='text-center text-primary text-4xl font-semibold my-5'>Please Registar</h3>
      <div className='mx-auto w-1/2'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-2'>
          <input required className='border p-2 rounded-lg' type={'text'} name={'name'} placeholder='Name' />
          <input required className='border p-2 rounded-lg' type={'email'} name={'email'} placeholder='Email Address' />
          <input required className='border p-2 rounded-lg' type={'password'} name='password' placeholder='Create a strong password' />
          <button className='p-2 btn btn-primary' type={'submit'}>Registar</button>
          {
            (error || updateError || verificationError) && <p className='text-red-500'>{error?.message || updateError?.message} || {verificationError.message}</p>
          }
        </form>
        <p className=' mt-2'>Have an account? <Link className='hover:text-primary underline' to={'/login'}>Login here</Link></p>
      </div>
    </div>
  );
};

export default Registar;
