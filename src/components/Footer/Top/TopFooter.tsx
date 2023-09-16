import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const navItems = ["Home", "Services", "Careers", "Insights"];

const TopFooter = () => {
  return (
    <Box
      display="flex"
      sx={{
        justifyContent: "space-between",
        paddingBottom: 2,
        paddingTop: 2,
      }}
    >
      {/* TODO: Make buttons align left */}
      <Box>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: "primary" }}>
            {item}
          </Button>
        ))}
      </Box>
      <Button variant="contained" color="primary">
        Contact Us
      </Button>
    </Box>
  );
};

export default TopFooter;
