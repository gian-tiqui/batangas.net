import { SubmenuInterface } from "@/app/utils/Menu";
import React from "react";

const Submenu: React.FC<SubmenuInterface> = ({ name, path }) => {
  return <div>{name}</div>;
};

export default Submenu;
