import { SubmenuInterface } from "@/app/utils/Menu";
import React from "react";

const Submenu: React.FC<SubmenuInterface> = ({ name, path }) => {
  return <div className="font-serif hover:text-gray-400">{name}</div>;
};

export default Submenu;
