import React from "react";
import { Box, Button } from "@mui/material";
import TopFooterLinks from "@/components/Footer/Top/TopFooterLinks";

const TopFooter = () => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "#FFFFFF",
        height: "106px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <TopFooterLinks />
      <Button variant="contained">Contact Us</Button>
    </Box>
  );
};

export default TopFooter;
