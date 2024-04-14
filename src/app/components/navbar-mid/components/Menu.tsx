"use client";
import { MenuInterface } from "@/app/utils/Menu";
import React, { useState } from "react";
import Submenu from "./Submenu";
import { BiChevronDown } from "react-icons/bi";

const Menu: React.FC<MenuInterface> = ({ name, submenu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  return (
    <div
      className={`hover:cursor-pointer flex flex-col ${isOpen ? "active" : ""}`}
    >
      <button
        className="flex items-center gap-1 w-full hover:text-gray-400"
        onClick={handleMenuClick}
      >
        <p className="font-serif">{name}</p>
        <BiChevronDown
          className={`transition duration-200 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div className="flex flex-col gap-2 mt-9 absolute">
        {isOpen &&
          submenu.map((item, index) => <Submenu key={index} {...item} />)}
      </div>

      {isOpen && (
        <div
          className="h-full w-screen fixed top-0 left-0 right-0 bottom-0"
          onClick={handleMenuClick}
        ></div>
      )}
    </div>
  );
};

export default Menu;
