"use client";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Markdown from "@/components/Markdown";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import { _tags, _categories, __insights } from "@/_mock";

import PostTags from "@/sections/insights/insightTags";
import Newsletter from "../newsletter";
import PostAuthor from "@/sections/insights/insightAuthor";
import InsightSidebar from "@/sections/insights/insightSidebar";
import LatestInsights from "@/sections/insights/latestInsights";

export default function TravelPostView() {
  const { title, description, author, tags, content } = __insights[0];

  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/" },
            { name: title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={4}>
            <InsightSidebar
              popularTags={_tags}
              author={author}
              categories={_categories}
              recentPosts={{ list: __insights }}
            />
          </Grid>
        </Grid>
      </Container>

      <LatestInsights insights={__insights} />

      <Newsletter />
    </>
  );
}
