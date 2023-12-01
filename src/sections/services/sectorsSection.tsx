import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Iconify from "@/components/Iconify";
import TextMaxLine from "@/components/TextMaxLine";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Link from "@mui/material/Link";
import { SectorType } from "@/types/Sector";
import { ServiceLineType } from "@/types";

interface SectorsSectionProps {
  sectors: SectorType[];
}

export default function SectorsSection({ sectors }: SectorsSectionProps) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "background.neutral",
        pb: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Sectors", href: "/sectors" },
          ]}
        />
        <Grid
          container
          spacing={{ xs: 8, lg: 3 }}
          justifyContent={{ lg: "space-between" }}
        >
          <Grid
            xs={12}
            lg={3}
            sx={{
              textAlign: { xs: "center", lg: "unset" },
            }}
          >
            <Typography variant="h2">Sectors</Typography>

            <Typography sx={{ color: "text.secondary", mt: 2, mb: 5 }}>
              [Add description here]
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Get Started
            </Button>
          </Grid>

          <Grid xs={12} lg={9}>
            <Box
              sx={{
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
              }}
            >
              {sectors.map((sector, index) => (
                <CategoryItem
                  key={index}
                  category={sector.title}
                  slug={sector.slug.current}
                  serviceLines={sector.serviceLines}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

interface CategoryItemProps {
  category: string;
  serviceLines?: ServiceLineType[];
  slug: string;
}

function CategoryItem({ category, serviceLines, slug }: CategoryItemProps) {
  return (
    <Link href={`/sectors/${slug}`} underline="none">
      <Paper
        variant="outlined"
        sx={{
          minHeight: 175,
          p: 3,
          borderRadius: 1.5,
          cursor: "pointer",
          bgcolor: "transparent",
          transition: (theme) =>
            theme.transitions.create("all", {
              duration: theme.transitions.duration.enteringScreen,
            }),
          "&:hover": {
            bgcolor: "background.paper",
            boxShadow: (theme) => theme.customShadows.z24,
            h6: {
              color: "primary.main",
            },
          },
        }}
      >
        <Link href={`/sectors/${slug}`}>
          <TextMaxLine variant="body1" line={2} sx={{ color: "common.black" }}>
            {category}
          </TextMaxLine>
        </Link>

        {serviceLines && serviceLines.length > 0 ? (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {serviceLines.map((serviceLine, index) => {
              const serviceLineTitle = serviceLine.title.split(" - ")[0];
              return (
                <Box key={index}>
                  <Link
                    href={`/sectors/${slug}/${serviceLine.slug}`}
                    // underline="none"
                    sx={{ color: "text.disabled" }}
                  >
                    {serviceLineTitle}
                  </Link>
                </Box>
              );
            })}
          </Typography>
        ) : null}
      </Paper>
    </Link>
  );
}
