import { Components, Theme } from "@mui/material/styles";

export const MuiLink: Components<Theme>["MuiLink"] = {
  defaultProps: {
    underline: "hover",
  },
  styleOverrides: {
    root: ({}) => {
      return {};
    },
  },
  variants: [],
};
