"use client";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import InsightAuthor from "@/sections/insights/insight/insightAuthor";
import { PortableText } from "@portabletext/react";
import InsightSocialsShare from "@/sections/insights/insight/insightSocialsShare";
import InsightSidebar from "@/sections/insights/insight/insightSidebar";
import InsightTags from "@/sections/insights/insight/insightTags";

export default function InsightView({ categories, insight }) {
  const {
    author: { designation, name },
    body,
    tags,
    title,
  } = insight;

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

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {title}
            </Typography>

            {/*TODO: Format blog text*/}
            <PortableText value={body} />

            <InsightTags tags={tags} />

            <InsightSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <InsightAuthor name={name} role={designation} />
          </Grid>

          <Grid xs={12} md={4}>
            <InsightSidebar categories={categories} tags={tags} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
