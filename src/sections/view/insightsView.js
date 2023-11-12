"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Newsletter from "../newsletter";
import InsightSidebar from "@/sections/insights/insight/insightSidebar";
import Insights from "@/sections/insights/insights";
import InsightSearchMobile from "@/sections/insights/insight/insightSearchMobile";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";

// TODO: Change this to use react-instantsearch? I thought algolia was just json.

export default function InsightsView({ categories, insights }) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Insights", href: "/insights" },
          ]}
        />
      </Container>
      <InsightSearchMobile />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Insights insights={insights} />
          </Grid>

          <Grid xs={12} md={4}>
            <InsightSidebar categories={categories} insights={insights} />
          </Grid>
        </Grid>
      </Container>

      <Newsletter />
    </>
  );
}
