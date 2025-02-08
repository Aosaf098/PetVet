import NavLogo from "./NavLogo";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-around py-3">
        <NavLogo />
        <NavCenter />
        <NavRight />
      </div>
    </>
  );
};

export default Navbar;
