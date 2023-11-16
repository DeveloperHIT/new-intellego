import React, { forwardRef, ReactNode, CSSProperties } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useTypography from "./useTypography";

interface TextMaxLineProps {
  asLink?: boolean;
  variant?: string;
  line?: number;
  persistent?: boolean;
  children: ReactNode;
  sx?: CSSProperties;

  [key: string]: any;
}

const TextMaxLine = forwardRef<
  HTMLDivElement | HTMLAnchorElement,
  TextMaxLineProps
>(
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

    const styles = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: line,
      WebkitBoxOrient: "vertical",
      ...(persistent && {
        height: lineHeight * line,
      }),
      ...sx,
    };

    // Check if children are valid
    if (!React.isValidElement(children) && typeof children !== "string") {
      console.error("Invalid children passed to TextMaxLine:", children);
      return null; // or render some fallback UI
    }

    if (asLink && href) {
      return (
        <Link
          color="inherit"
          ref={ref}
          href={href}
          // @ts-ignore
          variant={variant}
          sx={{ ...styles }}
          {...other}
        >
          {children}
        </Link>
      );
    }

    return (
      <Typography
        ref={ref}
        // @ts-ignore
        variant={variant}
        sx={{ ...styles }}
        {...other}
      >
        {children}
      </Typography>
    );
  },
);

TextMaxLine.displayName = "TextMaxLine";

export default TextMaxLine;
