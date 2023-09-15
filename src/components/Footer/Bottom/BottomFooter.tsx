import React from "react";
import { Box } from "@mui/material";
import BottomFooterLeft from "@/components/Footer/Bottom/BottomFooterLeft";
import BottomFooterRight from "@/components/Footer/Bottom/BottomFooterRight";

const BottomFooter = () => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "#1F1F1F",
        color: "#FFFFFF",
        height: "550px",
        flexDirection: "row",
        padding: "60px 20px",
        justifyContent: "space-between",
      }}
    >
      <BottomFooterLeft />
      <BottomFooterRight />
    </Box>
  );
};

export default BottomFooter;
