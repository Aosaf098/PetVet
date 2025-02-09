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
                <img className="lg:w-16 w-12" src={logo} alt="" />
                <img className="lg:w-36 w-28" src={text} alt="" />
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
