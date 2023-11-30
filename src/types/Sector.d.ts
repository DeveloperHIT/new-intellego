import { SlugType } from "@/types/Slug";
import { BlockContentType } from "@/types/BlockContent";
import { ServiceLineType } from "@/types/ServiceLine";

export interface SectorType {
  title: string;
  slug: SlugType;
  description: BlockContentType;
  clients: BlockContentType;
  representativeEngagements: BlockContentType;
  serviceLines: ServiceLineType[];
}
