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
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="container text-white px-3 mx-auto font-serif">
      <h1 className="text-3xl font-bold mb-7">{selectedNews.title}</h1>
      <Image
        alt={selectedNews.title}
        width={1000}
        height={1000}
        className="mb-7"
        src={selectedNews.urlToImage}
      />
      <p className="mb-10">{selectedNews.author}</p>
      <p>Published on: {formatDate(selectedNews.publishedAt)}</p>
      <p>{selectedNews.content}</p>
    </div>
  );
};

export default SelectedNews;
