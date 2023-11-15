"use client";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Markdown from "@/components/Markdown";

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
            <Markdown content={service.main_header} />
            <br />
            <Markdown content={service.main_paragraph} /> <br />
            <Markdown content={service.why_intellego_header} /> <br />
            <Markdown content={service.why_intellego_paragraph} /> <br />
            <Markdown content={service.process_header} /> <br />
            <Markdown content={service.process_paragraph} /> <br />
            <Markdown content={service.benefits_header} /> <br />
            <Markdown content={service.benefits_paragraph} /> <br />
            <Markdown content={service.main_paragraph} /> <br />
            <Markdown content={service.main_paragraph} /> <br />
            <Markdown content={service.applications_header} /> <br />
            <Markdown content={service.applications_paragraph} /> <br />
            <Markdown content={service.closer} /> <br />
          </Grid>

          <Grid xs={12} md={4}>
            {/*<Sidebar*/}
            {/*  insightTags={insightTags}*/}
            {/*  author={insight.author}*/}
            {/*  categories={_categories}*/}
            {/*  recentPosts={{ list: insights }}*/}
            {/*/>*/}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
