/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "../Components/Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider= new GithubAuthProvider();
//   const updateUserProfile=(name,photoUrl)=>{
//     return updateProfile(auth.currentUser,{
//         displayName:name,
//         photoURL:photoUrl
//     })
// }

  const googleUser=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const githubUser=()=>{
    return signInWithPopup(auth,githubProvider)
  }

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { registerUser, user, logOut, loginUser,googleUser,githubUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;