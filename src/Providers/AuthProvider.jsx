import AuthContext from "@/Context/AuthContext";
import { auth } from "@/Firebase/firebase.config";
import { createNewUserDB } from "@/lib/api";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [confirmEyeOpen, setConfirmEyeOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const registerNewUser = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUsers(result.user);
        updateProfile(auth.currentUser, { displayName })
          .then(() => {
            setUsers(auth.currentUser);
            console.log("Profile Updated");
          })
          .catch((err) => {
            alert(`Profile Update error: ${err.message}`);
          });
        const newUser = {
          name: displayName,
          email: email,
          firebase_UID: result.user.uid,
        };
        createNewUserDB(newUser);
        alert("Registered Successfully");
      })

      .catch((err) => {
        alert(`Create User error: ${err.message}`);
      });
  };

  const signInExistingUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutExistingUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        alert("Signing Out");
        console.log("Signed Out");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const registerUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
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
    setUsers,
    registerNewUser,
    signInExistingUser,
    signOutExistingUser,
    registerUsingGoogle,
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
