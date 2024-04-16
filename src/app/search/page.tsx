import React from "react";

interface SearchPageInterface {
  params: { searchWord: string };
}

const page: React.FC<SearchPageInterface> = ({ params }) => {
  return <div className="text-black dark:text-white">{params.searchWord}</div>;
};

export default page;
