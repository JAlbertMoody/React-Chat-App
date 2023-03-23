import React, { createContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import Firebase from "../constants/Firebase";

const auth = getAuth(Firebase)

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .catch(error => {
        console.error(error);
    });
  }

  function signOutOfGoogle() {
    signOut(auth)
  }
  
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutOfGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
