import "./globals.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

import ThemeProvider from "@/theme";
import { primaryFont } from "@/theme/typography";

import MotionLazy from "@/components/Animate/motionLazy";
import { SettingsDrawer, SettingsProvider } from "@/components/Settings";
import MainLayout from "@/layouts/main";

export const metadata = {
  title: "intellego",
  description: "Industry expert in healthcare fair market value",
  keywords:
    "fair market value, stark, anti-kickback, valuation, compensation, fmv, asc, dialysis clinic, digital health, hcp/kol, life sciences, pharma",
  themeColor: "#000000",
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("clients")
    .select("id, type, slug")
    .order("type", { ascending: true });

  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <SettingsProvider
          defaultSettings={{
            themeMode: "light", // 'light' | 'dark'
            themeDirection: "ltr", //  'rtl' | 'ltr'
            themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              {/*<ProgressBar />*/}
              <SettingsDrawer />
              <MainLayout data={data}>{children}</MainLayout>
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
