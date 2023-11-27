"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import { useTheme } from "@mui/material/styles";
import { bgBlur } from "@/theme/css";
import Logo from "@/components/Logo/Logo";
import { useResponsive } from "@/hooks/useResponsive";
import { useOffsetTop } from "@/hooks/useOffsetTop";
import { HEADER } from "../configLayout";
import HeaderShadow from "../common/headerShadow";
import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
// TODO: Move this to Sanity
import { navConfig } from "./configNavigation";

interface HeaderProps {
  headerOnDark?: string[];
}

export default function Header({ headerOnDark }: HeaderProps) {
  const theme = useTheme();

  const offset = useOffsetTop();

  const mdUp = useResponsive("up", "md");

  const toolbarStyles = {
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
      color: "text.primary",
      height: {
        md: HEADER.H_DESKTOP - 16,
      },
    }),
  };

  if (offset) {
    const blurStyles = bgBlur({
      color: theme.palette.background.default,
      blur: 8,
      opacity: 0.5,
    });
    Object.assign(toolbarStyles, blurStyles);
  }

  return (
    <AppBar>
      <Toolbar disableGutters sx={toolbarStyles}>
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            <NextLink href="/">
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
            </NextLink>
          </Box>

          {mdUp && <NavDesktop data={navConfig} />}

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            {/*<Stack spacing={1} direction="row" alignItems="center">*/}
            {/*  <Searchbar />*/}

            {/*  /!*<SettingsButton />*!/*/}
            {/*</Stack>*/}

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
