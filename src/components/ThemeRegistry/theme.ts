import { Roboto } from "next/font/google";
import { createTheme, PaletteOptions } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// declare module "@mui/material/styles" {
//   interface PaletteOptions {
//     appBar?: {
//       main?: string;
//       gradient?: string;
//     };
//   }
// }

const theme = createTheme({
  palette: {
    mode: "light",
    // appBar: {
    //   main: "rgba(94, 94, 94, 0.25)", // Adjust this if needed
    // },
    primary: {
      main: "#0a2540",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;

// --backgroundColor: #f6f9fc;
// --linkColor: var(--accentColor);
// --linkHoverColor: #0a2540;
// --buttonColor: var(--accentColor);
// --buttonHoverColor: #0a2540;
// --buttonDisabledColor: #cfd7df;
// --buttonDisabledOpacity: 0.7;
// --knockoutColor: #fff;
// --knockoutDisabledColor: #8898aa;
// --guideSolidColor: rgba(66,71,112,0.06);
// --guideDashedColor: rgba(66,71,112,0.09);
// --titleColor: #0a2540;
// --textColor: #425466;
// --formFieldDescriptionTextColor: #3f4b66;
// --inputBackground: #f6f9fc;
// --checkboxInputBackground: #e7ecf1;
// --inputPlaceholderColor: #727f96;
// --inputTextColor: #0a2540;
// --inputErrorAccentColor: #ff5996;
// --annotationColor: #8c9eb1;
// --maskFadeColor: rgba(0,0,0,0.4);
// --navColor: #0a2540;
// --navHoverColor: #0a2540;
// --navHoverOpacity: 0.6;
// --footerColor: #0a2540;
// --cardBorderColor: #cbd6e0;
// --cardBackground: #fff;
// --subcardBackground: #f6f9fc;
// --gridSubcardBackground: #fff;
// --tableIconColor: #8c9eb1;
// --stripeAccentWhite: #fff;
// --stripeAccentLight: #e3e7ec;
// --stripeAccentDark: #0a2540;
// --bulletColor: #cfd7df;
// --footnoteTextColor: #4d5b78;
// --disclaimerTextColor: #707f98;
// --inlineCodeTextColor: #2c3a57;
// --inlineCodeBackground: #dce6ee;
// --socialLogoColor: #c4ccd8;
// --socialLogoHoverColor: #0a2540;
