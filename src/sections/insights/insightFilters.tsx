import { Button, Collapse, Stack, Typography } from "@mui/material";
import AuthorRefinementList from "@/algolia/components/AuthorRefinementList";
import CategoryRefinementList from "@/algolia/components/CategoryRefinementList";
import TagsRefinementList from "@/algolia/components/TagsRefinementList";
import Iconify from "@/components/Iconify";
import React from "react";
import { useBoolean } from "@/hooks/useBoolean";

interface InsightFiltersProps {}

export default function InsightFilters({}: InsightFiltersProps) {
  return (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{ flexShrink: 0, width: { xs: 1, md: 280 } }}
    >
      {/* TODO: Fix font size*/}
      <Block title="Authors">
        <AuthorRefinementList attribute="author.name" sx={{ mt: 2 }} />
      </Block>
      <Block title="Categories">
        <CategoryRefinementList attribute="categories.title" sx={{ mt: 1 }} />
      </Block>
      <Block title="Tags">
        <TagsRefinementList attribute="tags.title" sx={{ mt: 2 }} />
      </Block>
      {/* TODO: Apply logic */}
      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={
          <Iconify
            // @ts-ignore
            icon="carbon:trash-can"
          />
        }
      >
        Clear All
      </Button>
    </Stack>
  );
}

interface BlockProps {
  title: string;
  children: React.ReactNode;
}

function Block({ children, title }: BlockProps) {
  const contentOpen = useBoolean(true);
  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: "pointer" }}
      >
        <Typography variant="h6">{title}</Typography>
        <Iconify
          // @ts-ignore
          icon={contentOpen.value ? "carbon:subtract" : "carbon:add"}
          sx={{ color: "text-secondary" }}
        />
      </Stack>
      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}
