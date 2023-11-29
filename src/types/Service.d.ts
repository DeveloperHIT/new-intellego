import { SlugType } from "@/types/Slug";
import engagement from "@/sanity/schemas/engagement";
import { BlockContentType } from "@/types/BlockContent";

export interface ServiceType {
  title: string;
  slug: SlugType;
  summary: string;
  description: BlockContentType;
  typicalEngagements?: engagement[];
}
