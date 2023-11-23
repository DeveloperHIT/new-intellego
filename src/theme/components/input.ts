import { alpha, Components, Theme } from "@mui/material/styles";

export const MuiInput: Components<Theme>["MuiInput"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({}) => {
      return {};
    },
    underline: ({ theme }) => {
      const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled,
      };

      return {
        "&:before": {
          borderBottomColor: alpha(theme.palette.grey[500], 0.32),
        },
        "&:after": {
          borderBottomColor: color.focused,
        },
      };
    },
  },
  variants: [],
};
