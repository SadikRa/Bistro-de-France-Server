// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const providers = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () =>{
        signInWithPopup(auth, provider)
    }
    const logInWithGitHub = () =>{
        signInWithPopup(auth, providers)
    }

    const logOut = () => {
        
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])


const authInfo ={
    user,
    createUser,
    signIn,
    logOut,
    logInWithGoogle,
    logInWithGitHub,
    




}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;