import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Tag } from "@/types/Insights/Tags/Tag";

interface InsightTagsProps {
  tags: Tag[];
}

export default function InsightTags({ tags }: InsightTagsProps) {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 5 }}>
      <Typography variant="subtitle2" sx={{ mr: 1 }}>
        Tags:
      </Typography>

      {/* TODO: Handle click */}

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {tags.map((each: any, i) => (
          <Chip
            key={i}
            size="small"
            variant="soft"
            label={each.title}
            onClick={() => {}}
          />
        ))}
      </Stack>
    </Stack>
  );
}
