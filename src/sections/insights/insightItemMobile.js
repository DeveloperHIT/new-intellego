import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Image from "src/components/image";
import { fDate } from "@/helpers/formatTime";
import TextMaxLine from "@/components/TextMaxLine";

import InsightTimeBlock from "@/sections/insights/insightTimeBlock";

export default function InsightItemMobile({ insight, onSiderbar }) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: "flex-start", md: "unset" }}
      sx={{ width: 1 }}
    >
      <Image
        alt={insight.title}
        src={insight.coverUrl}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link color="inherit">
          <TextMaxLine variant={onSiderbar ? "subtitle2" : "h6"}>
            {insight.title}
          </TextMaxLine>
        </Link>

        <InsightTimeBlock
          createdAt={fDate(insight.createdAt)}
          duration={insight.duration}
        />
      </Stack>
    </Stack>
  );
}
