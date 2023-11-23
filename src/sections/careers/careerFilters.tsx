import Stack from "@mui/material/Stack";
import LocationRefinementList from "@/algolia/components/LocationRefinementList";
import React from "react";
import { useBoolean } from "@/hooks/useBoolean";
import { Collapse, Typography } from "@mui/material";
import Iconify from "@/components/Iconify";
import Button from "@mui/material/Button";

export default function CareerFilters() {
  return (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <Block title="Location">
        {/* TODO: Add to data to sanity to populate */}
        <LocationRefinementList attribute="career.location" sx={{ mt: 2 }} />
      </Block>
      {/* TODO: Add more blocks */}
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

// TODO: Move this
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
