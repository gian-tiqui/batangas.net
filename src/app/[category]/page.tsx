import axios, { AxiosResponse } from "axios";
import { redirect } from "next/navigation";
import React from "react";
import { NewsInterface } from "../utils/News";
import { newsApiUri } from "../utils/Urls";
import NewsCard from "../components/news-previews/news-cards/NewsCard";

interface CategoryInterface {
  params: { category: string };
}

const page: React.FC<CategoryInterface> = async ({ params }) => {
  const response: AxiosResponse<NewsInterface[]> = await axios.get(newsApiUri);
  const newsData: NewsInterface[] = response.data;
  const categories: string[] = [
    "entertainment",
    "politics",
    "lifestyle",
    "sports",
  ];

  const selectedCategory: string | undefined = categories.find(
    (category) => category === params.category
  );

  if (!selectedCategory) redirect("/");

  const titleCaseString = (word: string) => {
    return word
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="container px-3 mx-auto">
      <h1 className="text-5xl text-black dark:text-white text-center font-serif font-bold mb-10">
        {titleCaseString(params.category)}
      </h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {newsData.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default page;
