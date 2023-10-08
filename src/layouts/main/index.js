"use client";
import Box from "@mui/material/Box";

import { usePathname } from "@/hooks/usePathname";

import { HEADER } from "@/layouts/configLayout";

import Header from "./header";
import Footer from "./footer";
import { useScroll } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress/scrollProgress";

const pathsOnDark = ["/"];

const spacingLayout = [...pathsOnDark, "/"];

export default function MainLayout({ children, data }) {
  const pathname = usePathname();

  const actionPage = (arr) => arr.some((path) => pathname === path);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
        <Header headerOnDark={actionPage(pathsOnDark)} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          {!actionPage(spacingLayout) && <Spacing />}

          {children}
        </Box>

        <Footer data={data} />
      </Box>
    </>
  );
}

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
      }}
    />
  );
}
