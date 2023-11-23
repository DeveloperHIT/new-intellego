import { Components, Theme } from "@mui/material/styles";

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  defaultProps: {
    textColor: "inherit",
    variant: "scrollable",
    allowScrollButtonsMobile: true,
  },
  styleOverrides: {
    root: ({}) => {
      return {};
    },
  },
  variants: [],
};
