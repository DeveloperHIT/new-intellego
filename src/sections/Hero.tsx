import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

// TODO: Fade the bottom of the hero image

const Hero: React.FC = () => {
  return (
    <Box
      minHeight="75vh"
      width="100%"
      // TODO: Add linear gradient overlay
      sx={{
        backgroundImage: "url(/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container
        sx={{
          paddingTop: { xs: 12, sm: 16, md: 20, lg: 24, xl: 28 },
          paddingBottom: { xs: 12, sm: 16, md: 20, lg: 24, xl: 28 },
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={7}
          justifyContent={{ xs: "center", md: "start" }}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            color="white !important"
            sx={{
              fontSize: { sm: "3xl" },
            }}
          >
            Industry leader in healthcare consulting
          </Typography>
          <Typography
            variant="body1"
            color="white !important"
            mt={1}
            pr={{ md: 12, lg: 24, xl: 32 }}
            sx={{ opacity: 0.8 }}
          >
            Navigating the complexities of healthcare with experience and
            efficiency
          </Typography>
          <Stack direction="row" spacing={1} mt={6} mb={3}>
            {/* TODO: Create a button with gradient */}
            <Button variant="contained">Contact us</Button>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
