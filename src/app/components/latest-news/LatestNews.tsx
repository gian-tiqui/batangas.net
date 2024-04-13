import { news } from "@/app/utils/News";
import Link from "next/link";
import React from "react";

const LatestNews = () => {
  return (
    <>
      <h1 className="text-white text-2xl md:text-5xl font-serif mb-5 md:mb-10 max-w-lg">
        {news[0].title}
      </h1>

      <Link
        className="font-bold px-8 py-2 md:px-9 md:py-3 text-lg md:text-xl text-white font-serif bg-blue-700 rounded-full hover:bg-blue-800 hover:text-gray-300"
        href={`/news/${news.length - 1}`}
      >
        Read
      </Link>
    </>
  );
};

export default LatestNews;
