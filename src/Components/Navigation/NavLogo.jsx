import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import logo from "../../../public/assets/logo.png";
import text from "../../../public/assets/PetVet.png";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <>
      <div className="flex-1 flex items-center lg:justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={"/"} className="flex items-center gap-2">
                <img className="w-16" src={logo} alt="" />
                <img className="w-36" src={text} alt="" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>PetVet</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default NavLogo;
