"use client";
import Hero from "@/sections/Hero";
import { Box, Typography } from "@mui/material";

import Services from "@/sections/Services";
import TrendingInsights from "@/sections/TrendingInsights";
import Industry from "@/sections/Industry";
import { useTheme } from "@mui/material/styles";
import Container from "@/components/Container";

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url("hero.png")`,
          position: "relative",
        }}
      >
        <Box position={"relative"} zIndex={2}>
          <Hero />
        </Box>
      </Box>
      <TrendingInsights />
      <Services />

      <Container paddingY={2}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Typography variant="h5">What's your industry?</Typography>
      </Container>

      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Industry />
      </Box>
    </Box>
  );
}
