"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import { menu } from "@/app/utils/Menu";
import { TbGridDots } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import batangasNetLogo from "../../assets/favicon.ico";
import Image from "next/image";

const NavbarMid = () => {
  const [selectedNav, setSelectedNav] = useState<string>("");

  return (
    <nav className="px-40 mt-12">
      <div className="flex text-white">
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
          <TbGridDots className="h-6 w-auto" />

          <div className="relative w-max mx-auto">
            <BiSearchAlt className="absolute inset-0 h-6 w-auto" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here..."
              className="relative peer z-10 bg-transparent w-12 h-7 transform transition-all rounded-full focus:border outline-none cursor-pointer focus:w-64 text-black focus:bg-white focus:border-white pl-12 focus:pl-16 focus:pr-4"
            ></input>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMid;
