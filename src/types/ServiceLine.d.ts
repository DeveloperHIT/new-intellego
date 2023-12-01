import { BlockContentType, ServiceType } from "@/types";

export interface ServiceLineType {
  title: string;
  slug: string;
  description: BlockContentType;
  clients: BlockContentType;
  representativeEngagements: BlockContentType;
  services: ServiceType[];
  servicesDescription: BlockContentType;
}
