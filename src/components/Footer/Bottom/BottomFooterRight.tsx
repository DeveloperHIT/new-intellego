"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  FormGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "@/components/Logo";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});

const BottomFooterRight = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        width: "570px",
        height: "322px",
        gap: "40px",
      }}
    >
      <Logo color="white" size="xl" />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#475C7F",
          width: "570px",
          height: "247px",
          padding: "32px 32px 40px 32px",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "46px",
          }}
        >
          Stay Up To Date With Our News
        </Typography>
        <FormGroup
          row
          sx={{
            display: "grid",
          }}
        >
          <CustomTextField
            placeholder="Email"
            variant="outlined"
            sx={{
              gridColumn: 1,
            }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              gridColumn: 2,
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          >
            Subscribe
          </Button>
        </FormGroup>
      </Card>
      <Box
        display="flex"
        sx={{
          justifyContent: "end",
        }}
      >
        <Typography
          sx={{
            fontWeight: 550,
            fontStyle: "italic",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Copyright © 2023, All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default BottomFooterRight;
