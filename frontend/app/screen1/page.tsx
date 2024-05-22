"use client";

import React, { useState, useEffect } from "react";
import SearchField from "../components/searchField";
import { axiosInstance } from "../axiosInstance";
import _ from "lodash";

interface Record {
  id: number;
  title: string;
  notes: string;
  status: string;
}

const ScreenOne: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axiosInstance.get("/records");
        setRecords(response.data);
      } catch (error) {
        console.error("Error occurred while fetching records:", error);
      }
    };
    fetchRecords();
  }, []);

  const handleSearch = React.useCallback(
    _.debounce(async (query) => {
      try {
        const response = await axiosInstance.get(`/records/?query=${query}`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error occurred while searching records:", error);
      }
    }, 500),
    [axiosInstance]
  );

  const Table = () => {
    return (
      <div className="overflow-x-auto overflow-y-auto h-full">
        <table className="min-w-full border divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records?.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.status}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex justify-center w-4/5">
      <div className="flex flex-col w-full">
        <SearchField
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
        />
        <Table />
      </div>
    </div>
  );
};

export default ScreenOne;
