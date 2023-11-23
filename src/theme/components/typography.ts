import { Components, Theme } from "@mui/material/styles";

export const MuiTypography: Components<Theme>["MuiTypography"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      };
    },
  },
  variants: [],
};
