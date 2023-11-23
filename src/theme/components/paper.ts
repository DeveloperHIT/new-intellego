import { alpha, Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Paper" {}

export const MuiPaper: Components<Theme>["MuiPaper"] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const outlinedVariant = ownerState.variant === "outlined";

      const defaultStyle = {
        backgroundImage: "none",
        ...(outlinedVariant && {
          borderColor: alpha(theme.palette.grey[500], 0.16),
        }),
      };

      return [defaultStyle];
    },
  },
  variants: [],
};
