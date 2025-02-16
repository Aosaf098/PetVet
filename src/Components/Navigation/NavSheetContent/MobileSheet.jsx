import { Button } from "@/Components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import AuthContext from "@/Context/AuthContext";
import { ChevronRight } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const MobileSheet = () => {
  const { signOutExistingUser } = useContext(AuthContext);
  return (
    <>
      <div className="flex flex-col h-full justify-between lg:hidden font-poppins">
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
        <div className="items-end justify-end mb-12">
          <Button onClick={signOutExistingUser} className="bg-prim w-full">
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileSheet;
