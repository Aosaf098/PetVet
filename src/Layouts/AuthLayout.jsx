import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="font-poppins">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
