"use client";
import Hero from "@/sections/Hero";
import { alpha, Box } from "@mui/material";
import TrendingInsights from "@/sections/TrendingInsights";
import Services from "@/sections/Services";
import Industry from "@/sections/Industry";
import Insights from "@/sections/Insights";
import Footer from "@/components/Footer/Footer";
import theme from "@/components/ThemeRegistry/theme";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Box>
      <Container
        sx={{
          backgroundImage: `url("hero.png")`,
          position: "relative",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "20%",
            zIndex: 1,
            top: 0,
            left: 0,
            height: "100%",
            opacity: 0.2,
          },
        }}
      >
        <Box position={"relative"} zIndex={2}>
          <Hero />
        </Box>
      </Container>
      {/*<Hero />*/}
      {/*<TrendingInsights />*/}
      {/*<Services />*/}
      {/*<Industry />*/}
      {/*<Insights />*/}
      {/*<Footer />*/}
    </Box>
  );
}
