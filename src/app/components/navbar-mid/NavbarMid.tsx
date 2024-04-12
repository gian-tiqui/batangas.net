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
        <Link href={"/"} className="italic font-bold text-2xl cursor-pointer">
          BATANGAS.NET
        </Link>
        <div className="flex justify-evenly gap-11 ml-11 text-lg">
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
