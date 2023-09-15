import React from "react";
import { Box, Grid, Typography } from "@mui/material";

// TODO: Fade the bottom of the hero image

const HeroSection: React.FC = () => {
  return (
    // <Box
    //   sx={{
    //     height: "700px",
    //     width: "100vw",
    //     backgroundImage: `url(hero.png)`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     paddingTop: "100px",
    //     paddingBottom: "100px",
    //   }}
    // >
    //   <Box display="flex" flexDirection="column" sx={{ paddingLeft: 2 }}>
    //     <Typography variant="h1" sx={{ color: "white", fontWeight: 500 }}>
    //       Industry leader in
    //       <br /> healthcare fair market value
    //     </Typography>
    //     <Typography variant="h5" sx={{ color: "white", fontWeight: 300 }}>
    //       Navigating the complexities of healthcare compliance with expertise
    //       and efficiency
    //     </Typography>
    //   </Box>
    // </Box>
    <Box sx={{ paddingTop: 10 }}>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h3"
            color="white"
            align="left"
            sx={{ fontWeight: 700 }}
          >
            Industry leader in
            <br /> healthcare fair market value
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="white"
            sx={{ fontWeight: 400 }}
            align={"left"}
          >
            Navigating the complexities of healthcare compliance with expertise
          </Typography>
          <Typography
            variant={"body1"}
            color="white"
            sx={{
              marginTop: 4,
            }}
          >
            Intellego’s fair market value axperts are moving the industry
            forward through innovative thought and a keen focus on cost,
            ti,eliness, and quality
          </Typography>
        </Box>
        <Grid container spacing={2}></Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
