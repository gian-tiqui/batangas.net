"use client";
import { useEffect } from "react";
import { news } from "../utils/News";
import { redirect } from "next/navigation";

const News = () => {
  useEffect(() => {
    redirect(`/news/${news.length - 1}`);
  }, []);

  return <></>;
};

export default News;
