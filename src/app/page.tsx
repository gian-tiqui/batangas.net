import Link from "next/link";
import { NewsInterface, news } from "./utils/News";
import NewsCard from "./components/news-previews/news-cards/NewsCard";
import LatestNews from "./components/latest-news/LatestNews";
import ImageHeader from "./components/image-header/ImageHeader";
import axios, { AxiosResponse } from "axios";
import { newsApiUri } from "./utils/Urls";

export const Home = async () => {
  const response: AxiosResponse<NewsInterface[]> = await axios.get(newsApiUri);

  const newsData: NewsInterface[] = response.data;

  return (
    <main className="pt-10 md:pt-40">
      <ImageHeader />
      <div className="mx-9 md:mx-64">
        <h1 className="text-indigo-700 text-3xl md:text-6xl font-bold font-serif mb-5">
          Latest News
        </h1>
        <LatestNews />
      </div>
      <div className="mx-24 mt-32 flex flex-wrap gap-y-24 gap-x-10 mb-20 justify-center">
        {newsData.map((item, index) => (
          <Link href={`/news/${item.id}`} key={index}>
            <NewsCard {...item} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center md:justify-end mb-20">
        <Link
          href={"/news"}
          className="py-3 bg-indigo-700 px-8 text-white font-semibold rounded-full md:mr-48 hover:bg-indigo-800 hover:text-gray-300 font-serif"
        >
          More news
        </Link>
      </div>
    </main>
  );
};

export default Home;
