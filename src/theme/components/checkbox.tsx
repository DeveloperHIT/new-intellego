import { Components, Theme } from "@mui/material/styles";
import CheckboxIcon from "@/components/Iconify/CheckboxIcon";
import CheckboxCheckedIcon from "@/components/Iconify/CheckboxCheckedIcon";
import CheckboxIndeterminateIcon from "@/components/Iconify/CheckboxIndeterminateIcon";

export const MuiCheckbox: Components<Theme>["MuiCheckbox"] = {
  defaultProps: {
    size: "small",
    icon: <CheckboxIcon />,
    checkedIcon: <CheckboxCheckedIcon />,
    indeterminateIcon: <CheckboxIndeterminateIcon />,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        padding: theme.spacing(1),
      };
    },
  },
  variants: [],
};
