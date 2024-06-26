"use client";
import { navbarTopRoutes } from "@/app/utils/Routes";
import React, { useState } from "react";
import Li from "./components/Li";
import MobileLi from "./components/MobileLi";
import SearchBar from "../search/SearchBar";

const NavbarTop = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="md:px-40 bg-indigo-800 dark:bg-purple-950 py-2 text-white border-b border-b-white">
      <div className="flex md:gap-3">
        {navbarTopRoutes.map((route, index) => (
          <Li hidden={true} {...route} key={index} />
        ))}
        <MobileLi open={menuOpen} onOpen={setMenuOpen} />
      </div>
      {menuOpen && (
        <div
          className={`gap-3 bg-indigo-800 dark:bg-purple-950 fixed inset-0 h-screen z-50`}
        >
          <div className="mt-2">
            <div className="flex">
              <MobileLi open={menuOpen} onOpen={setMenuOpen} />
            </div>
            <div className="mt-4">
              <SearchBar />
            </div>
            <div className="flex flex-wrap px-4 mt-4 gap-y-5">
              {navbarTopRoutes.map((route, index) => (
                <Li hidden={false} {...route} key={index} onClose={onClose} />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarTop;
