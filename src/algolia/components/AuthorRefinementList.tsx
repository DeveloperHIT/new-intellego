"use client";
import type { UseRefinementListProps } from "react-instantsearch";
import { useRefinementList } from "react-instantsearch";

import {
  Checkbox,
  FormControlLabel,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";

type AuthorRefinementListProps = UseRefinementListProps & {
  other?: any;
  sx?: SxProps<Theme>;
};

export default function AuthorRefinementList({
  attribute,
  sx,
  ...props
}: AuthorRefinementListProps) {
  const { items, refine } = useRefinementList({ attribute, ...props });
  return (
    <Stack sx={sx} {...props}>
      {items.map((item) => (
        <FormControlLabel
          key={item.value}
          control={
            <Checkbox
              size="small"
              checked={item.isRefined}
              value={item.value}
              onChange={() => refine(item.value)}
            />
          }
          label={item.label}
        />
      ))}
    </Stack>
  );
}
