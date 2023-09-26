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

export default function HomeHero() {
  const theme = useTheme();

  const containerRef = useRef(null);

  const mdUp = useResponsive("up", "md");

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.1),
          imgUrl: "/assets/background/hero.png",
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
                Healthcare fair market value
                <Box component="span" sx={{ color: "primary.main" }}>
                  {` SOLUTIONS`}
                </Box>
              </Typography>

              <Typography sx={{ color: "secondary.contrastText" }}>
                Navigating the complexities of healthcare with expertise and
                efficiency.
              </Typography>

              <Button
                color="primary"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:launch" />}
                href="/contact"
              >
                Get Started
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
          {/*<Image*/}
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