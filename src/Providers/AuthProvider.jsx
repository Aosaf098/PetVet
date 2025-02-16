import AuthContext from "@/Context/AuthContext";
import { auth } from "@/Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [confirmEyeOpen, setConfirmEyeOpen] = useState(false);
  const [users, setUsers] = useState(null);

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUsers(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signInExistingUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUsers(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signOutExistingUser = () => {
    signOut(auth)
      .then(() => {
        alert('Signing Out')
        console.log("Signed Out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleShowPassword = () => {
    setEyeOpen((prev) => !prev);
  };
  const handleConfirmShowPassword = () => {
    setConfirmEyeOpen((prev) => !prev);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    users,
    registerNewUser,
    signInExistingUser,
    signOutExistingUser,
    eyeOpen,
    handleShowPassword,
    confirmEyeOpen,
    handleConfirmShowPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
