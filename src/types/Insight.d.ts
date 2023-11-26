import { AuthorType } from "@/types/Author";
import { SlugType } from "@/types/Slug";
import { TagType } from "@/types/Tag";
import { InsightCategoryType } from "@/types/InsightCategory";
import { ImageType } from "@/types/Image";

export interface ArticleHeaderDataType {
  author: AuthorType;
  _createdAt: Date;
  publishedAt: Date;
  title: string;
  tags: string[];
  thumbnail: string;
  meta_description: string;
  category?: string;
  mainImage: any;
  body: any;
  estimatedReadTime: number;
}

export interface InsightType {
  slug: SlugType;
  estimatedWordCount: number;
  isSeries: boolean;
  author: AuthorType;
  series: any;
  body: any;
  publishedAt: string;
  tags: TagType[];
  // TODO: This should be categories
  category: InsightCategoryType[];
  numberOfCharacters: number;
  estimatedReadingTime: number;
  mainImageHeight: number;
  _updatedAt: string;
  meta_description?: string;
  mainImage: ImageType;
  mainImageWidth: number;
  _createdAt: string;
  title: string;
}
