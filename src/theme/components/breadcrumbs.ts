import { Components, Theme } from "@mui/material/styles";

export const MuiBreadcrumbs: Components<Theme>["MuiBreadcrumbs"] = {
  defaultProps: {},
  styleOverrides: {
    separator: ({ theme }) => {
      return {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      };
    },
    li: ({ theme }) => {
      return {
        display: "inline-flex",
        margin: theme.spacing(0.25, 0),
        "& > *": {
          ...theme.typography.body2,
        },
      };
    },
  },
  variants: [],
};
