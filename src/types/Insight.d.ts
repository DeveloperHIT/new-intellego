import { Author } from "@/types/Author";
import { SEO } from "@/types/SEO";
import { InsightSlug } from "@/types/InsightSlug";
import { Tag } from "@/types/Tag";
import { InsightCategory } from "@/types/InsightCategory";
import { MainImage } from "@/types/mainImage";

export interface ArticleHeaderData {
  author: Author;
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

export interface Article {
  path: string;
  featureArticle?: boolean;
  preview: ArticleHeaderData;
  seo?: SEO;
}

export interface Insight {
  slug: InsightSlug;
  estimatedWordCount: number;
  isSeries: boolean;
  author: Author;
  series: any;
  body: any;
  publishedAt: string;
  tags: Tag[];
  // TODO: This should be categories
  category: InsightCategory[];
  numberOfCharacters: number;
  estimatedReadingTime: number;
  mainImageHeight: number;
  _updatedAt: string;
  meta_description: string;
  mainImage: MainImage;
  mainImageWidth: number;
  _createdAt: string;
  title: string;
}
