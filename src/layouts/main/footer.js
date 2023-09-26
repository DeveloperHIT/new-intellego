"use client";
import Link from "@mui/material/Link";
import Masonry from "@mui/lab/Masonry";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import { _socials } from "@/_mock";
import Logo from "@/components/Logo";
import Iconify from "@/components/Iconify";
import { usePathname } from "@/hooks/usePathname";
import RouterLink from "@/routes/routerLink";
import { useResponsive } from "@/hooks/useResponsive";
import { useBoolean } from "@/hooks/useBoolean";
import { navConfig } from "@/theme/config";
import { pageLinks } from "@/layouts/main/configNavigation";
import Collapse from "@mui/material/Collapse";

export default function Footer() {
  const mdUp = useResponsive("up", "md");

  const mobileList = navConfig.find((i) => i.title === "Pages")?.children || [];

  const desktopList = pageLinks.sort(
    (listA, listB) => Number(listA.order) - Number(listB.order),
  );

  const renderLists = mdUp ? desktopList : mobileList;

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: "hidden",
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent={{ md: "space-between" }}>
          <Grid xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Logo size="xl" />

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The industry leader in healthcare fair market value solutions.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    Subscribe to our newsletter to receive latest articles to
                    your inbox weekly.
                  </Typography>
                </Stack>

                <TextField
                  fullWidth
                  hiddenLabel
                  placeholder="Email address"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          color="inherit"
                          size="large"
                          sx={{ mr: -1.25 }}
                        >
                          Subscribe
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Social</Typography>
                <Stack direction="row" alignItems="center">
                  {_socials.map((social) => (
                    <IconButton key={social.value} color="primary">
                      <Iconify icon={social.icon} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            {mdUp ? (
              <Masonry
                columns={3}
                spacing={2}
                defaultColumns={3}
                defaultSpacing={2}
              >
                {renderLists.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: "center" }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            © 2023. All rights reserved
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: "text.secondary" }}>
              Help Center
            </Link>

            <Link variant="caption" sx={{ color: "text.secondary" }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}

export function ListDesktop({ list }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
              },
              ...(active && {
                color: "text.primary",
                fontWeight: "fontWeightSemiBold",
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

export function ListMobile({ list }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={
            listExpand.value ? "carbon:chevron-down" : "carbon:chevron-right"
          }
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: "text.primary",
                },
                ...(pathname === `${link.path}/` && {
                  color: "text.primary",
                  fontWeight: "fontWeightSemiBold",
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
