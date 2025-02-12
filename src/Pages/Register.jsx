import { Link } from "react-router-dom";
import Logo from "../../public/assets/logo.png";
import text from "../../public/assets/PetVet.png";
import reg from "../../public/assets/reg.jpg";
import RegForm from "@/Components/Auth/RegForm";
const Register = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 h-dvh bg-main">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <Link to={"/"} className="flex items-center gap-2 md:justify-start">
            <img className="lg:w-12 w-12" src={Logo} alt="" />
            <img className="lg:w-28 w-28" src={text} alt="" />
          </Link>

          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
                <RegForm />
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          <img
            src={reg}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
