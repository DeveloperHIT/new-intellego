"use client";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import InsightAuthor from "@/sections/insights/insight/insightAuthor";
import InsightSidebar from "@/sections/insights/insight/insightSidebar";
import LatestInsights from "@/sections/insights/latestInsights";
import { PortableText } from "@portabletext/react";
import InsightTags from "@/sections/insights/insight/insightTags";
import InsightSocialsShare from "@/sections/insights/insight/insightSocialsShare";

export default function InsightView({ categories, insight, insights }) {
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
              {insight.excerpt}
            </Typography>

            {/* TODO: Format blog text */}
            <PortableText value={insight.content} />

            <InsightTags tags={insight.insightTags} />

            <InsightSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <InsightAuthor
              name={insight.authorName}
              role={insight.authorRole}
            />
          </Grid>

          <Grid xs={12} md={4}>
            <InsightSidebar
              author={insight.author}
              categories={categories}
              recentPosts={{ list: insights }}
            />
          </Grid>
        </Grid>
      </Container>

      <LatestInsights insights={insights} />
    </>
  );
}
