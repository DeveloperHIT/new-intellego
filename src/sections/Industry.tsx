"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/components/ThemeRegistry/theme";

const Industry: React.FC = () => {
  return (
    <Box
      sx={{
        height: "250px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "black", fontWeight: 500 }}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        What's your industry?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          height: "100%",
          gap: "20px",
        }}
      >
        TODO: Add Framer Motion Scroll Animation
      </Box>
    </Box>
  );
};

export default Industry;
