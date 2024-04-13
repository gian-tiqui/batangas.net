import Link from "next/link";
import React from "react";

interface LiProps {
  name: string;
  path: string;
  hidden: boolean;
}

const Li: React.FC<LiProps> = ({ name, path, hidden }) => {
  return (
    <Link
      href={path}
      className={`${
        hidden && "hidden"
      } md:block md:border-e md:border-white pr-10 hover:text-gray-400 font-serif`}
    >
      {name}
    </Link>
  );
};

export default Li;
