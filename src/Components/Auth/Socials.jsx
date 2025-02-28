import React, { useContext } from "react";
import { Button } from "../ui/button";
import AuthContext from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createNewUserDB } from "@/lib/api";

const Socials = () => {
  const { registerUsingGoogle, setUsers } = useContext(AuthContext);
  const navigate = useNavigate();

  const onGoogleClick = () => {
    registerUsingGoogle().then((result) => {
      console.log("Google theke ki pailam", result.user);
      setUsers(result.user);
      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        firebase_UID: result.user.uid,
      };
      createNewUserDB(newUser);
      alert("Registered Successfully with Google");
      navigate("/");
    });
  };
  return (
    <>
      <Button
        variant="outline"
        className="w-full bg-secon text-white shadow-xl hover:bg-prim hover:text-white"
      >
        <img
          src="https://img.icons8.com/?size=24&id=uLWV5A9vXIPu&format=png"
          alt=""
        />
        Login with Facebook
      </Button>
      <Button
        onClick={onGoogleClick}
        variant="outline"
        className="w-full bg-secon text-white shadow-xl hover:bg-prim hover:text-white"
      >
        <img
          src="https://img.icons8.com/?size=24&id=V5cGWnc9R4xj&format=png"
          alt=""
        />
        Login with Google
      </Button>
    </>
  );
};

export default Socials;
