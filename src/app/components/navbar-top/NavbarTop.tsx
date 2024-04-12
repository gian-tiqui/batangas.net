import { navbarTopRoutes } from "@/app/utils/Routes";
import React from "react";
import Li from "./components/Li";

const NavbarTop = () => {
  return (
    <nav className="px-40 bg-purple-950 py-2 text-white border-b border-b-white">
      <div className="flex">
        <div className="flex gap-3">
          {navbarTopRoutes.map((route, index) => (
            <Li {...route} key={index} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
