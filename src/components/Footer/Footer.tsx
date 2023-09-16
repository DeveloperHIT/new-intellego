import { Box, Button, Grid } from "@mui/material";
import React from "react";
import TopFooterLinks from "@/components/Footer/Top/TopFooterLinks";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <TopFooterLinks />
          <Button variant="contained">Contact Us</Button>
        </Box>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Footer;
