import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/UserContext';

const PrivateRout = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <progress className="progress w-56"></progress>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRout;