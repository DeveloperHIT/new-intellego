import { Author } from "@/types/Author";
import { SEO } from "@/types/SEO";

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
