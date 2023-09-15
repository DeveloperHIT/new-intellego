import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { AppBar, Box, Divider } from "@mui/material";

import Container from "@/components/Container";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// TODO: Eliminate overscroll

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
          <Box>
            <AppBar
              position={"fixed"}
              sx={{
                top: 0,
                zIndex: 2000,
                backgroundColor: "#5E5E5E80",
                borderBottom: "1px solid #C4C4C4",
                backdropFilter: `saturate(180%) blur(20px)`,
                transition: "backdrop-filter 0.3s ease",
              }}
              elevation={0}
            >
              <Container paddingY={1}>
                <TopBar />
              </Container>
            </AppBar>
            <main>
              {children}
              <Divider />
            </main>
            <Container paddingY={4}>
              <Footer />
            </Container>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
