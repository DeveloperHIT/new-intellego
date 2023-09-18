import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import Content from "@/content/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "intellego | industry leader in healthcare fair market value",
  description: "healthcare fair market value",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer menus={Content.menus} socials={Content.socials} />
        </ThemeRegistry>
      </body>
    </html>
  );
}
