import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/Iconify";

export default function MarketingContactInfo() {
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
            382 NE 191st St PMB 59304, Miami, FL 33179-3899
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Phone</Typography>
          <Typography variant="body2">(386) 281-3210</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Email</Typography>
          <Link
            color="inherit"
            variant="body2"
            href="mailto:info@myintellego.com"
          >
            info@myintellego.com
          </Link>
        </Stack>
      </Stack>

      {/*<Stack spacing={2} alignItems="flex-start" direction="row">*/}
      {/*  <Iconify width={28} icon="carbon:time" />*/}
      {/*  <Stack spacing={0.5}>*/}
      {/*    <Typography variant="h6">Working Hours</Typography>*/}
      {/*    <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>*/}
      {/*  </Stack>*/}
      {/*</Stack>*/}
    </Stack>
  );
}
