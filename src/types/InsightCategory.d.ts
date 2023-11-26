import { SlugType } from "@/types/Slug";

export interface InsightCategoryType {
  _id: string;
  title: string;
  slug: SlugType;
  meta_description: string;
  publishedAt: string;
  postCount: number;
}
