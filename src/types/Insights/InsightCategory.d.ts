import { InsightSlug } from "@/types/Insights/InsightSlug";

export interface InsightCategory {
  _id: string;
  title: string;
  slug: InsightSlug;
  meta_description: string;
  publishedAt: string;
  postCount: number;
}
