import { forwardRef, ReactNode, CSSProperties } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { alpha, styled } from "@mui/material/styles";

// Define the shape of props using TypeScript's type system
type LabelProps = {
  children?: ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  variant?: "filled" | "outlined" | "ghost" | "soft";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  sx?: CSSProperties;
};

// Define the StyledLabel using styled from @mui/material/styles
const StyledLabel = styled(Box)<{ ownerState: LabelProps }>(({
  theme,
  ownerState,
}) => {
  // ... (The rest of your style definitions go here, unchanged)
  const isLight = theme.palette.mode === "light";

  const filledVariant = ownerState.variant === "filled";

  const outlinedVariant = ownerState.variant === "outlined";

  const softVariant = ownerState.variant === "soft";

  const defaultStyle = {
    ...(ownerState.color === "default" && {
      // FILLED
      ...(filledVariant && {
        color: isLight ? theme.palette.common.white : theme.palette.grey[800],
        backgroundColor: theme.palette.text.primary,
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        border: `2px solid ${theme.palette.text.primary}`,
      }),
      // SOFT
      ...(softVariant && {
        color: theme.palette.text.secondary,
        backgroundColor: alpha(theme.palette.grey[500], 0.16),
      }),
    }),
  };

  const colorStyle = {
    ...(ownerState.color !== "default" && {
      // FILLED
      ...(filledVariant && {
        // @ts-ignore
        color: theme.palette[ownerState.color].contrastText,
        // @ts-ignore
        backgroundColor: theme.palette[ownerState.color].main,
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: "transparent",
        // @ts-ignore
        color: theme.palette[ownerState.color].main,
        // @ts-ignore
        border: `2px solid ${theme.palette[ownerState.color].main}`,
      }),
      // SOFT
      ...(softVariant && {
        // @ts-ignore
        color: theme.palette[ownerState.color][isLight ? "dark" : "light"],
        // @ts-ignore
        backgroundColor: alpha(theme.palette[ownerState.color].main, 0.16),
      }),
    }),
  };

  return {
    height: 24,
    minWidth: 24,
    lineHeight: 0,
    borderRadius: 6,
    cursor: "default",
    alignItems: "center",
    whiteSpace: "nowrap",
    display: "inline-flex",
    justifyContent: "center",
    textTransform: "capitalize",
    padding: theme.spacing(0, 0.75),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shorter,
    }),
    ...defaultStyle,
    ...colorStyle,
  };
});

// ForwardRef render function
const Label = forwardRef<HTMLSpanElement, LabelProps>(
  (
    {
      children,
      color = "default",
      variant = "soft",
      startIcon,
      endIcon,
      sx,
      ...other
    },
    ref,
  ) => {
    const theme = useTheme();

    const iconStyle = {
      width: 16,
      height: 16,
      "& svg, img": { width: 1, height: 1, objectFit: "cover" },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        // @ts-ignore
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}> {startIcon} </Box>}
        {children}
        {endIcon && <Box sx={{ ml: 0.75, ...iconStyle }}> {endIcon} </Box>}
      </StyledLabel>
    );
  },
);

export default Label;

// Add display name
Label.displayName = "Label";
