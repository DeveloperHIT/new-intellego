import { BlockContentType, ServiceType, SlugType } from "@/types";

export interface ClientType {
  _type: "clientType";
  title: string;
  slug: SlugType;
  description?: string;
  typicalServices?: ServiceType[];
  servicesDescription: BlockContentType;
}

// TODO: Add validation that matches to the typescript requirements
// TODO: E.g., description is optional, so it should be optional in the sanity studio, as well
