import { css } from '@emotion/react';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import auth from '../../shared/Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
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


    const handleSubmit = async e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);

    }

    if (loading) {
        return <div className='flex justify-center items-center'>
            <BeatLoader loading={loading} color={'blue'} style={override} size={10}></BeatLoader>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div >
            <h3 className='text-center text-primary text-4xl font-semibold my-5'>Please Login</h3>
            <div className='mx-10 lg:mx-auto lg:w-1/2'>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col space-y-2'>
                    <input required className='border p-2 rounded-lg' type={'email'} name={'email'} placeholder='Email Address' />
                    <input required className='border p-2 rounded-lg' type={'password'} name='password' placeholder='Your Password' />
                    <button className='p-2 btn btn-primary' type={'submit'}>Login</button>
                    {
                        error && <p className='text-red-500'>{error.message}</p>
                    }
                </form>
                <p className='text-sm lg:text-md mt-2'>Don't Have an account? <Link className='hover:text-primary underline' to={'/registar'}>Registar here</Link></p>
            </div>

            {/* or div */}
            <div className='flex items-center justify-center'>
                <hr className='w-1/3'></hr>
                <p className='text-xl m-5'>Or</p>
                <hr className='w-1/3'></hr>
            </div>
            {/* ---- */}

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;