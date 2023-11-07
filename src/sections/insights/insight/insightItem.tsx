import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Image from "@/components/Image";
import RouterLink from "@/routes/routerLink";
import TextMaxLine from "@/components/TextMaxLine";

import InsightTimeBlock from "@/sections/insights/insight/insightTimeBlock";
import { Typography } from "@mui/material";
import { ArticleHeaderData } from "@/types/Insight";
import { urlFor } from "@/sanity/lib/urlFor";

interface InsightItemProps {
  insight: ArticleHeaderData;
  path?: string;
}

export default function InsightItem({ insight, path }: InsightItemProps) {
  const {
    title,
    meta_description,
    publishedAt,
    mainImage: {
      alt,
      asset: { _ref },
    },
  } = insight;

  console.log(publishedAt);

  return (
    <Stack spacing={2.5}>
      <Image
        // @ts-ignore
        src={`${urlFor(_ref)}`}
        alt={alt}
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

        {/* TODO: How to get actual slug? */}
        {/* @ts-ignore */}
        <Link component={RouterLink} href={path} color="inherit">
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
