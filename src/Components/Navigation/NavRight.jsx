import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";


const NavRight = () => {
  const loggedIn = false;
  return (
    <>
      <div className="flex-1 flex items-center lg:justify-center justify-end">
        {loggedIn ? (
          <NavSheet />
        ) : (
          <Link>
            <Button className="bg-prim">Join For Free</Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default NavRight;
