import React from "react";

interface SearchTermInterace {
  params: { searchTerm: string };
}

const page: React.FC<SearchTermInterace> = ({ params }) => {
  return <div className="text-black dark:text-white">{params.searchTerm}</div>;
};

export default page;
