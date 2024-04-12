import Link from "next/link";
import { news } from "./utils/News";
import NewsCard from "./components/news-previews/news-cards/NewsCard";
import LatestNews from "./components/latest-news/LatestNews";
import ImageHeader from "./components/image-header/ImageHeader";

export default function Home() {
  return (
    <main className="pt-40 font-serif">
      <ImageHeader />
      <div className="mx-64">
        <h1 className="text-blue-700 text-6xl font-bold font-serif mb-5">
          Latest News
        </h1>
        <LatestNews />
      </div>
      <div className="mx-24 mt-32 flex flex-wrap gap-y-24 gap-x-10 mb-20 justify-center">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <NewsCard {...news[0]} key={index} />
          ))}
      </div>
      <div className="flex justify-end mb-20">
        <Link
          href={""}
          className="py-3 bg-blue-700 px-8 text-white font-semibold rounded-full mr-48"
        >
          More news
        </Link>
      </div>
    </main>
  );
}
