import InsightsView from "@/sections/view/insightsView";
import { Metadata } from "next";
import { META_SEO_KEYWORDS } from "@/constants/metaData";

// TODO: Add metadata to all pages
export const metadata: Metadata = {
  title: "Insights",
  description: "Insights",
  keywords: META_SEO_KEYWORDS,
};

export default async function Page() {
  return <InsightsView />;
}
