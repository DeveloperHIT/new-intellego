import InsightsView from "@/sections/view/insightsView";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";
import { getCategoriesQuery, postsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { META_SEO_KEYWORDS } from "@/constants/metaData";

// TODO: Add metadata to all pages
export const metadata: Metadata = {
  title: "Insights",
  description: "Insights",
  keywords: META_SEO_KEYWORDS,
};

export default async function Page() {
  const categories = await sanityFetch<SanityDocument>({
    query: getCategoriesQuery,
  });

  const insights = await sanityFetch<SanityDocument>({
    query: postsQuery,
  });

  return (
    <div>
      <InsightsView categories={categories} insights={insights} />
    </div>
  );
}
