import { news } from "@/app/utils/News";
import React from "react";

interface SelectedNewsProps {
  params: { newsId: string };
}

const SelectedNews: React.FC<SelectedNewsProps> = ({ params }) => {
  return (
    <div className="h-screen flex justify-center text-white">
      {JSON.stringify(news[parseInt(params.newsId)], null, 2)}
    </div>
  );
};

export default SelectedNews;
