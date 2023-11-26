import { Slug } from "@/types/index";

export interface AuthorType {
  name: string;
  slug: Slug;
  image: string;
  designation: string;
  profiles: any;
  bio: any;
  about: any;
}
