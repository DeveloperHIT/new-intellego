import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";

import { bgBlur } from "@/theme/css";
import Logo from "@/components/Logo";
import { paths } from "@/routes/paths";
import RouterLink from "@/routes/routerLink";
import { useOffsetTop } from "@/hooks/useOffsetTop";

import { HEADER } from "@/layouts/configLayout";

import HeaderShadow from "@/layouts/common/headerShadow";
import SettingsButton from "@/layouts/common/settingsButton";

export default function HeaderSimple() {
  const theme = useTheme();

  const offsetTop = useOffsetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />

        <Stack direction="row" alignItems="center" spacing={1}>
          <SettingsButton />

          <Link
            href={paths.support}
            component={RouterLink}
            color="inherit"
            sx={{ typography: "subtitle2" }}
          >
            Need help?
          </Link>
        </Stack>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
