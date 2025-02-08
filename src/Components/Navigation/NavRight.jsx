import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";

const NavRight = () => {
  const loggedIn = true;
  return (
    <>
      <div className="border-4 border-solid border-blue-500 flex-1 flex items-center justify-center">
        {loggedIn ? (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Link>
            <Button>Join For Free</Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default NavRight;
