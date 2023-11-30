import { getHeroQuery } from "@/sanity/queries/hero";
import { postQuery, postsQuery } from "@/sanity/queries/insights";
import { getRecentInsightsQuery } from "@/sanity/queries/recentInsights";
import { getSectorsQuery } from "@/sanity/queries/sectors";

export const queries = {
  getHeroQuery,
  getRecentInsightsQuery,
  getSectorsQuery,
  // TODO: Rename these to getPostsQuery and getPostQuery
  postQuery,
  postsQuery,
};
