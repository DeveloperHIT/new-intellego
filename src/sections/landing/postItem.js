import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { paths } from "@/routes/paths";
import { fDate } from "@/helpers/formatTime";
import RouterLink from "@/routes/routerLink";
import TextMaxLine from "@/components/TextMaxLine";

export default function PostItem({ post }) {
  return (
    <div>
      <Typography variant="caption" sx={{ color: "primary.main" }}>
        {fDate(post.createdAt)}
      </Typography>

      <Link
        component={RouterLink}
        href={paths.travel.post}
        sx={{ color: "common.white" }}
      >
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          {post.title}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body2" sx={{ color: "text.secondary" }}>
        {post.description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: "dashed", mt: 3 }} />
    </div>
  );
}
