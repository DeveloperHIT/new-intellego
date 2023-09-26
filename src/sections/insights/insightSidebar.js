import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { _socials } from "@/_mock";
import Iconify from "@/components/Iconify";
import { useResponsive } from "@/hooks/useResponsive";

import InsightItemMobile from "@/sections/insights/insightItemMobile";

export default function InsightSidebar({
  author,
  categories,
  trendingTags,
  recentInsights,
  advertisement,
  sx,
  ...other
}) {
  const mdUp = useResponsive("up", "md");

  const renderAuthor = author && (
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      <Avatar src={author.avatarUrl} sx={{ width: 64, height: 64 }} />

      <Stack>
        <Typography variant="h5">{author.name}</Typography>

        <Typography
          variant="body2"
          sx={{ mt: 0.5, mb: 2, color: "text.secondary" }}
        >
          {author.role}
        </Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderCategories = categories && (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category.label} direction="row" alignItems="center">
          <Box
            sx={{
              mr: 2,
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />

          <Link variant="body2" href={category.path} color="inherit">
            {category.label}
          </Link>
        </Stack>
      ))}
    </Stack>
  );

  const renderRecentInsights = recentInsights && (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Insights</Typography>

      {recentInsights.list.map((insight) => (
        <InsightItemMobile key={insight.id} insight={insight} onSiderbar />
      ))}
    </Stack>
  );

  const renderTrendingTags = trendingTags && (
    <Stack spacing={3}>
      <Typography variant="h5">Trending Tags</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {trendingTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
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
      {mdUp && renderAuthor}

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

        {renderTrendingTags}
      </Stack>
    </>
  );
}
