import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const auth = getAuth(app);

    //* signUp (create user);
    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* google signUp
    const googleSignUp = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //* github signUp
    const gitHubLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //*facebook signUp
    const facebookLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //* login
    const loginMethod = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //* logout
    const logOutEvent = () => {
        return signOut(auth)
    }

    //* auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe();
    }, [auth])
    const authInfo = {
        user,
        loader,
        signUp,
        googleSignUp,
        gitHubLogin,
        facebookLogin,
        loginMethod,
        logOutEvent
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;