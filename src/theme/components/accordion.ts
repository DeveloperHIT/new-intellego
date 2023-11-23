import { Components, Theme } from "@mui/material/styles";
import { accordionClasses } from "@mui/material";

export const MuiAccordion: Components<Theme>["MuiAccordion"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        backgroundColor: "transparent",
        [`&.${accordionClasses.expanded}`]: {
          boxShadow: theme.customShadows.z8,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        },
        [`&.${accordionClasses.disabled}`]: {
          backgroundColor: "transparent",
        },
      };
    },
  },
  variants: [],
};
