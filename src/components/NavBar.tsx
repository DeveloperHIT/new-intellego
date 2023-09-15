"use client";
import React, { useEffect } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Logo from "@/components/Logo";

import SearchBox from "@/components/SearchBox";
import theme from "@/components/ThemeRegistry/theme";

const navItems = ["Home", "Services", "Careers", "Insights"];

// TODO: Change color of nav bar on scroll

const NavBar = () => {
  const [blurValue, setBlurValue] = React.useState(20); // starting with a blur of 20px

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = 300;
      const maxBlur = 20; // maximum blur value
      const newBlur = Math.max(
        maxBlur - (currentScrollY / maxScroll) * maxBlur,
        5,
      ); // 5px is the minimum blur value
      setBlurValue(newBlur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#5E5E5E80",
        zIndex: 2000,
        borderBottom: "1px solid #C4C4C4",
        backdropFilter: `saturate(180%) blur(${blurValue}px)`,
        transition: "backdrop-filter 0.3s ease", // Adjust the timing here as needed
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
        {/* TODO: Fix hover color */}
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
