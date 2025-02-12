import LoginForm from "@/Components/Auth/LoginForm";
import Logo from "../../public/assets/logo.png";
import text from "../../public/assets/PetVet.png";
import auth from "../../public/assets/auth.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-dvh bg-main">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          
            <Link to={"/"} className="flex items-center gap-2 md:justify-start">
              <img className="lg:w-12 w-12" src={Logo} alt="" />
              <img className="lg:w-28 w-28" src={text} alt="" />
            </Link>
          
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          <img
            src={auth}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
