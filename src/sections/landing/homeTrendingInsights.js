import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/Iconify";
import RouterLink from "@/routes/routerLink";

import HomeTrendingInsight from "@/sections/landing/homeTrendingInsight";

export default function HomeTrendingInsights() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      {/*<Typography*/}
      {/*  variant="h3"*/}
      {/*  sx={{*/}
      {/*    mb: 8,*/}
      {/*    textAlign: { xs: "center", md: "unset" },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Trending Insights*/}
      {/*</Typography>*/}

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Insight
            title="Operationalizing a Friendly PC Model"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            path="#"
            sx={{ height: 1 }}
          />
        </Grid>

        <Grid xs={12} md={8}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
          >
            <HomeTrendingInsight
              title="Determining Fair Market Value in Healthcare: Best Practices"
              category="Valuation"
              // imageUrl="/assets/images/blog/blog1.jpg"
            />
            <HomeTrendingInsight
              title="The Intersection of Stark Law and Fair Market Valuation"
              category="Valuation"
              // imageUrl="/blog2.jpg"
            />
            <HomeTrendingInsight
              title="From Due Diligence to Compliance: A Holistic Approach to Healthcare Valuation"
              category="Valuation"
              // imageUrl="/blog2.jpg"
            />
            <HomeTrendingInsight
              title="Practical Tips for Healthcare Organizations to Stay Ahead of Regulatory Changes"
              category="Compliance"
              // imageUrl="/blog2.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

function Insight({ title, description, path, sx, ...other }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: "center",
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>

      <Button
        component={RouterLink}
        href={path}
        color="inherit"
        endIcon={<Iconify icon="carbon:chevron-right" />}
        sx={{ mt: 5 }}
      >
        Read More
      </Button>
    </Stack>
  );
}
