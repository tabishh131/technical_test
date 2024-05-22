"use client";

import "./globals.css";
import { Sidebar2 } from "./components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex" suppressHydrationWarning={true}>
        <Sidebar2 />
        <div className="w-5/6 h-screen flex justify-center">{children}</div>
      </body>
    </html>
  );
}
