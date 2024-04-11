"use client";
import { MenuInterface } from "@/app/utils/Menu";
import React, { useState } from "react";
import Submenu from "./Submenu";

const Menu: React.FC<MenuInterface> = ({ name, submenu }) => {
  const [submenuVisible, setSubmenuVisible] = useState<boolean>(false);

  const handleMenuClicked = () => {
    setSubmenuVisible((prevVal) => !prevVal);
  };

  return (
    <div className="hover:cursor-pointer flex flex-col">
      <div className="flex">{name}</div>
      {/* {!submenuVisible &&
        submenu.map((item, index) => <Submenu {...item} key={index} />)} */}
    </div>
  );
};

export default Menu;
