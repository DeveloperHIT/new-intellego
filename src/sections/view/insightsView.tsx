"use client";
import {
  Button,
  Collapse,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import algoliasearch from "algoliasearch/lite";
import { singleIndex } from "instantsearch.js/es/lib/stateMappings";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import React from "react";
import Iconify from "@/components/Iconify";
import { useBoolean } from "@/hooks/useBoolean";

import AuthorRefinementList from "@/algolia/components/AuthorRefinementList";
import CategoryRefinementList from "@/algolia/components/CategoryRefinementList";
import TagsRefinementList from "@/algolia/components/TagsRefinementList";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!,
);

interface InsightsViewProps {}

export default function InsightsView({}: InsightsViewProps) {
  const mobileOpen = useBoolean();

  return (
    // <>
    //   <Container>
    //     <CustomBreadcrumbs
    //       sx={{ my: 3 }}
    //       links={[
    //         { name: "Home", href: "/" },
    //         { name: "Insights", href: "/insights" },
    //       ]}
    //     />
    //   </Container>
    //   <InsightSearchMobile />
    //
    //   <Container
    //     sx={{
    //       mt: { xs: 4, md: 10 },
    //       mb: { xs: 4, md: 10 },
    //     }}
    //   >

    //       <Configure hitsPerPage={8} />
    //
    //       <Grid container spacing={2} xs={12}>
    //         <Grid xs={8}>
    //           <InfiniteHitsComponent />
    //         </Grid>
    //
    //         <Grid xs={4}>
    //           <Sidebar />
    //         </Grid>
    //       </Grid>
    //     </InstantSearchNext>
    //   </Container>
    //
    //   <Newsletter />
    // </>
    <Container>
      <InstantSearchNext
        searchClient={searchClient}
        indexName="live_posts"
        routing={{ stateMapping: singleIndex("live_posts") }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
          <Typography variant="h3">Insights</Typography>

          {/* Mobile filters */}
          <Button
            color="inherit"
            variant="contained"
            startIcon={
              <Iconify
                // @ts-ignore
                icon="carbon:filter"
                width={18}
              />
            }
            onClick={mobileOpen.onTrue}
            sx={{
              display: { md: "none" },
            }}
          >
            Filters
          </Button>
        </Stack>

        <Stack
          direction={{
            xs: "column-reverse",
            md: "row",
          }}
          sx={{ mb: { xs: 8, md: 10 } }}
        >
          <Stack
            spacing={5}
            divider={<Divider sx={{ borderStyle: "dashed" }} />}
          >
            {/* Filters */}
            <Stack
              spacing={3}
              alignItems="flex-start"
              sx={{ flexShrink: 0, width: { xs: 1, md: 280 } }}
            >
              {/* TODO: Fix font size*/}
              <Block title="Authors">
                <AuthorRefinementList attribute="author.name" sx={{ mt: 2 }} />
              </Block>
              <Block title="Categories">
                <CategoryRefinementList
                  attribute="categories.title"
                  sx={{ mt: 1 }}
                />
              </Block>
              <Block title="Tags">
                <TagsRefinementList attribute="tags.title" sx={{ mt: 2 }} />
              </Block>
              {/* TODO: Apply logic */}
              <Button
                fullWidth
                color="inherit"
                size="large"
                variant="contained"
                startIcon={
                  <Iconify
                    // @ts-ignore
                    icon="carbon:trash-can"
                  />
                }
              >
                Clear All
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </InstantSearchNext>
    </Container>
  );
}

interface BlockProps {
  title: string;
  children: React.ReactNode;
}

function Block({ children, title }: BlockProps) {
  const contentOpen = useBoolean(true);
  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: "pointer" }}
      >
        <Typography variant="h6">{title}</Typography>
        <Iconify
          // @ts-ignore
          icon={contentOpen.value ? "carbon:subtract" : "carbon:add"}
          sx={{ color: "text-secondary" }}
        />
      </Stack>
      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}
