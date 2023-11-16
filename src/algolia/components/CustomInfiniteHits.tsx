import { useInfiniteHits } from "react-instantsearch";
import { HitComponent } from "@/algolia/components/HitComponent";
import { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";
import { Box, Stack } from "@mui/material";
import React from "react";

interface InfiniteHitsComponentProps {
  props?: any;
  viewMode?: "grid" | "list";
}

type PostHit = Hit<Post>;

export default function InfiniteHitsComponent({
  viewMode,
  props,
}: InfiniteHitsComponentProps) {
  const { hits } = useInfiniteHits<PostHit>(props);

  return (
    <Box>
      {viewMode === "grid" ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
        >
          {hits.map((hit) => (
            <HitComponent hit={hit} key={hit.objectID} viewMode="grid" />
          ))}
        </Box>
      ) : (
        <Stack spacing={4}>
          {hits.map((hit) => (
            <HitComponent hit={hit} key={hit.objectID} viewMode="list" />
          ))}
        </Stack>
      )}
    </Box>
  );
}
