import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRight } from "lucide-react";

const NavSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Avatar className="w-10 h-10 rounded-full border border-solid border-black">
            <AvatarImage
              className="w-full h-full rounded-full object-contain"
              src="https://img.icons8.com/?size=48&id=80571&format=png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col">
            <Link>
              <Button className="text-xl font-bold" variant="ghost">
                Home
              </Button>
            </Link>
            <Collapsible className="group/collapsible">
              <CollapsibleTrigger asChild>
                <Link className="flex items-center">
                  <Button className="text-xl font-bold" variant="ghost">
                    Services
                  </Button>
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </Link>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="flex flex-col mx-6 my-2 border-l border-solid border-gray-500">
                  <Link>
                    <Button className="text-xl font-bold" variant="ghost">
                      Cats
                    </Button>
                  </Link>
                  <Link>
                    <Button className="text-xl font-bold" variant="ghost">
                      Dogs
                    </Button>
                  </Link>
                </ul>
              </CollapsibleContent>
            </Collapsible>
            <Link>
              <Button className="text-xl font-bold" variant="ghost">
                Shop
              </Button>
            </Link>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavSheet;
