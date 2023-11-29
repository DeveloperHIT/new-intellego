import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { _socials } from "@/_mock";
import Iconify from "@/components/Iconify";
import { ServiceLineType } from "@/types";

interface ServiceLineSummaryProps {
  serviceLineData: ServiceLineType;
}

export default function ServiceLineSummary({
  serviceLineData,
}: ServiceLineSummaryProps) {
  return (
    <Stack
      spacing={3}
      sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          summary
        </Typography>

        <Typography variant="h6">{serviceLineData.title}</Typography>

        <Typography variant="body2">{serviceLineData.description}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Typical Services
        </Typography>

        {serviceLineData.services?.map((service) => (
          <Link
            key={service.title}
            variant="body2"
            color="inherit"
            href={`/services/${serviceLineData.slug.current}/${service.slug.current}`}
          >
            <Typography variant="body2">{service.title}</Typography>{" "}
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
