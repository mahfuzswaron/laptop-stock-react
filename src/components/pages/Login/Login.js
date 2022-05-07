import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div>
             <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Please Login</h3>
            <div className='mx-auto w-1/2'>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'email'} name={'email'} placeholder='Email Address' />
                <input required className='border p-2' type={'password'} name='password' placeholder='Your Password' />
                <button className='p-2 bg-blue-500 text-white bg-blue-500 rounded' type={'submit'}>Login</button>
                {
                //   error && <p>{ errorMsg}</p>
                }
                </form>
                <p>Don't Have an account? <Link className='hover:text-blue-500 underline' to={'/registar'}>Registar here</Link></p>
            </div>
        </div>
    );
};

export default Login;