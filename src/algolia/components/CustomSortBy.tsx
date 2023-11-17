import React from "react";
import { useSortBy, UseSortByProps } from "react-instantsearch";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function CustomSortBy(props: UseSortByProps) {
  const { currentRefinement, options, refine } = useSortBy(props);

  return (
    <FormControl size="small" hiddenLabel sx={{ width: 120 }}>
      <Select
        value={currentRefinement}
        onChange={(event) => refine(event.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    //   <Select value={sort} onChange={handleChangeSort}>
    //     {SORT_OPTIONS.map((option) => (
    //       <MenuItem key={option.value} value={option.value}>
    //         {option.label}
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  );
}
