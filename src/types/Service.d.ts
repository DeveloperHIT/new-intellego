import { SlugType } from "@/types/Slug";

export interface ServiceType {
  title: string;
  slug: SlugType;
  description?: string;
}
