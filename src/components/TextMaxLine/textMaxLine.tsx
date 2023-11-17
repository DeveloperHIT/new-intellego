import React, { forwardRef, ReactNode, CSSProperties } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useTypography from "./useTypography";

interface TextMaxLineProps {
  asLink?: boolean;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  line?: number;
  persistent?: boolean;
  children: ReactNode;
  sx?: CSSProperties;

  [key: string]: any;
}

const TextMaxLine = forwardRef<HTMLDivElement, TextMaxLineProps>(
  (
    {
      asLink,
      href,
      variant = "body1",
      line = 2,
      persistent = false,
      children,
      sx,
      ...other
    },
    ref,
  ) => {
    const { lineHeight } = useTypography(variant);

    const styles: CSSProperties = {
      overflow: "hidden",
      textDecoration: "none",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: line,
      WebkitBoxOrient: "vertical",
      ...(persistent && {
        height: `${lineHeight * line}px`,
      }),
      ...sx,
    };

    if (asLink) {
      return (
        <Link
          color="inherit"
          ref={ref as React.Ref<HTMLAnchorElement>}
          variant={variant}
          sx={styles}
          {...other}
        >
          {children}
        </Link>
      );
    }

    return (
      <Typography ref={ref} variant={variant} sx={styles} {...other}>
        {children}
      </Typography>
    );
  },
);

TextMaxLine.displayName = "TextMaxLine";

export default TextMaxLine;
