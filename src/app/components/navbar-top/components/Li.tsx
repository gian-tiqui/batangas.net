import Link from "next/link";
import React from "react";

interface LiProps {
  name: string;
  path: string;
}

const Li: React.FC<LiProps> = ({ name, path }) => {
  return (
    <Link
      href={path}
      className="border-e border-white pr-10 hover:animate-pulse"
    >
      {name}
    </Link>
  );
};

export default Li;
