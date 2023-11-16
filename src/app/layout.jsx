import "../theme/globals.css";

export const dynamic = "force-dynamic";

import { primaryFont } from "@/theme/typography";

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
  return (
    <html lang="en" className={primaryFont.className}>
      <body>{children}</body>
    </html>
  );
}
