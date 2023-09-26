import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Image from "@/components/Image";
import { fDate } from "@/helpers/formatTime";
import RouterLink from "@/routes/routerLink";
import TextMaxLine from "@/components/TextMaxLine";

import InsightTimeBlock from "@/sections/insights/insightTimeBlock";

export default function InsightItem({ insight }) {
  return (
    <Stack spacing={2.5}>
      <Image
        src={insight.coverUrl}
        alt={insight.title}
        ratio="1/1"
        sx={{ borderRadius: 2 }}
      />

      <Stack spacing={1}>
        <InsightTimeBlock
          createdAt={fDate(insight.createdAt)}
          duration={insight.duration}
        />

        <Link component={RouterLink} href="/insights/insight" color="inherit">
          <TextMaxLine variant="h5" persistent>
            {insight.title}
          </TextMaxLine>
        </Link>
      </Stack>
    </Stack>
  );
}