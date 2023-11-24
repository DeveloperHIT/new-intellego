import { StructureBuilder } from "sanity/desk";
import { allInsights } from "@/sanity/studio/desk/insights/allInsights";
import { filteredInsights } from "@/sanity/studio/desk/insights/filteredInsights";
import { insightCategories } from "@/sanity/studio/desk/insights/insightCategories";

// TODO: Get rid of "create new" insight categories button so they can be managed in siteConfig.
// TODO: Only allow one category to be selected per insight.
export const insightsManager = (S: StructureBuilder) =>
  S.listItem()
    .title("Insights Manager")
    .child(
      S.list()
        .title("Insights Manager")
        .items([allInsights(S), filteredInsights(S), insightCategories(S)]),
    );
