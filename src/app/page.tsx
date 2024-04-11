import Image from "next/image";
import Link from "next/link";
import { news } from "./utils/News";
import NewsCard from "./components/news-previews/news-cards/NewsCard";

export default function Home() {
  return (
    <main className="pt-32">
      <div className="mx-64">
        <h1 className="text-blue-700 text-6xl font-bold font-serif mb-5">
          Latest News
        </h1>
        <h1 className="text-white text-5xl font-serif mb-3">
          Plane tickets to become
        </h1>
        <h1 className="text-white text-5xl font-serif mb-10">
          more pricey in March
        </h1>
        <Link
          className="font-bold px-9 py-3 text-xl text-white font-serif bg-blue-700 rounded-full"
          href={""}
        >
          Read
        </Link>
      </div>
      <div className="mx-24 mt-32 flex flex-wrap gap-y-24 gap-x-10 mb-20 justify-center">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <NewsCard {...news[0]} key={index} />
          ))}
      </div>
      <div className="flex justify-end">
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
