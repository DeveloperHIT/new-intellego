import { Components, Theme } from "@mui/material/styles";

export const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  defaultProps: {
    titleTypographyProps: { variant: "h6" },
    subheaderTypographyProps: {
      variant: "body2",
      // TODO: How to use theme here? Should this be a variant?
      // marginTop: theme.spacing(0.5),
    },
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        padding: theme.spacing(3, 3, 0),
      };
    },
  },
  variants: [],
};
