import { Components, Theme } from "@mui/material/styles";

export const MuiFormHelperText: Components<Theme>["MuiFormHelperText"] = {
  defaultProps: { component: "div" },
  styleOverrides: {
    root: ({ theme }) => {
      const defaultStyle = {
        marginTop: theme.spacing(1),
      };

      return [defaultStyle];
    },
  },
  variants: [],
};
