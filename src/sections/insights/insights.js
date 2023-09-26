import Box from "@mui/material/Box";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import InsightItem from "./insightItem";

export default function Insights({ insights }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: "grid",
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          },
        }}
      >
        {insights.map((insight) => (
          <InsightItem key={insight.id} insight={insight} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        sx={{
          py: { xs: 8, md: 10 },
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}
