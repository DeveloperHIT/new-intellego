import { Components, Theme } from "@mui/material/styles";
import { inputBaseClasses } from "@mui/material";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        [`&.${inputBaseClasses.disabled}`]: {
          "& svg": {
            color: theme.palette.text.disabled,
          },
        },
      };
    },
    input: ({ theme }) => {
      const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled,
      };

      const font = {
        label: theme.typography.body1,
        value: theme.typography.body2,
      };

      return {
        ...font.value,
        "&::placeholder": {
          opacity: 100,
          color: color.placeholder,
        },
      };
    },
  },
  variants: [],
};
