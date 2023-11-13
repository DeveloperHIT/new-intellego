"use client";
import { Grid } from "@mui/material";
import algoliasearch from "algoliasearch/lite";
import { Configure } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

import { singleIndex } from "instantsearch.js/es/lib/stateMappings";
// import CustomSearchBox from "@/components/Search/CustomSearchBox";
import Container from "@mui/material/Container";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import InfiniteHitsComponent from "@/algolia/components/CustomInfiniteHits";

// TODO: Only populate search results when use types in search box https://github.com/algolia/react-instantsearch/issues/1126
// TODO: Use MUI

// Search client initialization
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!,
);

// Main search component
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
        }}
      >
        <InstantSearchNext
          searchClient={searchClient}
          // TODO: Move this to env variable
          indexName="live_posts"
          routing={{ stateMapping: singleIndex("live_posts") }}
        >
          <Configure hitsPerPage={9} />
          <Grid container spacing={{}}>
            <Grid xs={4}>Left</Grid>
            <Grid xs={8} container spacing={2}>
              <InfiniteHitsComponent />
            </Grid>
          </Grid>
        </InstantSearchNext>
      </Container>
    </>
  );
}
