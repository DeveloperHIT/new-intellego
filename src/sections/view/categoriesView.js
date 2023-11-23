"use client";

import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Divider from "@mui/material/Divider";
import InsightSearchMobile from "@/sections/insights/insight/insightSearchMobile";
import Grid from "@mui/material/Unstable_Grid2";
import Insights from "@/sections/insights/insights";
import InsightSidebar from "@/sections/insights/insightsSidebar";

export default function CategoriesView({
  allInsights,
  categories,
  filteredInsights,
  title,
}) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Insights", href: "/insights" },
            { name: title },
          ]}
        />
      </Container>
      <Divider sx={{ mb: { xs: 6, md: 10 } }} />
      <InsightSearchMobile />
      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Insights insights={filteredInsights} />
          </Grid>
          <Grid xs={12} md={4}>
            <InsightSidebar categories={categories} insights={allInsights} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
