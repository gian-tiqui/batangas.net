"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import { menu } from "@/app/utils/Menu";
import { BiMoon, BiSearchAlt, BiSun } from "react-icons/bi";
import Link from "next/link";
import batangasNetLogo from "../../assets/favicon.ico";
import Image from "next/image";
import SearchBar from "../search/SearchBar";

const NavbarMid = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="hidden md:block md:px-40 md:mt-12">
      <div className="flex dark:text-white">
        <Image
          src={batangasNetLogo}
          alt="Batangas.net"
          height={736}
          width={1366}
          className="h-7 w-auto mr-3"
        />
        <Link
          href={"/"}
          className="italic font-bold text-2xl cursor-pointer font-serif"
        >
          BATANGAS.NET
        </Link>
        <div className="flex justify-evenly gap-11 ml-11 text-lg">
          {menu.map((mn, index) => (
            <Menu {...mn} key={index} />
          ))}

          <div onClick={changeMode}>
            {darkMode ? (
              <BiSun className="h-6 w-auto hover:text-gray-400" />
            ) : (
              <BiMoon className="h-6 w-auto hover:text-gray-400" />
            )}
          </div>

          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMid;
