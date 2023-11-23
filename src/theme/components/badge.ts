import { Components, Theme } from "@mui/material/styles";
import { badgeClasses } from "@mui/material/Badge";

export const MuiBadge: Components<Theme>["MuiBadge"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => {
      // TODO: Add ownerState variants

      const baseStyles = {
        [`&.${badgeClasses.invisible}`]: {
          transform: "unset",
        },
        width: 10,
        zIndex: 9,
        padding: 0,
        height: 10,
        minWidth: "auto",
        "&:before, &:after": {
          content: "''",
          borderRadius: 1,
          backgroundColor: theme.palette.common.white,
        },
      };

      return [baseStyles];
    },
    dot: ({}) => {
      return { borderRadius: "50%" };
    },
  },
  variants: [],
};
