"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { intellegoThemeLight } from "@/theme/index";
import { CssBaseline } from "@mui/material";

interface CustomThemeProviderProps {
  children: ReactNode;
}

export default function CustomThemeProvider(props: CustomThemeProviderProps) {
  const { children } = props;

  return (
    <ThemeProvider theme={intellegoThemeLight}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
