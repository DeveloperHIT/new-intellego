import Stack from "@mui/material/Stack";
import Image from "@/components/Image";
import TextMaxLine from "@/components/TextMaxLine";

import InsightTimeBlock from "@/sections/insights/insight/insightTimeBlock";
import { Link, Typography } from "@mui/material";
import { ArticleHeaderData } from "@/types/Insight";
import { urlFor } from "@/sanity/lib/urlFor";

// import CustomLink from "@/routes/routerLink";

interface InsightItemProps {
  insight: ArticleHeaderData;
  path?: string;
}

export default function InsightItem({ insight, path }: InsightItemProps) {
  const { title, meta_description, publishedAt, mainImage } = insight || {};

  const imageAssetRef = mainImage?.asset?._ref;
  const imageAltText = mainImage?.alt || "";

  return (
    <Stack spacing={2.5}>
      <Image
        // @ts-ignore
        src={imageAssetRef ? `${urlFor(imageAssetRef)}` : undefined}
        alt={imageAltText}
        // @ts-ignore
        ratio="1/1"
        sx={{ borderRadius: 2 }}
      />

      <Stack spacing={1}>
        {/* @ts-ignore */}
        <InsightTimeBlock
          createdAt={publishedAt}
          // duration={estimatedReadTime}
        />

        <Link href={path || "#"} color={"inherit"}>
          {/* @ts-ignore */}
          <TextMaxLine variant="h5" persistent>
            {title}
          </TextMaxLine>
        </Link>

        <Typography variant="body1" color="text.secondary">
          {meta_description}
        </Typography>
      </Stack>
    </Stack>
  );
}
