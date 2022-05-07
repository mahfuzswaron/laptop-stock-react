import React from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../shared/Firebase/firebase.init';

const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
    return <p>Loading...</p>;
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