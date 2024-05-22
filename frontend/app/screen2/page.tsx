"use client";

import React, { useState } from "react";
import SearchField from "../components/searchField";
import { axiosInstance } from "../axiosInstance";
import _ from "lodash";
import Image from "next/image";

interface Image {
  src: {
    small: string;
  };
  photographer: string;
}

const ScreenTwo: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSearch = React.useCallback(
    _.debounce(async (query: string) => {
      try {
        const response = await axiosInstance.get("/images", {
          params: {
            query: query,
          },
        });
        const res = response.data;
        setImages(res.photos);
      } catch (error) {
        console.error("Error occurred while searching for images:", error);
      }
    }, 500),
    [axiosInstance]
  );

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="w-4/5 flex-col">
      <div className="flex flex-col w-full">
        <SearchField
          setQuery={setQuery}
          query={query}
          handleSearch={handleSearch}
        />
      </div>
      <div className="flex">
        <button
          onClick={goToPreviousImage}
          className="bg-blue-800 text-white px-4 py-2 rounded-md mr-2"
        >
          Previous
        </button>
        <img
          src={images && images[currentImageIndex]?.src.small}
          alt={images && images[currentImageIndex]?.photographer}
          className="w-full h-[600px] object-cover"
        />
        <button
          onClick={goToNextImage}
          className="bg-blue-800 text-white px-4 py-2 rounded-md ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ScreenTwo;
