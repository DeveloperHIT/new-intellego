import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/Iconify";
import { formatPhoneNumber } from "@/helpers/formatPhoneNumber";

interface ContactInfoProps {
  street?: string;
  pmb?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  contactEmail?: string;
  contactPhoneNumber?: string;
}

export default function ContactInfo({
  street,
  pmb,
  city,
  state,
  zipCode,
  contactEmail,
  contactPhoneNumber,
}: ContactInfoProps) {
  const formattedPhoneNumber = formatPhoneNumber(contactPhoneNumber);

  return (
    <Stack spacing={3}>
      <Stack spacing={2} direction="row" alignItems="flex-start">
        <Iconify icon="carbon:location" width={28} />

        <Stack spacing={0.5}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography variant="h6">Address</Typography>

            <Link sx={{ lineHeight: 0 }}>
              <Iconify icon="carbon:launch" width={18} />
            </Link>
          </Stack>

          <Typography variant="body2">
            {street} {pmb}, {city}, {state} {zipCode}
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Phone</Typography>
          <Typography variant="body2">{formattedPhoneNumber}</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Email</Typography>
          <Link color="inherit" variant="body2" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
