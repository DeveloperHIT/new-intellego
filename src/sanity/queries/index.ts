import { getHeroQuery } from "@/sanity/queries/hero";
import { postQuery, postsQuery } from "@/sanity/queries/insights";
import { getRecentInsightsQuery } from "@/sanity/queries/recentInsights";

export const queries = {
  getHeroQuery,
  getRecentInsightsQuery,
  postQuery,
  postsQuery,
};
