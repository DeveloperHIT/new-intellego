import { alpha, Components, Theme } from "@mui/material/styles";
import { toggleButtonClasses } from "@mui/material/ToggleButton";

export const MuiToggleButtonGroup: Components<Theme>["MuiToggleButtonGroup"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        border: `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
      };
    },
    grouped: ({ theme }) => {
      return {
        margin: 4,
        [`&.${toggleButtonClasses.selected}`]: {
          boxShadow: "none",
        },
        "&:not(:first-of-type), &:not(:last-of-type)": {
          borderRadius: theme.shape.borderRadius,
          borderColor: "transparent",
        },
      };
    },
  },
  variants: [],
};
