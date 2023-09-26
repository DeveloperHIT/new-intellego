"use client";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Markdown from "@/components/Markdown";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import { _categories } from "@/_mock";

import InsightTags from "@/sections/insights/insight/insightTags";
import Newsletter from "../newsletter";
import InsightAuthor from "@/sections/insights/insight/insightAuthor";
import InsightSidebar from "@/sections/insights/insight/insightSidebar";
import LatestInsights from "@/sections/insights/latestInsights";

// TODO: Move categories to supabase
// TODO: Create storage on supabase for insights images

export default function InsightView({ insight, insights, insightTags }) {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Insights", href: "/insights" },
            { name: insight.title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {insight.description}
            </Typography>

            <Markdown content={insight.content} firstLetter />

            <InsightTags tags={insight.tags} />

            <Divider sx={{ mt: 8 }} />

            <InsightAuthor author={insight.author} />
          </Grid>

          <Grid xs={12} md={4}>
            <InsightSidebar
              insightTags={insightTags}
              author={insight.author}
              categories={_categories}
              recentPosts={{ list: insights }}
            />
          </Grid>
        </Grid>
      </Container>

      <LatestInsights insights={insights} />

      <Newsletter />
    </>
  );
}
