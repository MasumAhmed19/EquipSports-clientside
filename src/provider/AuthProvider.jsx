import { createContext, useEffect, useState } from "react";
import app from "../fiirebase/firebase.init";

import{
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // createUser
    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // userLogin
    const userLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,  email, password);
    }

        // update data
        const updateUserProfileData = (updatedData) => {

            return updateProfile(auth.currentUser, updatedData)
            .then(() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    ...updatedData,
                }));
            });
        };


    // userLog
    const logOut= ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authData = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        updateUserProfileData,


    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;