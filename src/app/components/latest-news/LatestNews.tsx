"use client";

import Link from "next/link";
import React from "react";

const LatestNews = () => {
  return (
    <>
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
    </>
  );
};

export default LatestNews;
