"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import { useResponsive } from "@/hooks/useResponsive";
import { Grid } from "@mui/material";
import CustomSearchBox from "@/components/Search/CustomSearchBox";
import CategoryRefinementList from "@/algolia/components/CategoryRefinementList";

import AuthorRefinementList from "@/algolia/components/AuthorRefinementList";

export default function InsightsSidebar({}) {
  const mdUp = useResponsive("up", "md");

  return (
    <Grid container spacing={2}>
      {mdUp && <CustomSearchBox />}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
        }}
      >
        <AuthorRefinementList attribute="author.name" limit={8} />
        <CategoryRefinementList attribute="categories.title" limit={8} />
      </Stack>
    </Grid>
  );
}
