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
import MobileSheet from "./NavSheetContent/MobileSheet";
import PCSheet from "./NavSheetContent/PCSheet";

const NavSheet = ({ users }) => {
  const initials = users?.displayName
    ?.split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <>
      <Sheet>
        <SheetTrigger className="flex items-center gap-10">
          <Avatar className="w-10 h-10 rounded-full border border-solid border-black">
            <AvatarImage
              className="w-full h-full rounded-full object-contain"
              src={users?.photoURL}
              alt="@shadcn"
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent>
          <MobileSheet />
          <PCSheet />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavSheet;
