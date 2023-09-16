"use client";
import React from "react";
import Container from "@/components/Container";
import { Box, Typography } from "@mui/material";

const Industry: React.FC = () => {
  return (
    <Container>
      <Box>
        <Box overflow="hidden">
          <Typography variant="h6" color="white">
            Ambulatory Surgery Centers
          </Typography>
        </Box>
        <Box overflow="hidden">
          <Typography variant="h6" color="white">
            Dialysis Clinics
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Industry;
