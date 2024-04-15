import { useEffect } from "react";
import { redirect } from "next/navigation";
import axios from "axios";
import { NewsInterface } from "../utils/News";
import { newsApiUri } from "../utils/Urls";

const News = async () => {
  const response = await axios.get(newsApiUri);
  const newsData: NewsInterface[] = response.data;
  redirect(`/news/${newsData.length - 1}`);

  return <></>;
};

export default News;
