import { insights } from "./insights";
import { settings } from "./settings";
import { StructureBuilder } from "sanity/desk";
import { careers } from "@/sanity/studio/desk/careers";

/**
 * Defines the overall desk structure in the Sanity Studio.
 *
 * @param {Object} S - The desk builder object.
 * @returns {Object} The desk structure with lists, items, and children defined.
 */
export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      // Add insight categories
      S.listItem()
        .title("Manage Insight Categories")
        .child(S.documentTypeList("category").title("Insight Categories")),
      settings(S),
      S.divider(),
      // TODO: Get rid of "create new" insight categories button so they can be managed in settings.
      // TODO: Only allow one category to be selected per insight.
      insights(S),
      S.listItem().title("All Insights").child(
        /* Create a list of all posts */
        S.documentList()
          .title("All Insights")

          .filter('_type == "post"'),
      ),
      S.divider(),
      careers(S),
    ]);
