"use client";
import { MenuInterface } from "@/app/utils/Menu";
import React, { useState } from "react";

const Menu: React.FC<MenuInterface> = ({ name, submenu }) => {
  const [submenuVisible, setSubmenuVisible] = useState<boolean>(false);

  const handleMenuClicked = () => {
    setSubmenuVisible((prevVal) => !prevVal);
  };

  return (
    <div
      className="relative hover:cursor-pointer"
      onMouseEnter={handleMenuClicked}
      onMouseLeave={handleMenuClicked}
    >
      <div className="flex">{name}</div>

      {!submenuVisible && <div>{JSON.stringify(submenu, null, 2)}</div>}
    </div>
  );
};

export default Menu;
