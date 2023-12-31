import { SlugType } from "@/types/Slug";
import { BlockContentType } from "@/types/BlockContent";

export interface ServiceType {
  title: string;
  slug: SlugType;
  description: BlockContentType;
  clients: BlockContentType;
  representativeEngagements: BlockContentType;
}
