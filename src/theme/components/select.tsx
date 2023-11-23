import { Components, Theme } from "@mui/material/styles";
import ArrowDownIcon from "@/components/Iconify/ArrowDownIcon";

export const MuiSelect: Components<Theme>["MuiSelect"] = {
  defaultProps: {
    IconComponent: ArrowDownIcon,
  },
  styleOverrides: {
    root: ({}) => {
      return {
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: "calc(50% - 9px)",
        },
      };
    },
  },
  variants: [],
};
