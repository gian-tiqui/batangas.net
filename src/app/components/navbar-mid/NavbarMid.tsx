import React from "react";
import Menu from "./components/Menu";
import { menu } from "@/app/utils/Menu";
import { TbGridDots } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";

const NavbarMid = () => {
  return (
    <nav className="px-40 mt-12">
      <div className="flex text-white">
        <h1 className="italic font-bold text-2xl">BATANGAS.NET</h1>
        <div className="flex justify-evenly gap-11 ml-11 text-lg items-center">
          {menu.map((mn, index) => (
            <Menu {...mn} key={index} />
          ))}
          <TbGridDots className="h-6 w-auto" />
          <BiSearchAlt className="h-6 w-auto" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMid;
