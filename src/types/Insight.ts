import { Author } from "@/types/Author";
import { PortableTextBlock } from "sanity";

export type Insight = {
  _id: string;
  _createdAt: string;
  title?: string;
  coverImage?: string;
  date?: string;
  updatedAt?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: PortableTextBlock[];
};
