import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Box } from "@mui/material";

import NavBar from "@/components/NavBar";

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
          <Box sx={{ display: "flex", backgroundColor: "#f6f9fc" }}>
            <NavBar />
            <Box component="main"> {children}</Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
