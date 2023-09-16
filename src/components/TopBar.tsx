"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/components/Logo";

interface Props {}

const TopBar = ({}: Props) => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component={"a"}
        href="/"
        title="intellego"
        width={{ xs: 100, md: 120 }}
      >
        <Logo size={"xl"} color={"white"} />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box marginLeft={3}>
          <Button
            variant="text"
            sx={{
              color: "white",
            }}
          >
            {/*<Link href={"/"}>Home</Link>*/}
            Home
          </Button>
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="text"
            sx={{
              color: "white",
            }}
          >
            {/*<Link href={"/services"}>Services</Link>*/}
            Services
          </Button>
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="text"
            sx={{
              color: "white",
            }}
          >
            Careers
          </Button>
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="text"
            sx={{
              color: "white",
            }}
          >
            Insights
          </Button>
        </Box>

        <Box marginLeft={3}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }} alignItems={"center"}>
        {/* TODO: Change hover color */}
        <Button
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
            color: "white",
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
