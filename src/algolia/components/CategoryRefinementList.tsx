"use client";
import type { UseRefinementListProps } from "react-instantsearch";
import { useRefinementList } from "react-instantsearch";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

type CategoryRefinementListProps = UseRefinementListProps & {};

export default function CategoryRefinementList({
  attribute,
  limit,
  ...props
}: CategoryRefinementListProps) {
  const { items, refine } = useRefinementList({ attribute, limit, ...props });
  return (
    <FormControl {...props}>
      <FormLabel>Category</FormLabel>
      <FormGroup>
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              control={
                <Checkbox
                  checked={item.isRefined}
                  value={item.value}
                  onChange={() => refine(item.value)}
                />
              }
              label={item.label}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}
