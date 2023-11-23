import { Components, Theme } from "@mui/material/styles";
import { accordionSummaryClasses, typographyClasses } from "@mui/material";

export const MuiAccordionSummary: Components<Theme>["MuiAccordionSummary"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      return {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        [`&.${accordionSummaryClasses.disabled}`]: {
          opacity: 1,
          color: theme.palette.action.disabled,
          [`& .${typographyClasses.root}`]: {
            color: "inherit",
          },
        },
      };
    },
    expandIconWrapper: ({}) => {
      return { color: "inherit" };
    },
  },
  variants: [],
};
