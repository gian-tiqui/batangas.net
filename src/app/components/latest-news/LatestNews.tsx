import { NewsInterface } from "@/app/utils/News";
import { newsApiUri } from "@/app/utils/Urls";
import axios from "axios";
import Link from "next/link";
import React from "react";

const LatestNews = async () => {
  const response = await axios.get(newsApiUri);

  const newsData: NewsInterface[] = response.data;

  return (
    <>
      <h1 className="dark:text-white text-2xl md:text-5xl font-serif mb-5 md:mb-10 max-w-lg">
        {newsData[newsData.length - 1].title}
      </h1>

      <Link
        className="font-bold px-8 py-2 md:px-9 md:py-3 text-lg md:text-xl text-white font-serif bg-indigo-700 rounded-full hover:bg-indigo-800 hover:text-gray-300"
        href={`/news/${newsData.length - 1}`}
      >
        Read
      </Link>
    </>
  );
};

export default LatestNews;
