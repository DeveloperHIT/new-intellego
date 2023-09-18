import React from "react";
import { Box, Card, Grid, Stack } from "@mui/material";

const Trending: React.FC = () => {
  return (
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        // backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
        //   rgba(white.main, 0.8),
        backdropFilter: "saturate(200%) blur(30px)",
        // boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
    >
      <Box component="section" py={{ xs: 6, md: 12 }} justifyContent="center">
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            ml: { xs: 0, md: "auto" },
            mr: { xs: 0, md: 6 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Stack spacing={{ xs: 4, md: 8 }}>{/* TODO: Create cards */}</Stack>
        </Grid>
      </Box>
    </Card>
  );
};

export default Trending;
