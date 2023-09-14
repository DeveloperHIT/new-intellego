import React from "react";
import { Box, Typography } from "@mui/material";
import InsightsCard from "@/components/InsightsCard";

// TODO: Add flexbox magic to make this look good

const Insights: React.FC = () => {
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
          Insights
        </Typography>
        {/* Articles */}
        <Box display="flex" sx={{ width: "100%" }}>
          <InsightsCard
            title="Title"
            description="Description"
            image="InsightsCard1.png"
          />
          <InsightsCard
            title="Title"
            description="Description"
            image="InsightsCard2.png"
          />
          <InsightsCard
            title="Title"
            description="Description"
            image="InsightsCard3.png"
          />
          <InsightsCard
            title="Title"
            description="Description"
            image="InsightsCard4.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Insights;
