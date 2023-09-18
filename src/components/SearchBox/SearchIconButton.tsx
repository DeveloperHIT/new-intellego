"use client";
import { IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)({
  background: "hsla(0, 0%, 100%, 0.08)",
  borderLeft: "1px solid hsla(0, 0%, 53.3%, 0.4)",
  borderRadius: "0 40px 40px 0",
  padding: 10,
  color: "hsla(0, 100%, 100%, 0.5)",
  height: "40px",
  "&:hover": {
    background: "hsla(0, 0%, 100%, 0.18)",
    borderLeft: "1px solid hsl(0, 0%, 18.82%)",
  },
  "&:focus": {
    outline: "none",
    background: "hsla(0, 0%, 100%, 0.08)",
  },
});
