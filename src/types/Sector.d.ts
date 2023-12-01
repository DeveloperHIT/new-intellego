import { BlockContentType } from "@/types/BlockContent";
import { ServiceLineType } from "@/types/ServiceLine";

export interface SectorType {
  title: string;
  slug: string;
  description: BlockContentType;
  clients: BlockContentType;
  representativeEngagements: BlockContentType;
  serviceLines: ServiceLineType[];
}
