"use client";
import { useSearchBox } from "react-instantsearch";
import type { UseSearchBoxProps } from "react-instantsearch";
import { TextField } from "@mui/material";
import React, { useState } from "react";

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

  return <TextField type="search" onChange={handleChange} value={inputValue} />;
}
