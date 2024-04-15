"use client";

import { NewsInterface } from "@/app/utils/News";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsNewspaper } from "react-icons/bs";

const NewsCard: React.FC<NewsInterface> = ({ title, urlToImage, author }) => {
  const [iconVisible, setIconVisible] = useState<boolean>(false);

  const handleHover = () => {
    setIconVisible(true);
  };

  const handleUnhover = () => {
    setIconVisible(false);
  };

  return (
    <div
      className="group relative w-64 text-white hover:cursor-pointer shadow-xl dark:shadow-none pb-4"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div className="group-hover:opacity-50 overflow-hidden">
        <Image
          src={urlToImage ? urlToImage : ""}
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

      <h1 className="text-black dark:text-white text-md mt-4 font-serif mx-2">
        {title}
      </h1>
      <h1 className="text-black dark:text-white text-sm mt-4 font-serif mx-2">
        Author: {author}
      </h1>
    </div>
  );
};

export default NewsCard;
