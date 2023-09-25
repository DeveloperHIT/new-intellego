"use client";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";

const Image = forwardRef(
  (
    {
      ratio,
      overlay,
      alt,
      src,
      blurOnHover = false, // default is false
      hovered,
      sx,
      ...other
    },
    ref,
  ) => {
    const theme = useTheme();

    const [refView, inView] = useInView({
      triggerOnce: true,
      rootMargin: "200px 0px",
    });

    const overlayStyles = overlay && {
      "&:before": {
        content: "''",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 1,
        position: "absolute",
        background: overlay || alpha(theme.palette.grey[900], 0.48),
      },
    };

    const blurEffect = blurOnHover && !hovered ? { filter: "blur(5px)" } : {};

    return (
      <Box
        ref={ref}
        component="span"
        className="component-image"
        sx={{
          overflow: "hidden",
          position: "relative",
          verticalAlign: "bottom",
          display: "inline-block",
          ...(!!ratio && {
            width: 1,
          }),
          ...overlayStyles,
          ...sx,
        }}
        {...other}
      >
        <Box
          component="img"
          ref={refView}
          alt={alt}
          src={inView ? src : undefined}
          sx={{
            width: 1,
            height: 1,
            objectFit: "cover",
            verticalAlign: "bottom",
            transition: blurOnHover
              ? "filter 0.3s ease-in-out, transform 0.3s ease-in-out"
              : undefined,
            ...blurEffect,
            transform: blurOnHover && hovered ? "scale(1.05)" : "scale(1)", // Add this line
            ...(!!ratio && {
              top: 0,
              left: 0,
              position: "absolute",
            }),
          }}
        />
      </Box>
    );
  },
);

Image.displayName = "Image";

export default Image;
