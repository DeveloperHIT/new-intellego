import { Components, Theme } from "@mui/material/styles";

export const MuiFormControl: Components<Theme>["MuiFormControl"] = {
  defaultProps: {
    variant: "filled",
  },
  styleOverrides: {
    root: ({}) => {
      return {};
    },
  },
  variants: [],
};
