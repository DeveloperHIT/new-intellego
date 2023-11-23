import { alpha, Components, Theme } from "@mui/material/styles";
import { toggleButtonClasses } from "@mui/material/ToggleButton";

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"];

export const MuiToggleButton: Components<Theme>["MuiToggleButton"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const defaultStyle = {
        [`&.${toggleButtonClasses.selected}`]: {
          borderColor: "currentColor",
          boxShadow: "0 0 0 0.5px currentColor",
        },
      };

      const colorStyle = COLORS.map((color) => ({
        ...(ownerState.color === color &&
          ownerState.color !== "standard" && {
            "&:hover": {
              borderColor: alpha(theme.palette[ownerState.color].main, 0.48),
              backgroundColor: alpha(
                theme.palette[ownerState.color].main,
                theme.palette.action.hoverOpacity,
              ),
            },
          }),
      }));

      const disabledState = {
        [`&.${toggleButtonClasses.disabled}`]: {
          [`&.${toggleButtonClasses.selected}`]: {
            color: theme.palette.action.disabled,
            backgroundColor: theme.palette.action.selected,
            borderColor: theme.palette.action.disabledBackground,
          },
        },
      };

      return [defaultStyle, ...colorStyle, disabledState];
    },
  },
  variants: [],
};
