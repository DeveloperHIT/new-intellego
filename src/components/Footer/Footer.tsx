import { Box, Container, Grid, Typography } from "@mui/material";
import Logo from "@/components/Logo";
import React from "react";

interface SocialItem {
  icon?: React.ReactNode;
  link?: string;
}

interface Item {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  items: Item[];
}

interface FooterProps {
  socials: SocialItem[];
  menus: MenuItem[];
}

const Footer = ({ menus, socials }: FooterProps) => {
  return (
    <Box
      component="footer"
      pt={6}
      px={{ xs: 4, sm: 2, lg: 0 }}
      mt={6}
      pb={6}
      sx={{
        background: "rgb(248, 249, 250)",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3} mb={{ xs: 6, lg: 0 }}>
            <Box>
              <Logo size="xl" />
            </Box>

            <Box display="flex" alignItems="center">
              {socials.map(({ icon, link }, key) => (
                <Typography
                  key={link}
                  component="a"
                  href={link}
                  variant="body2"
                  color="secondary"
                  mr={key === socials.length - 1 ? 0 : 3}
                  sx={{ fontSize: "1.125rem" }}
                >
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid>
          {menus.map(({ name: title, items }, key) => (
            <Grid
              key={title}
              item
              xs={6}
              md={2}
              ml={key === 0 ? { xs: 0, lg: "auto" } : 0}
            >
              <Typography
                component="h6"
                variant="button"
                mb={1}
                fontWeight="bold"
                textTransform="capitalize"
              >
                {title}
              </Typography>
              <Box
                component="ul"
                p={0}
                m={0}
                sx={{
                  listStyle: "none",
                }}
              >
                {items.map(({ name, href }) => (
                  <Box key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    <Typography
                      component="a"
                      variant="button"
                      href={href}
                      color="secondary"
                      fontWeight="regular"
                      textTransform="capitalize"
                      pb={0.5}
                    >
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
