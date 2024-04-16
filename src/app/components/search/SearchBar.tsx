"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedWord: string = event.target.value;
    setSearchWord(searchedWord);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const redirectUrl = `/search/${searchWord}`;
      alert(`Redirecting to: ${redirectUrl}`);
      redirect(redirectUrl);
    }
  };

  return (
    <div className="relative w-max mx-auto">
      <div className="flex absolute inset-0 gap-2 hover:text-gray-500">
        <BiSearchAlt className="h-6 w-auto" />
      </div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search here..."
        className="relative peer z-10 text-sm bg-transparent w-12 h-7 transform dark:shadow-none focus:shadow-lg transition-all rounded-lg focus:border outline-none cursor-pointer focus:w-64 text-black focus:bg-white pl-12 focus:pl-16 focus:pr-4"
        value={searchWord}
        onChange={handleChangeWord}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
