import { getHeroQuery } from "@/sanity/queries/hero";
import { postQuery, postsQuery } from "@/sanity/queries/insights";
import { getRecentInsightsQuery } from "@/sanity/queries/recentInsights";
import { getSectorsQuery, getSectorQuery } from "@/sanity/queries/sectors";
import {
  getServiceLineQuery,
  getServiceLinesBySectorQuery,
} from "@/sanity/queries/serviceLines";

export const queries = {
  getHeroQuery,
  getRecentInsightsQuery,
  getSectorQuery,
  getSectorsQuery,
  getServiceLineQuery,
  getServiceLinesBySectorQuery,
  // TODO: Rename these to getPostsQuery and getPostQuery
  postQuery,
  postsQuery,
};
