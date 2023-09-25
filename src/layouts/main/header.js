import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { bgBlur } from "@/theme/css";
import Logo from "@/components/Logo";
import { useResponsive } from "@/hooks/useResponsive";
import { useOffsetTop } from "@/hooks/useOffsetTop";
import { HEADER } from "../configLayout";
import Searchbar from "../common/searchbar";
import HeaderShadow from "../common/headerShadow";

import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import { navConfig } from "./configNavigation";

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffsetTop();

  const mdUp = useResponsive("up", "md");

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: "common.white",
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {/* TODO: Change color based on whether background is dark */}
            <Logo
              size="xl"
              sx={{
                ...(headerOnDark && {
                  "& svg path": {
                    fill: theme.palette.common.white,
                  },
                }),
                ...(offset && {
                  "& svg path": {
                    fill: theme.palette.text.primary,
                  },
                }),
              }}
            />
          </Box>

          {mdUp && <NavDesktop data={navConfig} />}

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <Searchbar />

              {/*<SettingsButton />*/}
            </Stack>

            {mdUp && (
              <Button variant="contained" color="primary" href="/contact">
                Contact Us
              </Button>
            )}
          </Stack>

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
