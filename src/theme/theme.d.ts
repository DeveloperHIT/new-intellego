import "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypeText {
    main?: string;
    focus?: string;
  }

  interface PaletteOptions {
    gradients?: {
      primary?: ColorPartial;
      secondary?: ColorPartial;
      info?: ColorPartial;
      success?: ColorPartial;
      warning?: ColorPartial;
      error?: ColorPartial;
      light?: ColorPartial;
      dark?: ColorPartial;
    };
    // ... add other custom properties here ...
  }

  interface Palette {
    gradients: {
      primary: ColorPartial;
      secondary: ColorPartial;
      info: ColorPartial;
      success: ColorPartial;
      warning: ColorPartial;
      error: ColorPartial;
      light: ColorPartial;
      dark: ColorPartial;
    };
  }

  interface ColorPartial {
    main: string;
    state: string;
  }

  interface Theme {
    functions: {
      linearGradient: (
        color: string,
        colorState: string,
        angle?: number,
      ) => string;
      rgba: (color: string, opacity: number) => string;
    };
  }

  interface ThemeOptions {
    functions?: {
      linearGradient?: (
        color: string,
        colorState: string,
        angle?: number,
      ) => string;
      rgba?: (color: string, opacity: number) => string;
    };
  }

  type TextTransform = "uppercase" | "lowercase" | "none" | "capitalize";

  interface ExtendedTypographyOptions extends TypographyStyleOptions {
    textTransform?: TextTransform;
  }

  interface TypographyOptions {
    button?: ExtendedTypographyOptions;
    // ... add other typography variants if needed
  }
}
