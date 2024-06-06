import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/cursor";
import Navbar from "@/components/modules/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberTankz",
  description: "2017-2020 tanks version",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
