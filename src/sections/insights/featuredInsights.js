import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import InsightItem from "@/sections/insights/insight/insightItem";

export default function FeaturedInsights({ posts }) {
  const featuredPost = posts[0];

  return (
    <Container
      sx={{
        pt: { xs: 0, md: 5 },
        pb: 10,
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          },
        }}
      >
        <InsightItem post={featuredPost} largePost />

        <Box
          sx={{
            gap: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
          }}
        >
          {posts.slice(1, 5).map((post) => (
            <InsightItem key={post.id} post={post} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
