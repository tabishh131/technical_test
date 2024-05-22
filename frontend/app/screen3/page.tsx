"use client";

import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axiosInstance";

const ScreenThree: React.FC = () => {
  const [grid, setGrid] = useState<string[][]>([]);

  const fetchGrid = async () => {
    try {
      const response = await axiosInstance.get("/grid");
      setGrid(response?.data);
    } catch (error) {
      console.error("Error fetching grid:", error);
    }
  };

  useEffect(() => {
    fetchGrid();
  }, []);

  const handleCellClick = async (row: number, col: number) => {
    try {
      const response = await axiosInstance.post("/grid", {
        row,
        col,
      });
      setGrid(response.data);
      fetchGrid();
    } catch (error) {
      console.error("Error updating grid:", error);
    }
  };

  return (
    <div className="flex items-center">
      <div className="grid grid-cols-3 h-[77%]">
        {grid?.map((row, rowIndex) =>
          row?.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-60 h-60 border border-white ${
                color === "red"
                  ? "bg-red-500 hover:bg-red-400 cursor-pointer"
                  : "bg-blue-500 hover:bg-blue-400 cursor-pointer"
              }`}
              onClick={() => {
                handleCellClick(rowIndex, colIndex);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ScreenThree;
