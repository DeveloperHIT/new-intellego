import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Container from "@/components/Container";

// TODO: Fade the bottom of the hero image

const HeroSection: React.FC = () => {
  return (
    <Container>
      <Box
        marginBottom={4}
        sx={{
          paddingTop: 10,
        }}
      >
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
    </Container>
  );
};

export default HeroSection;
