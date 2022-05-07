import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import auth from '../Firebase/firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

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