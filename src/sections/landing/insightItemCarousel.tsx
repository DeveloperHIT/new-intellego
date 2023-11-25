import { Box, Fab, Link, Stack, Typography } from "@mui/material";

import { alpha, useTheme } from "@mui/material/styles";

import Image from "@/components/Image";
import Iconify from "@/components/Iconify";
import { fDate } from "@/helpers/formatTime";
import { urlFor } from "@/sanity/lib/urlFor";

interface Author {
  about: string;
  name: string;
  slug: any;
  image: any;
  designation: string;
  profiles: any;
  bio: any;
}

interface MainImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

interface Slug {
  _type: string;
  current: string;
}

interface Insight {
  author: Author;
  estimatedWordCount: number;
  _createdAt: string;
  _updatedAt: string;
  mainImage: MainImage;
  tags: any;
  series: any;
  category: any;
  metaDescription: string;
  numberOfCharacters: number;
  estimatedReadingTime: number;
  publishedAt: string;
  title: string;
  body: any;
  isSeries: boolean;
  slug: Slug;
  meta_description: string;
}

interface InsightItemCarouselProps {
  insight: Insight;
}

export default function InsightItemCarousel({
  insight,
}: InsightItemCarouselProps) {
  const { mainImage, meta_description, publishedAt, title } = insight || {};

  const imageAssetRef = mainImage?.asset?._ref;
  const imageAltText = mainImage?.alt || "";

  const theme = useTheme();

  return (
    <Stack sx={{ position: "relative" }}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: "center",
          position: "absolute",
          color: "common.white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mx: "auto", maxWidth: 400 }}>
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {fDate(publishedAt)}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            {title}
          </Typography>

          <Typography sx={{ opacity: 0.72, mb: 10 }}>
            {meta_description}
          </Typography>

          <Fab component={Link} href="/">
            <Iconify icon="carbon:chevron-right" />
          </Fab>
        </Box>
      </Stack>

      <Image
        src={imageAssetRef ? `${urlFor(imageAssetRef)}` : undefined}
        alt={imageAltText}
        overlay={`linear-gradient(to right top, ${alpha(
          theme.palette.grey[900],
          0,
        )} 0%, ${theme.palette.grey[900]} 75%)`}
        sx={{
          width: 1,
          height: { xs: 720, md: 900 },
        }}
      />
    </Stack>
  );
}
