"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

export default function ServiceView({ service }) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.service },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            {/*<Typography variant="h5" sx={{ mb: 5 }}>*/}
            {/*  {insight.description}*/}
            {/*</Typography>*/}

            {/*<Markdown content={insight.content} firstLetter />*/}

            {/*<InsightTags tags={insight.tags} />*/}

            {/*<Divider sx={{ mt: 8 }} />*/}

            {/*<InsightAuthor author={insight.author} />*/}
          </Grid>

          <Grid xs={12} md={4}>
            {/*<InsightSidebar*/}
            {/*  insightTags={insightTags}*/}
            {/*  author={insight.author}*/}
            {/*  categories={_categories}*/}
            {/*  recentPosts={{ list: insights }}*/}
            {/*/>*/}
          </Grid>
        </Grid>
      </Container>

      {/*<LatestInsights insights={insights} />*/}
    </>
  );
}
