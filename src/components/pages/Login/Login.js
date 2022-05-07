import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../shared/Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
    ] = useSignInWithEmailAndPassword(auth);
let navigate = useNavigate();
let location = useLocation();
let from = location.state?.from?.pathname || "/";

    
    const handleSubmit =async e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        
    }
    
    if (loading) {
        return <p>loading...</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
             <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Please Login</h3>
            <div className='mx-auto w-1/2'>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'email'} name={'email'} placeholder='Email Address' />
                <input required className='border p-2' type={'password'} name='password' placeholder='Your Password' />
                <button className='p-2 bg-blue-500 text-white hover:bg-blue-600 rounded' type={'submit'}>Login</button>
                {
                  error && <p className='text-red-500'>{ error.message}</p>
                }
                </form>
                <p>Don't Have an account? <Link className='hover:text-blue-500 underline' to={'/registar'}>Registar here</Link></p>
            </div>
            <div className='flex items-center justify-center'>
                <hr className='w-1/3'></hr>
                <p className='text-xl m-5'>Or</p>
                <hr className='w-1/3'></hr>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;