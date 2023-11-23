import { Components, Theme } from "@mui/material/styles";

export const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  defaultProps: {
    color: "transparent",
  },
  styleOverrides: {
    root: ({}) => {
      return {
        boxShadow: "none",
      };
    },
  },
  variants: [],
};
