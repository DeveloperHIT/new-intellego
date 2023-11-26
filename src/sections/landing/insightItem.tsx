import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { fDate } from "@/helpers/formatTime";

import TextMaxLine from "@/components/TextMaxLine";
import { Insight } from "@/types/Insights/Insight";

interface InsightItemProps {
  insight: Insight;
}

export default function InsightItem({ insight }: InsightItemProps) {
  const { meta_description, publishedAt, title } = insight;
  return (
    <div>
      <Typography variant="caption" sx={{ color: "primary.main" }}>
        {fDate(publishedAt)}
      </Typography>

      <Link
        // component={RouterLink}
        href="/"
        sx={{ color: "common.white" }}
      >
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          {title}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body2" sx={{ color: "text.secondary" }}>
        {meta_description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: "dashed", mt: 3 }} />
    </div>
  );
}
