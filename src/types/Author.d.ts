import { ImageData } from "@/types/Image";

export interface Author {
  image?: ImageData;
  name: string;
  designation: string;
  bio: string;
  post?: any;
  slug: {
    current: string;
  };
}
