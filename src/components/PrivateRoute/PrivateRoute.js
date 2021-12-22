import React from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    let location = useLocation();
    if(user.email){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} />
};

export default PrivateRoute;