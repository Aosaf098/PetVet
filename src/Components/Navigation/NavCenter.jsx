import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const NavCenter = () => {
  return (
    <>
      <div className="border-4 border-solid border-blue-500 flex-1 flex items-center justify-center gap-10">
        <Link>
          <Button className="font-bold" variant="ghost">
            Home
          </Button>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[300px] font-bold text-xl">
                  <Link>
                    <li className="bg-green-400 text-center">Cats</li>
                  </Link>
                  <Link>
                    <li className="bg-green-400 text-center">Dogs</li>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link>
          <Button className="font-bold" variant="ghost">
            Shop
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavCenter;
