import { BlockContentType, ServiceType, SlugType } from "@/types";

export interface ServiceLineType {
  title: string;
  slug: SlugType;
  description?: string;
  services?: ServiceType[];
  servicesDescription: BlockContentType;
}
