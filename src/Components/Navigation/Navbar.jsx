
import NavLogo from "./NavLogo";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";
const Navbar = () => {

    const loggedIn = true
  return (
    <>
      <div className="border-4 border-solid border-red-500 flex items-center justify-around">
        <NavLogo />
        <NavCenter />
        <NavRight />
      </div>
    </>
  );
};

export default Navbar;
