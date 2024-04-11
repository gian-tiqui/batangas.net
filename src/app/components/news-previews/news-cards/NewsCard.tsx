import { NewsInterface } from "@/app/utils/News";
import Image from "next/image";
import React from "react";

const NewsCard: React.FC<NewsInterface> = ({ title, urlToImage }) => {
  return (
    <div className="w-52 text-white">
      <Image
        src={urlToImage}
        width={1366}
        height={768}
        alt={title}
        className="w-52 h-auto mb-4"
      />
      <h1 className="text-white text-sm">{title}</h1>
    </div>
  );
};

export default NewsCard;
