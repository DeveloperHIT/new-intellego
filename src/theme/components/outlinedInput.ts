import { alpha, Components, Theme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled,
      };

      return {
        [`&.${outlinedInputClasses.focused}`]: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: color.focused,
          },
        },
        [`&.${outlinedInputClasses.error}`]: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.error.main,
          },
        },
        [`&.${outlinedInputClasses.disabled}`]: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.action.disabledBackground,
          },
        },
      };
    },
    notchedOutline: ({ theme }) => {
      return {
        borderColor: alpha(theme.palette.grey[500], 0.2),
        transition: theme.transitions.create(["border-color"], {
          duration: theme.transitions.duration.shortest,
        }),
      };
    },
  },
  variants: [],
};
