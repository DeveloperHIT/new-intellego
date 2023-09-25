"use client";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import Logo from "@/components/Logo";
import { useOffsetTop } from "@/hooks/useOffsetTop";
import { useTheme } from "@mui/material";
import { bgBlur } from "@/theme/css";
import { HEADER } from "@/theme/config";
import { useResponsive } from "@/hooks/useResponsive";
import NavDesktop from "@/components/NavDesktop";
import { navConfig } from "@/theme/config";
import HeaderShadow from "@/components/HeaderShadow";

const Header = ({ headerOnDark }) => {
  const theme = useTheme();
  const offset = useOffsetTop();
  const mdUp = useResponsive("up", "md");

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.MOBILE,
            md: HEADER.DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
          ...(headerOnDark && {
            color: "white",
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: HEADER.DESKTOP - 16,
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
            <Logo size="xl" color="primary" />
          </Box>
          {mdUp && <NavDesktop data={navConfig} />}
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack spacing={1} direction="row" alignItems="center">
              {/*TODO: Add search bar */}
            </Stack>
            {mdUp && (
              <Button variant="contained" color="inherit" href="/contact">
                Contact Us
              </Button>
            )}
          </Stack>
          {/* TODO: Add NavMobile */}
        </Container>
      </Toolbar>
      {offset && <HeaderShadow />}
    </AppBar>
  );
};

export default Header;
