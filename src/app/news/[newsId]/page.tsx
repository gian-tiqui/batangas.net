import NewsCard from "@/app/components/news-previews/news-cards/NewsCard";
import { NewsInterface, news } from "@/app/utils/News";
import Image from "next/image";
import React from "react";

interface SelectedNewsProps {
  params: { newsId: number };
}

const SelectedNews: React.FC<SelectedNewsProps> = ({ params }) => {
  const selectedNews: NewsInterface = news[params.newsId];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-20 md:px-32">
      <div className="dark:text-white px-3 mx-auto font-serif md:col-span-2">
        <h1 className="text-4xl font-bold mb-7">{selectedNews.title}</h1>
        <Image
          alt={selectedNews.title}
          width={1000}
          height={1000}
          className="mb-7"
          src={selectedNews.urlToImage ? selectedNews.urlToImage : ""}
        />
        <p className="mb-10">{selectedNews.author}</p>
        <p className="text-xl mb-10">
          Published on:{" "}
          {formatDate(selectedNews.publishedAt ? selectedNews.publishedAt : "")}
        </p>
        <div>
          {selectedNews.content?.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="text-xl">{paragraph}</p>
              {(index + 1) % 2 === 0 && <br />}{" "}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="md:col-span-1 px-5">
        <h1 className="dark:text-white font-serif font-bold text-4xl text-center">
          Latest News
        </h1>
        <div className="text-white h-full w-full mt-16 gap-7 flex flex-col items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <NewsCard {...news[0]} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedNews;
