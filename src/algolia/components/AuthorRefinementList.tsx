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

type AuthorRefinementListProps = UseRefinementListProps & {};

export default function AuthorRefinementList({
  attribute,
  ...props
}: AuthorRefinementListProps) {
  const { items, refine } = useRefinementList({ attribute, ...props });
  return (
    <FormControl {...props}>
      <FormLabel>Author</FormLabel>
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
