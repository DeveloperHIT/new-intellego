import MotionLazy from "@/components/Animate/motionLazy";
// import ThemeProvider from "@/theme";
import MainLayout from "@/layouts/main";
import { SettingsDrawer, SettingsProvider } from "@/components/Settings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import IntellegoThemeProvider from "@/theme/customThemeProvider";

interface UserLayoutProps {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: UserLayoutProps) {
  const supabase = createServerComponentClient({ cookies });

  const { data: clientData } = await supabase
    .from("clients")
    .select("id, type, slug")
    .order("type", { ascending: true });

  const { data: serviceData } = await supabase
    .from("services")
    .select("id, service, slug")
    .order("service", { ascending: true });
  return (
    <SettingsProvider
      defaultSettings={{
        themeMode: "light", // 'light' | 'dark'
        themeDirection: "ltr", //  'rtl' | 'ltr'
        themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
      }}
    >
      {/*<ThemeProvider>*/}
      <IntellegoThemeProvider>
        <MotionLazy>
          {/*<ProgressBar />*/}
          <SettingsDrawer />
          <MainLayout clientData={clientData} serviceData={serviceData}>
            {children}
          </MainLayout>
        </MotionLazy>
        {/*</ThemeProvider>*/}
      </IntellegoThemeProvider>
    </SettingsProvider>
  );
}
