import React from "react";
import Image from "next/image";
import { BiCopyright } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import batangasNetLogo from "../../../assets/favicon.ico";

const items: number[] = [1, 2, 3, 4];

const Footer = () => {
  return (
    <footer className="h-[420px] bg-purple-950">
      <div className="border-t border-t-white p-20 flex">
        <div className="max-w-96">
          <Image
            src={batangasNetLogo}
            alt="Batangas.net"
            height={736}
            width={1366}
            className="h-8 w-auto mr-3 mb-4"
          />
          <p className="text-white text-lg mb-7">
            dhkjaskjhdnabkjhscd iadhacdsh jdhakdshaj adshhasdhkjdshkj
          </p>
          <div className="flex justify-start gap-5">
            {items.map((_, index) => (
              <FaFacebook className="text-white h-6 w-6" key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-evenly text-white w-full">
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Entertainment</p>
            {items.map((val) => (
              <p className="text-white" key={val}>
                Item {val}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Politics</p>
            {items.map((val) => (
              <p className="text-white" key={val}>
                Item {val}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Lifestyle</p>
            {items.map((val) => (
              <p className="text-white" key={val}>
                Item {val}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">Sports</p>
            {items.map((val) => (
              <p className="text-white" key={val}>
                Item {val}
              </p>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-t border-t-white mx-20" />
      <div className="flex mt-8 ml-20 items-center gap-1">
        <BiCopyright className="text-white" />
        <p className="text-white">Batangas.net, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
