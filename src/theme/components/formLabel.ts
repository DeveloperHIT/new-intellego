import { Components, Theme } from "@mui/material/styles";
import { inputLabelClasses } from "@mui/material";

export const MuiFormLabel: Components<Theme>["MuiFormLabel"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled,
      };

      const font = {
        label: theme.typography.body1,
        value: theme.typography.body2,
      };

      const defaultStyle = {
        ...font.value,
        color: color.placeholder,
        [`&.${inputLabelClasses.shrink}`]: {
          ...font.label,
          fontWeight: 600,
          color: color.active,
          [`&.${inputLabelClasses.focused}`]: {
            color: color.focused,
          },
          [`&.${inputLabelClasses.error}`]: {
            color: theme.palette.error.main,
          },
          [`&.${inputLabelClasses.disabled}`]: {
            color: theme.palette.text.disabled,
          },
          [`&.${inputLabelClasses.filled}`]: {
            transform: "translate(12px, 6px) scale(0.75)",
          },
        },
      };

      return [defaultStyle];
    },
  },
  variants: [],
};
