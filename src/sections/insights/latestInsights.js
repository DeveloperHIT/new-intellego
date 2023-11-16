import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/Iconify";
// import RouterLink from "@/routes/routerLink";
import { useResponsive } from "@/hooks/useResponsive";

import InsightItem from "@/sections/insights/insight/insightItem";
import Link from "@mui/material/Link";

export default function LatestInsights({ insights }) {
  const mdUp = useResponsive("up", "md");

  const viewAllBtn = (
    <Button
      component={Link}
      href="/"
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Box
      sx={{
        bgcolor: "background.neutral",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Latest Insights</Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            gap: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {insights.map((insight, index) =>
            mdUp ? (
              <InsightItem key={index} insight={insight} />
            ) : (
              <div key={index}>test</div>
              // <InsightItemMobile key={index} insight={insight} />
            ),
          )}
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
