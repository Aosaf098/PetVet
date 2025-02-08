import NavLogo from "./NavLogo";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center py-3 lg:px-0 px-6">
        <NavLogo />
        <NavCenter />
        <NavRight />
      </div>
    </>
  );
};

export default Navbar;
