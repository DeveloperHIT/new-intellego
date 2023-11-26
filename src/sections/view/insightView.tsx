"use client";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import InsightAuthor from "@/sections/insights/insight/insightAuthor";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import InsightSocialsShare from "@/sections/insights/insight/insightSocialsShare";
import InsightSidebar from "@/sections/insights/insight/insightSidebar";
import InsightTags from "@/sections/insights/insight/insightTags";
import { PortableTextImage } from "@/components/PortableText/PortableTextImage";
import { InsightCategoryType } from "@/types/InsightCategory";
import { InsightType } from "@/types/Insight";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

// https://www.npmjs.com/package/@portabletext/react
// TODO: Add singletons

const components: PortableTextComponents = {
  block: {
    blockquote: ({ children }) => (
      <Typography
        variant="body1"
        component="blockquote"
        sx={{ mb: 3, color: "aqua" }}
      >
        {children}
      </Typography>
    ),
    h1: ({ children }) => (
      <Typography variant="h1" sx={{ mb: 3, color: "green" }}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" sx={{ mb: 3, color: "orange" }}>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" sx={{ mb: 3, color: "purple" }}>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" sx={{ mb: 3, color: "dodgerblue" }}>
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" sx={{ mb: 3, color: "hotpink" }}>
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" sx={{ mb: 3, color: "darkgray" }}>
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <List sx={{ color: "darkcyan" }}>{children}</List>
    ),
    number: ({ children }) => (
      <List sx={{ color: "darkorange" }}>{children}</List>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem sx={{ color: "blanchedalmond" }}>{children}</ListItem>
    ),
    number: ({ children }) => (
      <ListItem sx={{ color: "navy" }}>{children}</ListItem>
    ),
  },
  marks: {
    code: ({ children }) => (
      <Typography
        component="code"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 1,
          p: 0.5,
        }}
      >
        {children}
      </Typography>
    ),
    em: ({ children }) => (
      <Typography sx={{ fontWeight: 600, color: "red" }}>{children}</Typography>
    ),
    // TODO: Make highlight work in sanity studio
    highlight: ({ children }) => (
      <Typography sx={{ fontWeight: 600, color: "yellow" }}>
        {children}
      </Typography>
    ),
    link: ({ children }) => (
      <Typography
        component="a"
        href={"/"}
        sx={{ color: "cyan" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Typography>
    ),
    strong: ({ children }) => (
      <Typography fontWeight={800} sx={{ color: "blue" }}>
        {children}
      </Typography>
    ),
    underline: ({ children }) => (
      <Typography sx={{ textDecoration: "underline" }}>{children}</Typography>
    ),
  },
  types: {
    image: PortableTextImage,
  },
};

interface InsightViewProps {
  categories: InsightCategoryType[];
  insight: InsightType;
}

export default function InsightView({ categories, insight }: InsightViewProps) {
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
            { name: "Insights", href: "/filteredInsights" },
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

            {/* TODO: Add image block into sanity studio for portable text */}
            <PortableText value={body} components={components} />

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
