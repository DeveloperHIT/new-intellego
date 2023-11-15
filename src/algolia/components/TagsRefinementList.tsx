"use client";
import type { UseRefinementListProps } from "react-instantsearch";
import { useRefinementList } from "react-instantsearch";

import { Chip, Stack, SxProps, Theme } from "@mui/material";

type TagsRefinementListProps = UseRefinementListProps & {
  sx?: SxProps<Theme>;
};

export default function TagsRefinementList({
  attribute,
  limit,
  sx,
  ...props
}: TagsRefinementListProps) {
  // TODO: Add state to manage selected tags
  const { items, refine } = useRefinementList({ attribute, limit, ...props });

  return (
    <Stack sx={sx} {...props} direction="row" flexWrap="wrap" spacing={1}>
      {items.map((item) => (
        <Chip
          key={item.value}
          size="small"
          label={item.label}
          variant="outlined"
          onClick={() => refine(item.value)}
        />
      ))}
    </Stack>
  );
}
