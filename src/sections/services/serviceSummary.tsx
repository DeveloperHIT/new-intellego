import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { _socials } from "@/_mock";
import Iconify from "@/components/Iconify";
import { ServiceType } from "@/types";
import React from "react";
import { EngagementType } from "@/types/Engagement";

interface ServiceSummaryProps {
  serviceData: ServiceType;
}

export default function ServiceSummary({ serviceData }: ServiceSummaryProps) {
  const { title, summary, typicalEngagements } = serviceData;

  return (
    <Stack
      spacing={3}
      sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          summary
        </Typography>

        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{summary}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Typical Engagements
        </Typography>

        {typicalEngagements?.map((engagement: EngagementType, index) => (
          <Typography key={index} variant="body2">
            {engagement.title}
          </Typography>
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
