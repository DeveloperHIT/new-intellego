import React from "react";
import { Box, Button } from "@mui/material";

const navItems = ["Home", "Services", "Careers", "Insights"];

const TopFooterLinks = () => {
  return (
    <Box display="flex" sx={{ gap: "70px" }}>
      {navItems.map((item) => (
        <Button key={item} sx={{ color: "primary" }}>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default TopFooterLinks;
