import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Image from "@/components/Image";
import { fDate } from "@/helpers/formatTime";
import TextMaxLine from "@/components/TextMaxLine";

import InsightTimeBlock from "@/sections/insights/insight/insightTimeBlock";
import { urlFor } from "@/sanity/lib/urlFor";

export default function InsightItemMobile({ insight, onSidebar }) {
  const { mainImage, publishedAt, title } = insight || {};

  const imageAssetRef = mainImage?.asset?._ref;
  const imageAltText = mainImage?.alt || "";

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: "flex-start", md: "unset" }}
      sx={{ width: 1 }}
    >
      <Image
        alt={imageAltText}
        src={imageAssetRef ? `${urlFor(imageAssetRef)}` : undefined}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSidebar ? 0.5 : 1}>
        <Link color="inherit">
          <TextMaxLine variant={onSidebar ? "subtitle2" : "h6"}>
            {title}
          </TextMaxLine>
        </Link>

        <InsightTimeBlock
          createdAt={fDate(publishedAt)}
          // duration={insight.duration}
        />
      </Stack>
    </Stack>
  );
}
