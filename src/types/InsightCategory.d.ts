import { InsightSlug } from "@/types/InsightSlug";

export interface InsightCategory {
  _id: string;
  title: string;
  slug: InsightSlug;
  meta_description: string;
  publishedAt: string;
  postCount: number;
}
