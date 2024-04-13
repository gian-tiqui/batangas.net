"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { BiExit, BiMenu } from "react-icons/bi";
import batangasNetLogo from "../../../assets/favicon.ico";

interface MobileLiProps {
  open: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileLi: React.FC<MobileLiProps> = ({ open, onOpen }) => {
  const handlePress = () => {
    onOpen((prevVal) => !prevVal);
  };

  return (
    <>
      <div className="flex-1 md:hidden pl-3">
        {open ? (
          <BiExit className={`h-7 w-auto rotate-180`} onClick={handlePress} />
        ) : (
          <BiMenu className={`h-7 w-auto`} onClick={handlePress} />
        )}
      </div>
      <div className="flex-1 md:hidden flex items-center">
        <Image
          src={batangasNetLogo}
          alt="Batangas.net"
          height={736}
          width={1366}
          className="h-6 w-auto mr-2"
        />
        <Link
          href={"/"}
          className="italic font-bold text-md cursor-pointer font-serif"
        >
          BATANGAS.NET
        </Link>
      </div>
      <div className="flex-1 md:hidden pl-3"></div>
    </>
  );
};

export default MobileLi;
