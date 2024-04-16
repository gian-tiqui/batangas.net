import { SubmenuInterface } from "@/app/utils/Menu";
import Link from "next/link";
import React from "react";

const Submenu: React.FC<SubmenuInterface> = ({ name, path, onClick }) => {
  return (
    <Link
      href={path}
      className="font-serif hover:text-gray-400"
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default Submenu;
