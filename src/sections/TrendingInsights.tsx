import React from "react";
import { Card, Typography } from "@mui/material";
import Container from "@/components/Container";
import InsightsCard from "@/components/InsightsCard";
import Grid from "@mui/material/Unstable_Grid2";

const TrendingInsights: React.FC = () => {
  return (
    <Container>
      <Card
        elevation={0}
        sx={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          padding: "2rem",
          marginTop: "-5rem",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Trending Insights
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <InsightsCard
              title={"Title"}
              description={"Description"}
              image="InsightsCard1.png"
            />
          </Grid>
          <Grid xs={4}>
            <InsightsCard
              title={"Title"}
              description={"Description"}
              image="InsightsCard2.png"
            />
          </Grid>
          <Grid xs={4}>
            <InsightsCard
              title={"Title"}
              description={"Description"}
              image="InsightsCard3.png"
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default TrendingInsights;
