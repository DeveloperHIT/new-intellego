import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// TODO: Refactor this component to be responsive

const TrendingInsights: React.FC = () => {
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
      <Card
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          position: "absolute",
          top: 650,
          width: "90%",
          height: "50%",
          gap: "20px",
        }}
      >
        <Typography variant="h5" sx={{ color: "black", fontWeight: 500 }}>
          Trending Insights
        </Typography>
        <Box
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            height: "90%",
          }}
        >
          {/* Card 1 */}
          <Card sx={{ maxWidth: "30%", height: "100%" }}>
            <CardMedia sx={{ height: 140 }} image="card1.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Consolidation of the ophthalmology sector
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/* Card 2 */}
          <Card sx={{ maxWidth: "30%", height: "100%" }}>
            <CardMedia sx={{ height: 140 }} image="card2.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Dealmaker's Corner: Acquisitions in the booming dermatology
                practice sector
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/* Card 3 */}
          <Card sx={{ maxWidth: "30%", height: "100%" }}>
            <CardMedia sx={{ height: 140 }} image="card3.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Consolidation of the ophthalmology sector
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};

export default TrendingInsights;
