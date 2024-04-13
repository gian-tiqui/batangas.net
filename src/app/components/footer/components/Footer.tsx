import React from "react";
import Image from "next/image";
import { BiCopyright, BiNews } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import batangasNetLogo from "../../../assets/favicon.ico";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import Link from "next/link";

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
          <p className="text-white text-lg mb-7 font-serif">
            dhkjaskjhdnabkjhscd iadhacdsh jdhakdshaj adshhasdhkjdshkj
          </p>
          <div className="flex justify-start gap-5">
            <Link href={"https://www.facebook.com/Batangasnewsportal"}>
              <FaFacebook className="text-white h-6 w-6" />
            </Link>
            <Link href={"/"}>
              <BsTwitterX className="text-white h-6 w-6" />
            </Link>
            <Link href={"/"}>
              <BsInstagram className="text-white h-6 w-6" />
            </Link>
            <Link href={"/"}>
              <BiNews className="text-white h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly text-white w-full">
          <div className="flex flex-col gap-y-2">
            <p className="font-bold font-serif">Entertainment</p>
            {items.map((val) => (
              <p className="text-white font-serif" key={val}>
                Item {val}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold font-serif">Politics</p>
            {items.map((val) => (
              <p className="text-white" key={val}>
                Item {val}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold font-serif">Lifestyle</p>
            {items.map((val) => (
              <p className="text-white" key={val}>
                Item {val}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold font-serif">Sports</p>
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
        <p className="text-white font-serif">
          Batangas.net, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
