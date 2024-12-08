import { createContext, useEffect, useState } from "react";
import app from "../fiirebase/firebase.init";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // userLogin with email & password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Google
  const loginGoogle = () => {
    setLoading(true);

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
      });
  };

  // update data
  const updateUserProfileData = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData).then(() => {
      setUser((prevUser) => ({
        ...prevUser,
        ...updatedData,
      }));
    });
  };

  // userLogout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

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
    loginGoogle,
    loading,
    
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
