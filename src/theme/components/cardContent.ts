import { Components, Theme } from "@mui/material/styles";

export const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        padding: theme.spacing(3),
      };
    },
  },
  variants: [],
};
