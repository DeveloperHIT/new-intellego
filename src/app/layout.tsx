import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { AppBar, Box } from "@mui/material";

import Container from "@/components/Container";
import TopBar from "@/components/TopBar";
import TopFooter from "@/components/Footer/Top/TopFooter";
import BottomFooter from "@/components/Footer/Bottom/BottomFooter";

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
          <Box
            sx={{
              backgroundColor: "#FBFDFF",
            }}
          >
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
            <main>{children}</main>
            {/* Top Footer */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
              }}
            >
              <Container paddingY={0}>
                <TopFooter />
              </Container>
            </Box>
            {/* Bottom Footer */}
            <Box
              sx={{
                backgroundColor: "#1F1F1F",
                color: "#FFFFFF",
                height: "550px",
              }}
            >
              <Container paddingY={0}>
                <BottomFooter />
              </Container>
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
