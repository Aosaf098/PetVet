import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <>
      <footer class="bg-muted text-base-content mt-12 px-10 py-14 flex lg:flex-row flex-col lg:items-center gap-6 lg:justify-evenly">
        <nav className="flex flex-col">
          <h6 class="font-semibold text-lg">Services</h6>
          <a class="">Branding</a>
          <a class="">Design</a>
          <a class="">Marketing</a>
        </nav>
        <nav className="flex flex-col">
          <h6 class="font-semibold text-lg">Company</h6>
          <a class="">About us</a>
          <a class="">Contact</a>
          <a class="">Careers</a>
        </nav>
        <nav className="flex flex-col space-y-6">
          <h6 class="font-semibold text-lg">Socials</h6>
          <div className="flex items-center gap-4">
            <Link>
              <img
                className="w-10"
                src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="w-10"
                src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="w-10"
                src="https://img.icons8.com/?size=48&id=yoQabS8l0qpr&format=png"
                alt=""
              />
            </Link>
          </div>
        </nav>
        <form className="flex flex-col gap-2">
          <h6 class="font-semibold text-lg">Newsletter</h6>
          <fieldset class="w-80">
            <label>
              <span className="text-sm">Enter your email address</span>
            </label>
            <div className="flex w-full max-w-sm items-center space-x-1 mt-2">
              <Input type="email" placeholder="Email" />
              <Button className="bg-prim" type="submit">
                Subscribe
              </Button>
            </div>
          </fieldset>
        </form>
      </footer>
      <Separator className="" />
      <aside className="flex items-center justify-center pt-2 mb-2 bg-muted">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved by PetVet Ltd.
        </p>
      </aside>
    </>
  );
};

export default Footer;
