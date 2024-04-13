"use client";

import { NewsInterface } from "@/app/utils/News";
import Image from "next/image";
import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";

const NewsCard: React.FC<NewsInterface> = ({ title, urlToImage }) => {
  const [iconVisible, setIconVisible] = useState<boolean>(false);

  const handleHover = () => {
    setIconVisible(true);
  };

  const handleUnhover = () => {
    setIconVisible(false);
  };

  return (
    <div
      className="group relative w-64 text-white hover:cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div className="group-hover:opacity-50 overflow-hidden">
        <Image
          src={urlToImage}
          width={10000}
          height={10000}
          alt={title}
          className="w-full h-36 object-cover"
        />
        {iconVisible && (
          <BsNewspaper
            className="h-10 w-auto absolute top-1/3 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 text-white group-hover:text-opacity-100 group-hover:scale-110"
          />
        )}
      </div>

      <h1 className="text-white text-md mt-4 font-serif">{title}</h1>
    </div>
  );
};

export default NewsCard;
