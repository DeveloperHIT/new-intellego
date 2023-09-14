"use client";
import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Logo from "@/components/Logo/Logo";

import SearchBox from "@/components/SearchBox/SearchBox";
import theme from "@/components/ThemeRegistry/theme";

const navItems = ["Home", "Services", "Careers", "Articles"];

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#5E5E5E99", // TODO: Fix this with RGBA and theme
        zIndex: 2000,
        borderBottom: "1px solid #C4C4C4",
      }}
      component="nav"
    >
      <Toolbar>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            paddingTop: 1,
          }}
        >
          <Logo size="xl" color="white" />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "white" }}>
              {item}
            </Button>
          ))}
        </Box>
        <SearchBox />
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: theme.palette.primary.main }}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
