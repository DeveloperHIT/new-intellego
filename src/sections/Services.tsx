import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

// TODO: Add flexbox magic to make this look good

const Services: React.FC = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          width: "90%",
          height: "100%",
          gap: "20px",
        }}
      >
        <Typography variant="h5" sx={{ color: "black", fontWeight: 500 }}>
          Services
        </Typography>
        {/* Card Container */}
        <Box
          display="flex"
          sx={{
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          {/* Top Row */}
          <Box
            display="flex"
            sx={{
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Card sx={{}}>
              <CardMedia
                sx={{ height: 200, width: 300 }}
                // TODO: Replace cards with images that have no text
                image="ServicesCard1.png"
              />
            </Card>
            <Card>
              <CardMedia
                sx={{ height: 200, width: 300 }}
                image="ServicesCard2.png"
              />
            </Card>
            <Card>
              <CardMedia
                sx={{ height: 200, width: 300 }}
                image="ServicesCard3.png"
              />
            </Card>
          </Box>
          {/* Bottom Row */}
          <Box
            display="flex"
            sx={{ gap: "20px", justifyContent: "space-between" }}
          >
            <Card>
              <CardMedia
                sx={{ height: 200, width: 600 }}
                image="ServicesCard4.png"
              />
            </Card>
            <Card>
              <CardMedia
                sx={{ height: 200, width: 300 }}
                image="ServicesCard5.png"
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
