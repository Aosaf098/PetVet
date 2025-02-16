import { cn } from "@/lib/utils";
import React, { useContext } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { data, Link, useNavigate } from "react-router-dom";
import Socials from "./Socials";
import AuthContext from "@/Context/AuthContext";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { signInExistingUser, eyeOpen, handleShowPassword } =
    useContext(AuthContext);
    const navigate = useNavigate()

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signInExistingUser(data?.email, data?.password)
    alert('Signed In Successfully')
    navigate('/')
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6")}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-2xl font-bold">
          <span className="bg-prim px-4 py-1 rounded-sm text-white m-1">
            Login
          </span>{" "}
          to your account
        </h1>
        <p className="text-balance text-xs text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2 relative">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            {...register("password", { required: true })}
            id="password"
            type={eyeOpen ? "text" : "password"}
            required
          />
          <span
            onClick={handleShowPassword}
            className="absolute text-xs top-[38px] right-3 cursor-pointer"
          >
            {eyeOpen ? "Hide" : "Show"}
          </span>
        </div>
        <Button type="submit" className="w-full bg-secon hover:bg-prim">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-main px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Socials />
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={"/auth/register"} className="underline underline-offset-2">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
