import AuthContext from "@/Context/AuthContext";
import { auth } from "@/Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [confirmEyeOpen, setConfirmEyeOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("What is the Auth Actually:", auth.currentUser);


  const registerNewUser = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUsers(result.user);
        updateProfile(auth.currentUser, {displayName})
        .then((result) => {
          setUsers(result.user)
          console.log('Profile Updated')
        })
        .catch((err) => {
          console.log(err.message)
        })
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signInExistingUser = (email, password) => {
    setLoading(true);
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
    setLoading(true);
    signOut(auth)
      .then(() => {
        alert("Signing Out");
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
      setLoading(false);
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

  console.log("User", users);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
