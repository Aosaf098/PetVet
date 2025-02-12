import { cn } from "@/lib/utils";
import React, { useContext } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import AuthContext from "@/Context/AuthContext";

const RegForm = () => {
    const {eyeOpen, handleShowPassword, confirmEyeOpen, handleConfirmShowPassword} = useContext(AuthContext)
  return (
    <>
      <form className={cn("flex flex-col gap-6")}>
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-2xl font-bold">
            <span className="bg-prim p-1 rounded-sm text-white m-1">
              Register
            </span>{" "}
            to your account
          </h1>
          <p className="text-balance text-[11px] text-muted-foreground">
            Enter your credentials below to register to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Username" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2 relative">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type={eyeOpen ? 'text' : 'password'} placeholder="password" required />
            <span onClick={handleShowPassword} className="absolute text-xs top-[32px] right-3 cursor-pointer">{eyeOpen ? 'Hide' : 'Show'}</span>
          </div>
          <div className="grid gap-2 relative">
            <div className="flex items-center">
              <Label htmlFor="password">Confirm Password</Label>
            </div>
            <Input id="password" type={confirmEyeOpen ? 'text' : 'password'} placeholder="confirm password" required />
            <span onClick={handleConfirmShowPassword} className="absolute text-xs top-[32px] right-3 cursor-pointer">{confirmEyeOpen ? 'Hide' : 'Show'}</span>
          </div>
          <Button type="submit" className="w-full bg-secon hover:bg-prim">
            Register
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-main px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <Socials />
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to={'/auth/login'} className="underline underline-offset-2">Sign In</Link>
        </div>
      </form>
    </>
  );
};

export default RegForm;
