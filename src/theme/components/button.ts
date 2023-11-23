import { alpha, Components, Theme } from "@mui/material/styles";
import { buttonClasses } from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"];

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    color: "inherit",
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const inheritColor = ownerState.color === "inherit";
      const containedVariant = ownerState.variant === "contained";
      const outlinedVariant = ownerState.variant === "outlined";
      const softVariant = ownerState.variant === "soft";
      const textVariant = ownerState.variant === "text";
      const lightMode = theme.palette.mode === "light";
      const smallSize = ownerState.size === "small";
      const mediumSize = ownerState.size === "medium";
      const largeSize = ownerState.size === "large";

      const defaultStyle = {
        ...(inheritColor && {
          ...(containedVariant && {
            color: lightMode
              ? theme.palette.common.white
              : theme.palette.grey[800],
            backgroundColor: lightMode
              ? theme.palette.grey[800]
              : theme.palette.common.white,
            "&:hover": {
              backgroundColor: lightMode
                ? theme.palette.grey[700]
                : theme.palette.grey[400],
            },
          }),
          ...(outlinedVariant && {
            borderColor: alpha(theme.palette.grey[500], 0.32),
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }),
          ...(softVariant && {
            color: theme.palette.text.primary,
            backgroundColor: alpha(theme.palette.grey[500], 0.08),
            "&:hover": {
              backgroundColor: alpha(theme.palette.grey[500], 0.24),
            },
          }),
          ...(textVariant && {
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }),
        }),
        ...(outlinedVariant && {
          "&:hover": {
            borderColor: "currentColor",
            boxShadow: "0 0 0 0.5px currentColor",
          },
        }),
      };

      const colorStyle = COLORS.map((color) => ({
        ...(ownerState.color === color && {
          // CONTAINED
          ...(containedVariant && {
            "&:hover": {
              boxShadow:
                theme.customShadows[color as keyof typeof theme.customShadows],
            },
          }),

          // SOFT variant for when the button is using a theme color
          ...(softVariant &&
            ownerState.color !== "inherit" && {
              color: theme.palette[ownerState.color].contrastText,
              backgroundColor: alpha(
                theme.palette[ownerState.color].main,
                0.16,
              ),
              "&:hover": {
                backgroundColor: alpha(
                  theme.palette[ownerState.color].main,
                  0.32,
                ),
              },
            }),
        }),
      }));

      const disabledStyle = {
        [`&.${buttonClasses.disabled}`]: {
          // SOFT
          ...(softVariant && {
            backgroundColor: theme.palette.action.disabledBackground,
          }),
        },
      };

      const sizeStyle = {
        ...(smallSize && {
          height: 30,
          fontSize: 13,
          paddingLeft: 8,
          paddingRight: 8,
          ...(textVariant && {
            paddingLeft: 4,
            paddingRight: 4,
          }),
        }),
        ...(mediumSize && {
          paddingLeft: 12,
          paddingRight: 12,
          ...(textVariant && {
            paddingLeft: 8,
            paddingRight: 8,
          }),
        }),
        ...(largeSize && {
          height: 48,
          fontSize: 15,
          paddingLeft: 16,
          paddingRight: 16,
          ...(textVariant && {
            paddingLeft: 10,
            paddingRight: 10,
          }),
        }),
      };

      return [defaultStyle, ...colorStyle, disabledStyle, sizeStyle];
    },
  },
  variants: [],
};
