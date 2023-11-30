import { BlockContentType, ServiceType, SlugType } from "@/types";

export interface ServiceLineType {
  title: string;
  slug: SlugType;
  description: BlockContentType;
  clients: BlockContentType;
  representativeEngagements: BlockContentType;
  services: ServiceType[];
  servicesDescription: BlockContentType;
}
