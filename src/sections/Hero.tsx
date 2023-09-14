import React from "react";
import { Box, Typography } from "@mui/material";

// TODO: Fade the bottom of the hero image

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "700px",
        width: "100vw",
        backgroundImage: `url(hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Box display="flex" flexDirection="column" sx={{ paddingLeft: 2 }}>
        <Typography variant="h1" sx={{ color: "white", fontWeight: 500 }}>
          Industry leader in
          <br /> healthcare fair market value
        </Typography>
        <Typography variant="h5" sx={{ color: "white", fontWeight: 300 }}>
          Navigating the complexities of healthcare compliance with expertise
          and efficiency
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
