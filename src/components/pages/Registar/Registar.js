import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../shared/Firebase/firebase.init'
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
    return <div>
      <p>loading...</p>
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
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Please Registar</h3>
            <div className='mx-auto w-1/2'>
              <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'text'} name={'name'} placeholder='Name'/>
                <input required className='border p-2' type={'email'} name={'email'} placeholder='Email Address' />
                <input required className='border p-2' type={'password'} name='password' placeholder='Create a strong password' />
                <button className='p-2 bg-blue-500 text-white bg-blue-500 rounded' type={'submit'}>Registar</button>
                {
                  (error || updateError || verificationError) && <p className='text-red-500'>{ error?.message || updateError?.message } || {verificationError.message}</p>
                }
          </form>
          <p>Have an account? <Link className='hover:text-blue-500 underline' to={'/login'}>Login here</Link></p>
            </div>
        </div>
    );
};

export default Registar;
