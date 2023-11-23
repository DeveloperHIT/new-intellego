import { useResponsive } from "@/hooks/useResponsive";
import {
  Box,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Iconify";
import NextLink from "next/link";
import Chip from "@mui/material/Chip";

interface Category {
  slug: string;
  title: string;
}

interface Slug {
  current: string;
}

interface Tag {
  title: string;
  slug: Slug;
}

interface InsightSidebarProps {
  categories: Category[];
  tags?: Tag[];
}

export default function InsightSidebar({
  categories,
  tags,
}: InsightSidebarProps) {
  const mdUp = useResponsive("up", "md");

  const renderCategories = categories && (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category.title} direction="row" alignItems="center">
          <Box
            sx={{
              mr: 2,
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
          <Link
            component={NextLink}
            variant="body2"
            href={category.slug}
            color="inherit"
          >
            {category.title}
          </Link>
        </Stack>
      ))}
    </Stack>
  );

  const renderTags = tags && (
    <Stack spacing={3}>
      <Typography variant="h5">Popular Tags</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {tags.map((tag) => (
          // TODO: Handle click
          <Chip
            key={tag.title}
            label={tag.title}
            variant="soft"
            size="small"
            onClick={() => {}}
          />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      {mdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  // TODO: Fix this
                  // @ts-ignore
                  icon="carbon:search"
                  width={24}
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack spacing={5} sx={{ pt: { md: 5 }, pb: { xs: 8, md: 0 } }}>
        {renderCategories}
        {renderTags}
      </Stack>
    </>
  );
}
