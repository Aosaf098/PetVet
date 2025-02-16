import AuthContext from "@/Context/AuthContext";
import React, { useContext } from "react";

const PCSheet = () => {
  const { users } = useContext(AuthContext);
  return (
    <>
      <div className="hidden lg:flex flex-col">
        <div className="border-4 border-solid border-blue-500 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-solid border-blue-500 object-cover"
            src=""
            alt=""
          />
          <h3 className="text-2xl font-bold font-poppins my-4">
            {users?.displayName}
          </h3>
        </div>
      </div>
    </>
  );
};

export default PCSheet;
