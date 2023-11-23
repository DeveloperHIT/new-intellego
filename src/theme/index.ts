import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { components } from "@/theme/components";
import {
  PaletteTokensDark,
  PaletteTokensLight,
} from "@/theme/foundations/palette";
import { TypographyTokens } from "@/theme/foundations/typography";
import { ShadowTokens } from "@/theme/foundations/shadows";
import { CustomShadowTokens } from "@/theme/foundations/shadows";

export const getDesignTokens = (mode: PaletteMode = "light") => ({
  palette: mode === "light" ? PaletteTokensLight : PaletteTokensDark,
  typography: TypographyTokens,
  shadows: mode === "light" ? ShadowTokens.light : ShadowTokens.dark,
  customShadows:
    mode === "light" ? CustomShadowTokens.light : CustomShadowTokens.dark,
});

export function getThemedComponents() {
  return {
    components: {
      ...components,
    },
  };
}

export const intellegoThemeDark: ThemeOptions = createTheme({
  ...getDesignTokens("dark"),
  ...getThemedComponents(),
});

export const intellegoThemeLight: ThemeOptions = createTheme({
  ...getDesignTokens("light"),
  ...getThemedComponents(),
});
