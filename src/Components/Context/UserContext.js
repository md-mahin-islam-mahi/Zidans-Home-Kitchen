import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
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

    //* auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe
    }, [])
    const authInfo = {
        user,
        loader,
        signUp,
        googleSignUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;