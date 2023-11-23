import { Components, Theme } from "@mui/material/styles";

export const MuiFormControlLabel: Components<Theme>["MuiFormControlLabel"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        ...theme.typography.body2,
      };
    },
  },
  variants: [],
};
