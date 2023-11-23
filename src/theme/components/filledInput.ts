import { alpha, Components, Theme } from "@mui/material/styles";
import { filledInputClasses } from "@mui/material";

export const MuiFilledInput: Components<Theme>["MuiFilledInput"] = {
  defaultProps: {
    disableUnderline: true,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.grey[500], 0.08),
        "&:hover": {
          backgroundColor: alpha(theme.palette.grey[500], 0.16),
        },
        [`&.${filledInputClasses.focused}`]: {
          backgroundColor: alpha(theme.palette.grey[500], 0.16),
        },
        [`&.${filledInputClasses.error}`]: {
          backgroundColor: alpha(theme.palette.error.main, 0.08),
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: alpha(theme.palette.error.main, 0.16),
          },
        },
        [`&.${filledInputClasses.disabled}`]: {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      };
    },
  },
  variants: [],
};
