import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const RegForm = () => {
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
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" placeholder="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Confirm Password</Label>
            </div>
            <Input id="password" type="password" placeholder="confirm password" required />
          </div>
          <Button type="submit" className="w-full bg-secon hover:bg-prim">
            Register
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-main px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <Button
            variant="outline"
            className="w-full bg-secon text-white shadow-xl hover:bg-prim hover:text-white"
          >
            <img
              src="https://img.icons8.com/?size=24&id=uLWV5A9vXIPu&format=png"
              alt=""
            />
            Login with Facebook
          </Button>
          <Button
            variant="outline"
            className="w-full bg-secon text-white shadow-xl hover:bg-prim hover:text-white"
          >
            <img
              src="https://img.icons8.com/?size=24&id=V5cGWnc9R4xj&format=png"
              alt=""
            />
            Login with Google
          </Button>
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
