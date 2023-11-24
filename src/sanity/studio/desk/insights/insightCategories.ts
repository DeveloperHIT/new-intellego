import { StructureBuilder } from "sanity/desk";

export const insightCategories = (S: StructureBuilder) =>
  S.listItem()
    .title("Insight Categories")
    .child(S.documentTypeList("category").title("Insight Categories"));
