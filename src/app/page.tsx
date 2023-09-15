"use client";
import Hero from "@/sections/Hero";
import { Box } from "@mui/material";

export default function Home() {
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
    </Box>
  );
}
