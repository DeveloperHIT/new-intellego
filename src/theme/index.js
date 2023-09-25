"use client";
import { useMemo } from "react";
import merge from "lodash.merge";
import { createTheme } from "@mui/material/styles";
import { componentOverrides } from "./overrides";
import { palette } from "@/theme/palette";
import { customShadows } from "@/theme/customShadows";
import { shadows } from "@/theme/shadows";
import { typography } from "@/theme/typography";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { darkMode } from "@/theme/options/darkMode";
import { useSettingsContext } from "@/components/Settings";
import { presets } from "@/theme/options/presets";

export default function CustomThemeProvider({ children }) {
  const settings = useSettingsContext();

  const darkModeOption = darkMode(settings.themeMode);

  const presetsOption = presets(settings.themeColorPresets);

  const themeSettings = useMemo(
    () => ({
      palette: palette("light"),
      shadows: shadows("light"),
      customShadows: customShadows("light"),
      typography,
      shape: { borderRadius: 6 },
    }),
    [],
  );

  const memoizedValue = useMemo(
    () => merge(themeSettings, darkModeOption, presetsOption),
    [themeSettings, darkModeOption, presetsOption],
  );

  const theme = createTheme(memoizedValue);

  theme.components = componentOverrides(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
