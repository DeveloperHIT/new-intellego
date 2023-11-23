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

type LocationRefinementListProps = UseRefinementListProps & {
  other?: any;
  sx?: SxProps<Theme>;
};

export default function LocationRefinementList({
  attribute,
  sx,
  ...props
}: LocationRefinementListProps) {
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
