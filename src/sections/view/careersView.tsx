"use client";
import Container from "@mui/material/Container";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { singleIndex } from "instantsearch.js/es/lib/stateMappings";
import Iconify from "@/components/Iconify";
import React, { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import {
  Box,
  Collapse,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useBoolean } from "@/hooks/useBoolean";
import algoliasearch from "algoliasearch/lite";
import Divider from "@mui/material/Divider";
import CareerFilters from "@/sections/careers/careerFilters";
import CustomSortBy from "@/algolia/components/CustomSortBy";
import InfiniteHitsComponent from "@/algolia/components/CustomInfiniteHits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!,
);

export default function CareersView() {
  const mobileOpen = useBoolean();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // TODO: Fix this
  // @ts-ignore
  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  }, []);

  const VIEW_OPTIONS = [
    {
      value: "list",
      icon: (
        <Iconify
          // @ts-ignore
          icon="carbon:list-boxes"
        />
      ),
    },
    {
      value: "grid",
      icon: (
        <Iconify
          // @ts-ignore
          icon="carbon:grid"
        />
      ),
    },
  ];

  // TODO: Add careers indices
  const SORT_OPTIONS = [
    { value: "live_posts_latest", label: "Latest" },
    { value: "live_posts_oldest", label: "Oldest" },
    { value: "popular", label: "Popular" },
  ];

  return (
    <Container>
      <InstantSearchNext
        searchClient={searchClient}
        // TODO: Add careers index
        indexName="careers"
        routing={{ stateMapping: singleIndex("careers") }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
          <Typography variant="h3">Careers</Typography>
          <Button
            color="inherit"
            variant="contained"
            // TODO: Fix this
            // @ts-ignore
            startIcon={<Iconify icon="carbon:filter" width={18} />}
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
            <CareerFilters />
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 5 }}
            >
              <ToggleButtonGroup
                exclusive
                size="small"
                value={viewMode}
                onChange={handleChangeViewMode}
                sx={{ borderColor: "transparent" }}
              >
                {VIEW_OPTIONS.map((option) => (
                  <ToggleButton key={option.value} value={option.value}>
                    {option.icon}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <CustomSortBy
                items={SORT_OPTIONS.map((option) => ({
                  label: option.label,
                  value: option.value,
                }))}
              />
            </Stack>

            <InfiniteHitsComponent viewMode={viewMode} />
          </Box>
        </Stack>
      </InstantSearchNext>
    </Container>
  );
}
