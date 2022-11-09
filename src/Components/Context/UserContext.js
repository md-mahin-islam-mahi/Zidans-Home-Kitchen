import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const auth = getAuth(app);

    //* signUp (create user);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* google signUp
    const googleSignUp = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //* login
    const loginMethod = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password);
    };

    //* auth state change

    const authInfo = {
        user,
        loader,
        signUp,
        googleSignUp,
        loginMethod
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;