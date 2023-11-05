import Box from "@mui/material/Box";
import Pagination, { paginationClasses } from "@mui/material/Pagination";
import InsightItem from "./insight/insightItem";
import { useState } from "react";

export default function Insights({ insights }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(insights.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInsights = insights.slice(indexOfFirstItem, indexOfLastItem);

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
        {currentInsights.map((insight) => (
          <InsightItem key={insight._id} insight={insight} />
        ))}
      </Box>

      <Pagination
        count={pageCount}
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
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
