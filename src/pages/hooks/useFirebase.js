import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase_init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
        const [user, setUser] = useState({});
        const[isLoading, setIsLoading] = useState(true)

        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const googleSignIn = () =>{
            return signInWithPopup(auth, googleProvider)
        }

        const createUser =(email, password) =>{
            return createUserWithEmailAndPassword(auth, email, password)
         
        }

        const emailSignIn = (email, password) =>{
            return signInWithEmailAndPassword(auth, email, password)
        
        }

        const logOut = () =>{
            signOut(auth)
            .then(() =>{})
            .finally(
                setIsLoading(false)
            )
        }

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, user =>{
                if(user){
                    setUser(user)
                }
                else {
                    setUser({})
                }
                setIsLoading(false)
                return unsubscribe
            })
        },[])

    return {
        googleSignIn,
        logOut,
        createUser,
        emailSignIn,
        user,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;