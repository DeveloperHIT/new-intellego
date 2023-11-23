import { Button, Stack, Typography } from "@mui/material";
import Iconify from "@/components/Iconify";
import { _socials } from "@/_mock";
import { alpha } from "@mui/material/styles";

interface InsightSocialsShareProps {
  // socials?: any;
}

export default function InsightSocialsShare({}: InsightSocialsShareProps) {
  return (
    <Stack direction="row" sx={{ mt: 5 }}>
      <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
        Share:
      </Typography>
      <Stack direction="row" alignItems="center" flexWrap="wrap">
        {/* TODO: Move to sanity */}
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={<Iconify icon={social.icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              color: social.color,
              borderColor: social.color,
              "&:hover": {
                borderColor: social.color,
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            {social.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
