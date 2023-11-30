import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { _socials } from "@/_mock";
import Iconify from "@/components/Iconify";
import { SectorType } from "@/types/Sector";
import { PortableText } from "@portabletext/react";

interface SectorSummaryProps {
  sector: SectorType;
}

// TODO: Turn this into a reusable component
export default function SectorSummary({ sector }: SectorSummaryProps) {
  return (
    <Stack
      spacing={3}
      sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          summary
        </Typography>

        <Typography variant="h6">{sector.title}</Typography>

        <PortableText value={sector.description} />
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          {sector.title} Services
        </Typography>

        {sector.serviceLines.map((serviceLine) => (
          <Link
            key={serviceLine.title}
            variant="body2"
            color="inherit"
            href={`/services/${sector.slug}/${serviceLine.slug.current}`}
          >
            <Typography variant="body2">{serviceLine.title}</Typography>{" "}
          </Link>
        ))}
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
