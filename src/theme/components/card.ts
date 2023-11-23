import { Components, Theme } from "@mui/material/styles";

export const MuiCard: Components<Theme>["MuiCard"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        position: "relative",
        boxShadow: theme.customShadows.card,
        borderRadius: theme.shape.borderRadius * 2,
        zIndex: 0,
      };
    },
  },
  variants: [],
};
