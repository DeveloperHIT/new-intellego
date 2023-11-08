"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Iconify from "@/components/Iconify";
import { useResponsive } from "@/hooks/useResponsive";
import InsightItemMobile from "@/sections/insights/insight/insightItemMobile";
import Box from "@mui/material/Box";
import Category from "@/sections/insights/category";

export default function InsightSidebar({ categories, insights, sx, ...other }) {
  const mdUp = useResponsive("up", "md");

  const renderCategories = categories && (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category, index) => (
        <Stack key={index} direction="row" alignItems="center">
          <Box
            sx={{
              mr: 2,
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
          <Category
            path={`/insights/categories/${category.slug.current}`}
            title={category.title}
            postCount={category.postCount}
          />
        </Stack>
      ))}
    </Stack>
  );

  const renderRecentInsights = insights && (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Insights</Typography>

      {insights.map((insight, index) => (
        <InsightItemMobile key={index} insight={insight} onSidebar />
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
