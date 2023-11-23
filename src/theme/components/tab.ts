import { Components, Theme } from "@mui/material/styles";

export const MuiTab: Components<Theme>["MuiTab"] = {
  defaultProps: {
    disableRipple: true,
    iconPosition: "start",
  },
  styleOverrides: {
    root: ({}) => {
      return {};
    },
  },
  variants: [],
};
