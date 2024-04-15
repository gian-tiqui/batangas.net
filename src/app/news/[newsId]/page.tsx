import NewsCard from "@/app/components/news-previews/news-cards/NewsCard";
import { NewsInterface, news } from "@/app/utils/News";
import { newsApiUri } from "@/app/utils/Urls";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SelectedNewsProps {
  params: { newsId: number };
}

const SelectedNews: React.FC<SelectedNewsProps> = async ({ params }) => {
  const response = await axios.get(newsApiUri);

  const newsData: NewsInterface[] = response.data;

  const selectedNews = newsData.find(
    (item: NewsInterface) => item.id == params.newsId
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  if (selectedNews) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-20 md:px-32">
        <div className="dark:text-white px-3 mx-auto font-serif md:col-span-2">
          <h1 className="text-4xl font-bold mb-7">{selectedNews?.title}</h1>
          <Image
            alt={(selectedNews?.title as string) ?? "No Title"}
            width={1000}
            height={1000}
            className="mb-7"
            src={selectedNews?.urlToImage ? selectedNews.urlToImage : ""}
          />
          <p className="mb-10">{selectedNews?.author}</p>
          <p className="text-xl mb-10">
            Published on:{" "}
            {formatDate(
              selectedNews?.publishedAt ? selectedNews.publishedAt : ""
            )}
          </p>
          <div>
            {selectedNews?.content?.split("\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                <p className="text-xl">{paragraph}</p>
                {index % 3 === 2 && <br />}{" "}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 px-5">
          <h1 className="dark:text-white font-serif font-bold text-4xl text-center">
            Latest News
          </h1>
          <div className="text-white h-full w-full mt-16 gap-7 flex flex-col items-center">
            {newsData.slice(0, 5).map((item, index) => (
              <Link href={`/news/${item.id}`} key={index}>
                <NewsCard {...item} key={index} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default SelectedNews;
