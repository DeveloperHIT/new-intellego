import { StructureBuilder } from "sanity/desk";

export const insightCategories = (S: StructureBuilder) =>
  S.listItem()
    .title("InsightType Categories")
    .child(S.documentTypeList("category").title("InsightType Categories"));
