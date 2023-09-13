import React from "react";
import { Box } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100vw",
        backgroundImage: `url(hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Hero Content Goes Here
    </Box>
  );
};

export default HeroSection;
