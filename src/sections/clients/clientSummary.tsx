import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { _socials } from "@/_mock";
import Iconify from "@/components/Iconify";
import { ClientType } from "@/types";

interface ClientSummaryProps {
  client: ClientType;
}

export default function ClientSummary({ client }: ClientSummaryProps) {
  return (
    <Stack
      spacing={3}
      sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          summary
        </Typography>

        <Typography variant="h6">{client.title}</Typography>

        <Typography variant="body2">{client.description}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Typical Services
        </Typography>

        <Link variant="body2" color="inherit">
          Add typical services here
        </Link>

        {/* TODO - Add case studies */}
        {/*<Typography variant="overline" sx={{ color: "text.disabled", pt: 1 }}>*/}
        {/*  Case Studies*/}
        {/*</Typography>*/}

        {/*<Typography variant="body2" sx={{ pb: 1 }}>*/}
        {/*  Add case studies here*/}
        {/*</Typography>*/}
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">Share:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
