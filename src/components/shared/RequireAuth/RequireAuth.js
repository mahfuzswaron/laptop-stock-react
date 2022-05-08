import { css } from '@emotion/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import auth from '../Firebase/firebase.init';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center'>
            <BeatLoader loading={loading} color={'blue'} style={override} size={10}></BeatLoader>
        </div>
    }

    if (!user) {
        console.log('user logged in nei');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default RequireAuth;