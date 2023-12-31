import { useRef } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { bgGradient } from "@/theme/css";
import Iconify from "@/components/Iconify";
import { HEADER } from "@/layouts/configLayout";
import { useResponsive } from "@/hooks/useResponsive";
import { useBoundingClientRect } from "@/hooks/useBoundingClientRect";

interface HeroData {
  heroButtonText: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageUrl: string;
  heroSubtitle: string;
  heroTitle: string;
  pageDescription: string;
  pageTitle: string;
}

interface HeroProps {
  heroData: HeroData;
}

export default function Hero({ heroData }: HeroProps) {
  const theme = useTheme();

  const containerRef = useRef(null);

  const mdUp = useResponsive("up", "md");

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const titleWords = heroData.heroTitle.split(" ");
  const lastWord = titleWords.pop();
  const initialTitle = titleWords.join(" ");

  return (
    <Box
      // TODO: Test out other gradients to make the bg more vibrant
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.55),
          imgUrl: heroData.heroImageUrl,
        }),
        overflow: "hidden",
        position: "relative",
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container sx={{ height: 1 }}>
        <Grid
          container
          columnSpacing={3}
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid xs={12} md={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{
                py: 15,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h1" color="common.white">
                {initialTitle}
                <Box
                  sx={{
                    color: "primary.main",
                    textTransform: "uppercase",
                  }}
                >
                  {lastWord}
                </Box>
              </Typography>

              <Typography sx={{ color: "secondary.contrastText" }}>
                {heroData.heroSubtitle}
              </Typography>

              <Button
                color="primary"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:launch" />}
                href="/contact"
              >
                {heroData.heroButtonText}
              </Button>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {mdUp && (
        <Box
          sx={{
            maxWidth: 1280,
            position: "absolute",
            bottom: { md: "20%", lg: 40 },
            right: { md: -110, xl: 0 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          {/*<ImageType*/}
          {/*  visibleByDefault*/}
          {/*  disabledEffect*/}
          {/*  alt="home hero"*/}
          {/*  src="/assets/images/home/home_hero.png"*/}
          {/*/>*/}
        </Box>
      )}
    </Box>
  );
}
