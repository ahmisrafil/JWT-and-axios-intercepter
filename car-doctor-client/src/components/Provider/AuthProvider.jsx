import { createContext, useEffect, useState } from "react";
import auth from "./Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser]=  useState();
    const [loading, setLoading] = useState();

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in 

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user is -', currentUser);
            setLoading(false);
        })
        return() =>{
            return unsubscribe;
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;