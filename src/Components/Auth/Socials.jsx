import React from "react";
import { Button } from "../ui/button";

const Socials = () => {
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
