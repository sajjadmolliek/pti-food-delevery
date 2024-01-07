/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setLoading(false);
      setUser(currentUser);
     
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const context = {
    user,
    loading,
    // <--- GoogleLogin --->
    googleLogin,
    // <--- userSignUp --->
    userSignUp,
    userLogin,
    logOut,
    //<---Update User Info --->
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};


export default AuthProvider;
