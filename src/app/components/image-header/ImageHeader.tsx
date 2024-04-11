"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import daBG from "../../assets/image.png";

const ImageHeader = () => {
  return (
    <div className="">
      <Image
        src={daBG}
        alt="batangas.net"
        className="absolute top-0 right-0 z-0 h-auto w-[750px] rounded-s-full filter"
      />
    </div>
  );
};

export default ImageHeader;
