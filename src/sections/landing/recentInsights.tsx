import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Iconify from "@/components/Iconify";
import { useResponsive } from "@/hooks/useResponsive";
import Carousel, {
  useCarousel,
  CarouselDots,
  CarouselArrows,
} from "@/components/Carousel";

import InsightItem from "./insightItem";
import InsightItemCarousel from "./insightItemCarousel";
import Link from "@mui/material/Link";
import { Insight } from "@/types/Insights/Insight";

interface RecentInsightsProps {
  insights: Insight[];
}

export default function RecentInsights({ insights }: RecentInsightsProps) {
  const mdUp = useResponsive("up", "md");

  const carousel = useCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      width: 1,
      bottom: 80,
      position: "absolute",
    }),
  });

  return (
    <Box sx={{ bgcolor: "grey.900" }}>
      {!mdUp && (
        <Typography
          variant="h2"
          sx={{ pt: 10, pb: 8, color: "common.white", textAlign: "center" }}
        >
          Trending Insights
        </Typography>
      )}

      <Box
        gap={{ xs: 8, md: 0 }}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        <Box sx={{ overflow: "hidden", position: "relative" }}>
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{ sx: { color: "common.white" } }}
            rightButtonProps={{ sx: { color: "common.white" } }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {insights.map((insight, index) => (
                <InsightItemCarousel key={index} insight={insight} />
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>

        <Box
          sx={{
            px: { xs: 2.5, sm: 5, md: 8, lg: 15 },
          }}
        >
          {mdUp && (
            <Typography variant="h2" sx={{ color: "common.white", py: 10 }}>
              {/* TODO: Move to sanity */}
              Latest Insights
            </Typography>
          )}

          <Stack spacing={3}>
            {insights.map((insight, index) => (
              <InsightItem key={index} insight={insight} />
            ))}
          </Stack>

          <Box
            sx={{
              mt: { xs: 8, md: 5 },
              mb: 10,
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <Button
              color="primary"
              component={Link}
              href="/filteredInsights"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              View All
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
