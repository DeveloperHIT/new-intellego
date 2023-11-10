import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import Image from "@/components/Image";
import Iconify from "@/components/Iconify";
import { fDate } from "@/helpers/formatTime";
import RouterLink from "@/routes/routerLink";
import { urlFor } from "@/sanity/lib/urlFor";

export default function InsightItemCarousel({ insight }) {
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

          <Fab component={RouterLink} href="/">
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
