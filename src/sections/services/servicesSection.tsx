import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/Iconify";
// import TextMaxLine from "@/components/TextMaxLine";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
// import Link from "@mui/material/Link";

interface ServicesSectionProps {
  buttonText: string;
  pageDescription: string;
  pageTitle: string;
}

export default function ServicesSection({
  buttonText,
  pageDescription,
  pageTitle,
}: ServicesSectionProps) {
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
            { name: "Services", href: "/services" },
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
            <Typography variant="h2">{pageTitle}</Typography>

            <Typography sx={{ color: "text.secondary", mt: 2, mb: 5 }}>
              {pageDescription}
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              {buttonText}
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
              {/*{services.map((service) => (*/}
              {/*  <CategoryItem*/}
              {/*    key={service.service}*/}
              {/*    category={service.service}*/}
              {/*    slug={service.slug}*/}
              {/*  />*/}
              {/*))}*/}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// interface CategoryItemProps {
//   category: string;
//   slug: string;
// }
//
// function CategoryItem({ category, slug }: CategoryItemProps) {
//   return (
//     <Link href={`/services/${slug}`} underline="none">
//       <Paper
//         variant="outlined"
//         sx={{
//           p: 3,
//           borderRadius: 1.5,
//           cursor: "pointer",
//           bgcolor: "transparent",
//           transition: (theme) =>
//             theme.transitions.create("all", {
//               duration: theme.transitions.duration.enteringScreen,
//             }),
//           "&:hover": {
//             bgcolor: "background.paper",
//             boxShadow: (theme) => theme.customShadows.z24,
//             h6: {
//               color: "primary.main",
//             },
//           },
//         }}
//       >
//         <TextMaxLine variant="body1" line={2}>
//           {category}
//         </TextMaxLine>
//
//         <Typography variant="body2" sx={{ mt: 1, color: "text.disabled" }}>
//           advisory, strategy, valuation
//         </Typography>
//       </Paper>
//     </Link>
//   );
// }
