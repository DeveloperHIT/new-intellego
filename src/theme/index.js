import { createTheme } from "@mui/material/styles";

// Import base
import boxShadows from "@/theme/base/boxShadows";
import breakpoints from "@/theme/base/breakpoints";
import colors from "./base/colors";
import globals from "@/theme/base/globals";
import typography from "@/theme/base/typography";

// Import helper functions
import linearGradient from "@/helpers/linearGradient";
import rgba from "@/helpers/rgba";

// Import components
import container from "@/theme/components/container";

export default createTheme({
  boxShadows: { ...boxShadows },
  breakpoints: { ...breakpoints },
  functions: {
    linearGradient,
    rgba,
  },
  palette: { ...colors },
  typography: { ...typography },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...container,
        ...globals,
      },
    },
  },
});
