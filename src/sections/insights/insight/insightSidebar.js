"use client";
import React, { useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Iconify from "@/components/Iconify";
import { useResponsive } from "@/hooks/useResponsive";
import InsightItemMobile from "@/sections/insights/insight/insightItemMobile";

export default function InsightSidebar({ categories, insights, sx, ...other }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInsights, setFilteredInsights] = useState(insights);

  const supabase = createPagesBrowserClient();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    await searchInsights(searchQuery);
  };

  const searchInsights = async (query) => {
    if (!query) {
      // If the search query is empty, you might want to reset to the default state or handle it differently
      setFilteredInsights(insights);
      return;
    }

    const { data, error } = await supabase
      .from("insights")
      .select("*")
      .textSearch("description", `%${query}%`, {
        type: "websearch",
        config: "english ",
      });

    if (error) {
      console.error("Error searching insights:", error);
      return;
    }

    // Update your insights state with the search results
    // This assumes you have a way to update the insights state in your component
    setFilteredInsights(data);
  };

  const mdUp = useResponsive("up", "md");

  const renderCategories = categories && (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category.value} direction="row" alignItems="center">
          <Box
            sx={{
              mr: 2,
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />

          {/*<Link variant="body2" href="/" color="inherit">*/}
          {/*  {category.key}*/}
          {/*</Link>*/}
        </Stack>
      ))}
    </Stack>
  );

  const renderRecentInsights = filteredInsights && (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Insights</Typography>

      {filteredInsights.map((insight) => (
        <InsightItemMobile key={insight.id} insight={insight} onSidebar />
      ))}
    </Stack>
  );

  return (
    <>
      {/*{mdUp && renderAuthor}*/}

      {mdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleSearch();
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="carbon:search"
                  width={24}
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {renderCategories}

        {renderRecentInsights}
      </Stack>
    </>
  );
}
