import CareersView from "@/sections/view/careersView";
import { Metadata } from "next";
import { META_SEO_KEYWORDS } from "@/constants/metaData";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers",
  keywords: META_SEO_KEYWORDS,
};

export default function Page() {
  return <CareersView />;
}
