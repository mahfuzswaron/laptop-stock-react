import { css } from '@emotion/react';
import React from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import auth from '../../shared/Firebase/firebase.init';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <div className='flex justify-center items-center'>
            <BeatLoader loading={loading} color={'blue'} style={override} size={10}></BeatLoader>
        </div>
    }

    if (user) {
        return  navigate(from, { replace: true });
    }
    if (error) {
        return <p>{ error.message}</p>
    }
    const handleLogIn = () => { 
        signInWithFacebook()
    }

    return (
        <div>
            <button onClick={handleLogIn} className='bg-blue-600 hover:bg-blue-700 px-5 py-3 my-5 text-white rounded flex mx-auto'>Login With Facebook</button>
        </div>
    );
};

export default SocialLogin;