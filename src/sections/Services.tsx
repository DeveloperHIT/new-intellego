import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@/components/Container";
import CardContent from "@mui/material/CardContent";

const Services: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Services
      </Typography>
      {/* TODO: Place radial overlay that is unclickable and right zIndex that is above card but below text */}
      <Box sx={{}}>
        <Grid container spacing={2}>
          <Grid xs={4} md={4}>
            <Card
              sx={{
                backgroundColor: "#ECF4FE",
              }}
            >
              <CardContent>
                <Typography>01</Typography>
                <Typography variant="h6">Service</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4} md={4}>
            <Card
              sx={{
                backgroundColor: "#ECF4FE",
              }}
            >
              <CardContent>
                <Typography>02</Typography>
                <Typography variant="h6">Service</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4} md={4}>
            <Card
              sx={{
                backgroundColor: "#ECF4FE",
              }}
            >
              <CardContent>
                <Typography>03</Typography>
                <Typography variant="h6">Service</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={8} md={8}>
            <Card
              sx={{
                backgroundColor: "#ECF4FE",
              }}
            >
              <CardContent>
                <Typography>04</Typography>
                <Typography variant="h6">Service</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4} md={4}>
            <Card
              sx={{
                backgroundColor: "#ECF4FE",
              }}
            >
              <CardContent>
                <Typography>05</Typography>
                <Typography variant="h6">Service</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
