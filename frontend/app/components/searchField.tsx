import React, { useState } from "react";

interface SearchFieldProps {
  handleSearch: (query: string) => void | Promise<void>;
  query: string;
  setQuery: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ handleSearch, query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(event) => {
        handleSearch(event.target.value);
        setQuery(event.target.value);
      }}
      className="border p-2 mb-4 w-full h-16 text-black"
    />
  );
};

export default SearchField;
