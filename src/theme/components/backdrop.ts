import { alpha, Components, Theme } from "@mui/material/styles";

export const MuiBackdrop: Components<Theme>["MuiBackdrop"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        backgroundColor: alpha(theme.palette.grey[900], 0.8),
      };
    },
    invisible: {
      backgroundColor: "transparent",
    },
  },
  variants: [],
};
