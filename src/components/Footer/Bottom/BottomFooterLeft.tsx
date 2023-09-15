import React from "react";
import { Box, Typography } from "@mui/material";

const BottomFooterLeft = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "24px",
          color: "#95A4BB",
        }}
      >
        Get In Touch
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "24px",
          lineHeight: "32px",
        }}
      >
        info@myintellego.com
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "24px",
          lineHeight: "32px",
        }}
      >
        (386) 281-3210
      </Typography>
    </Box>
  );
};

export default BottomFooterLeft;
