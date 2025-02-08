import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import logo from "../../../public/assets/logo.png";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={"/"}>
                <img className="w-16" src={logo} alt="" />
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
