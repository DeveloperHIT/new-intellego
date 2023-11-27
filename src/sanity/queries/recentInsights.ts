import { groq } from "next-sanity";

export const getRecentInsightsQuery = groq`*[_type == "page"]{
    "title": pageBuilder[_type == "recentInsights"][0].title
}`;
