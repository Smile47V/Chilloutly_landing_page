import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "@/component/hero/Page";
import Page1 from "@/component/hero/Page1";
import Navbar from "@/component/Navbar/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Navbar />

          {children}
        </div>

      </body>
    </html>
  );
}
