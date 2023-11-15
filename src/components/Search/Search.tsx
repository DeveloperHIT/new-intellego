"use client";
import algoliasearch from "algoliasearch/lite";
import { Configure, CurrentRefinements } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { singleIndex } from "instantsearch.js/es/lib/stateMappings";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import React from "react";
import { Grid } from "@mui/material";
import InfiniteHitsComponent from "@/algolia/components/CustomInfiniteHits";

import AuthorRefinementList from "@/algolia/components/AuthorRefinementList";
import CategoryRefinementList from "@/algolia/components/CategoryRefinementList";
import CustomSearchBox from "@/components/Search/CustomSearchBox";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!,
);

export default function Search() {
  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Search", href: "/search" },
          ]}
        />
      </Container>
      <Container
        sx={{
          mt: { xs: 4, md: 10 },
          mb: { xs: 4, md: 10 },
        }}
      >
        <InstantSearchNext
          searchClient={searchClient}
          indexName="live_posts"
          routing={{ stateMapping: singleIndex("live_posts") }}
        >
          <Configure hitsPerPage={8} />

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CustomSearchBox />
              <CurrentRefinements />
              <CategoryRefinementList attribute="categories.title" limit={8} />
              <AuthorRefinementList attribute="author.name" limit={8} />
            </Grid>
            <Grid item xs={8}>
              <InfiniteHitsComponent />
            </Grid>
          </Grid>
        </InstantSearchNext>
      </Container>
    </>
  );
}
