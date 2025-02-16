import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";
import { useContext } from "react";
import AuthContext from "@/Context/AuthContext";

const NavRight = () => {
  const { users, signOutExistingUser } = useContext(AuthContext);

  return (
    <>
      <div className="flex-1 flex items-center lg:justify-center justify-end">
        {users?.email ? (
          <div className="flex items-center gap-10">
            <NavSheet users={users} />
            <Button onClick={signOutExistingUser} className="bg-prim hidden lg:block">
              Log Out
            </Button>
          </div>
        ) : (
          <Link to={"/auth/login"}>
            <Button className="bg-prim">Join For Free</Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default NavRight;
