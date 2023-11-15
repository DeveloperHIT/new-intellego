"use client";
import { useSearchBox } from "react-instantsearch";
import type { UseSearchBoxProps } from "react-instantsearch";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Iconify from "@/components/Iconify";

// TODO: Move this over to the blog so that it changes the hits based on search and categories and tags

export default function CustomSearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);

  const [inputValue, setInputValue] = useState(query);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <TextField
      type="search"
      onChange={handleChange}
      value={inputValue}
      hiddenLabel
      fullWidth
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify
              // @ts-ignore
              icon="carbon:search"
              width={24}
              sx={{ color: "text.disabled" }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}
