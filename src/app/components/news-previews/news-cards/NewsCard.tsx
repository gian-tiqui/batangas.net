"use client";

import { NewsInterface } from "@/app/utils/News";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsCard: React.FC<NewsInterface> = ({ title, urlToImage }) => {
  return (
    <div className="w-64 text-white hover:cursor-pointer">
      <Image
        src={urlToImage}
        width={10000}
        height={10000}
        alt={title}
        className="w-72 h-36 mb-4"
      />

      <h1 className="text-white text-md">{title}</h1>
    </div>
  );
};

export default NewsCard;
