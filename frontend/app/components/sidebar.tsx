"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

export const Sidebar2: FC = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-gray-800 text-white w-1/6 space-y-6 px-2 py-7">
      <nav>
        <ul className="flex flex-col items-center gap-5">
          <li className="w-full text-center">
            <Link
              href="/screen1"
              className={`block py-2.5 rounded transition duration-200 hover:bg-gray-700 ${
                pathname === "/screen1" ? "bg-gray-700" : ""
              }`}
            >
              Screen 1
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              href="/screen2"
              className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${
                pathname === "/screen2" ? "bg-gray-700" : ""
              }`}
            >
              Screen 2
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              href="/screen3"
              className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${
                pathname === "/screen3" ? "bg-gray-700" : ""
              }`}
            >
              Screen 3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
