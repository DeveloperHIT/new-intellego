export type AssetReference = {
  _ref: string;
  _type: string;
};

export type Author = {
  _id: string;
  name: string;
};

export type Category = {
  _id: string;
  title: string;
};

export type Image = {
  _type: string;
  asset: AssetReference;
};

export type Post = {
  _createdAt: string;
  _id: string;
  _rev?: string;
  _type: string;
  author: Author;
  categories: Category[];
  mainImage: any;
  objectID?: string;
  slug: string;
  tags: null | string[];
  title: string;
};
