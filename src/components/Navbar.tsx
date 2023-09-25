import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox/SearchBox";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "rgba(22,22,23,0.8)",
        backdropFilter: "saturate(180%) blur(20px)",
        transition: "background 0.5s cubic-bezier(.28,.11,.32,1)",
        transitionProperty: "background, backdrop-filter",
        paddingY: 1,
        px: { xs: 4, sm: 2, lg: 0 },
        borderBottom: "1px solid rgba(255,255,255,0.24)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="a" href="/" sx={{ display: "flex" }}>
              <Logo size="xl" color="white" />
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* Links */}
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                gap: 2,
              }}
            >
              <Typography
                component="a"
                variant="button"
                href="/services"
                fontWeight="regular"
                textTransform="capitalize"
                sx={{ color: "white !important" }}
              >
                Services
              </Typography>
              <Typography
                component="a"
                variant="button"
                href="/insights"
                fontWeight="regular"
                textTransform="capitalize"
                sx={{ color: "white !important" }}
              >
                Insights
              </Typography>
              <Typography
                component="a"
                variant="button"
                href="/careers"
                fontWeight="regular"
                textTransform="capitalize"
                sx={{ color: "white !important" }}
              >
                Careers
              </Typography>
            </Box>
            {/* Search Box */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "flex",
                },
              }}
            >
              <SearchBox />
            </Box>

            {/* Contact Us */}
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Button variant="contained">Contact Us</Button>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
