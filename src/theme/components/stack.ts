import { Components, Theme } from "@mui/material/styles";

export const MuiStack: Components<Theme>["MuiStack"] = {
  defaultProps: {
    useFlexGap: true,
  },
  styleOverrides: {
    root: ({}) => {
      return {};
    },
  },
  variants: [],
};
