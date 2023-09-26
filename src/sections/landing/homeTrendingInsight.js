"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import TextMaxLine from "@/components/TextMaxLine";
import Iconify from "@/components/Iconify";
import { Box } from "@mui/material";
import { useState } from "react";
import { bgGradient } from "@/theme/css";

export default function HomeTrendingInsight({
  category,
  imageUrl,
  title,
  sx,
  ...other
}) {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const bgStyles = {
    ...bgGradient({
      color: alpha(theme.palette.common.black, 0.5),
      imgUrl: "/assets/images/insights/blog1.jpg",
    }),
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: hovered ? "none" : "blur(3px)", // Apply the blur directly to the backgroundImage
    transform: hovered ? "scale(1.1)" : "scale(1)",
    transition: "filter 0.3s, transform 0.3s", // Optional, for a smooth transition on hover
    zIndex: -1,
  };

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        overflow: "hidden",
        position: "relative",
        p: 2,
        borderRadius: 2,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      {/* Separate div for background image */}
      <div style={bgStyles}></div>

      <Stack spacing={0.5} flexGrow={1}>
        <TextMaxLine
          variant="body2"
          line={1}
          sx={{ fontWeight: "fontWeightMedium", color: "common.white" }}
        >
          {title}
        </TextMaxLine>

        <TextMaxLine
          variant="caption"
          line={1}
          sx={{ color: theme.palette.grey[300] }}
        >
          {category}
        </TextMaxLine>

        <Stack flexGrow={1} alignItems="flex-end" justifyContent="flex-end">
          <Button
            // component={RouterLink}
            // href={path}
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ mt: 5, color: theme.palette.grey[300] }}
          >
            Read More
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
