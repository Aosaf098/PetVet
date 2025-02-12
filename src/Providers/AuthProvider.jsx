import AuthContext from "@/Context/AuthContext";
import React, { useState } from "react";

const AuthProvider = ({ children }) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [confirmEyeOpen, setConfirmEyeOpen] = useState(false)

  const handleShowPassword = () => {
    setEyeOpen((prev) => !prev);
  };
  const handleConfirmShowPassword = () => {
    setConfirmEyeOpen((prev) => !prev);
  };
  const authInfo = { eyeOpen, handleShowPassword, confirmEyeOpen, handleConfirmShowPassword };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
